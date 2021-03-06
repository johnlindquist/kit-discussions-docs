import "@johnlindquist/kit"
import { getMetadata } from "@johnlindquist/kit/core/utils"

let { gql, GraphQLClient } = await npm("graphql-request")
let slugify = await npm("slugify")

let endpoint = "https://api.github.com/graphql"

let client = new GraphQLClient(endpoint, {
  headers: {
    "GraphQL-Features": "discussions_api",
    authorization: `Bearer ${await env(
      "GITHUB_DISCUSSIONS_TOKEN"
    )}`,
  },
})

let query = gql`
  query ($categoryId: ID) {
    repository(owner: "johnlindquist", name: "kit") {
      discussions(
        first: 100
        categoryId: $categoryId
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        # type: DiscussionConnection
        totalCount # Int!
        nodes {
          title
          url
          author {
            ... on User {
              twitterUsername
              name
            }
            login
            avatarUrl
            url
          }
          body
          id
          createdAt
        }
      }
    }
  }
`

let response = await client.request(query, {
  categoryId: "DIC_kwDOEu7MBc4B_u-c",
})

let discussions = response.repository.discussions.nodes.map(
  d => {
    const slug = slugify(d.title, {
      lower: true,
      strict: true,
    })

    return {
      ...d,
      slug,
    }
  }
)

let parsedDiscussions = discussions.map(
  ({ author, body, createdAt, id, slug, title, url }) => {
    let installUrl =
      body.match(
        /(?<=(Install|Open).*)https:\/\/gist.*js(?=\"|\))/gim
      )?.[0] || ""
    let metadata = getMetadata(body)

    let [, dir, file] = body.match(
      /(?<=<meta path=")(.*)\/(.*)(?=")/
    ) || [null, "", ""]

    let [description] = body.match(
      /(?<=<meta description=")(.*)(?=")/
    ) || [""]
    let [tag] = body.match(/(?<=<meta tag=")(.*)(?=")/) || [
      "",
    ]

    let content = body
    // let prevLength = 0

    // let i = 0
    // for (let s of body.matchAll(/(`{3}js)(.{5,}?)(`{3})/gs)) {
    //   i++
    //   if (s[2] && s.index) {
    //     let c = Buffer.from(s[2]).toString('base64url')
    //     let name = `${slug}-example-${i}`
    //     let link = `\n\n[Create script from example below](kit:snippet?name=${name}&content=${c})\n`

    //     let index = s.index + prevLength
    //     content = [content.slice(0, index), link, content.slice(index)].join('')
    //     prevLength += link.length
    //   }
    // }

    return {
      ...metadata,
      id,
      avatar: author.avatarUrl,
      user: author.login,
      author: author.name,
      twitter: author.twitterUsername,
      url,
      title,
      slug,
      content,
      extension: `.md`,
      dir,
      file,
      description,
      tag,
    }
  }
)

await ensureDir(projectPath("docs"))

let docsDiscussions = parsedDiscussions.filter(
  ({ dir }) => dir === "docs"
)

for await (let {
  content,
  slug,
  url,
  id,
} of docsDiscussions) {
  let filePath = projectPath(`docs`, `${slug}.md`)

  if (content.match(/<meta id=".*">/)) {
    content = content.replace(
      /<meta id=".*">/,
      `<meta id="${id}">`
    )
  } else {
    content = `
<meta id="${id}">
${content}
`.trim()
  }

  if (content.match(/<meta url=".*">/)) {
    content = content.replace(
      /<meta url=".*">/,
      `<meta url="${url}">`
    )
  } else {
    content = `
<meta url="${url}">
${content}
`.trim()
  }
  await writeFile(filePath, content)
}
