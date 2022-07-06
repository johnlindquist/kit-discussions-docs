// Name: Watch Docs
// Watch: ../docs/*

import "@johnlindquist/kit"

let { gql, GraphQLClient } = await npm("graphql-request")

let filePath = await arg("file")
let event = await arg("event")

if (event === "unlink") {
  exit()
}

let endpoint = "https://api.github.com/graphql"

let body = await readFile(filePath, "utf8")

let base = path.basename(filePath)

let title =
  body.match(/(?<=<meta title=").*(?=")/)?.[0] || ""

let id = body.match(/(?<=<meta id=").*(?=")/)?.[0] || ""

if (event === "unlink") {
  // hmm, id is deleted before I can look for it...

  // let query = gql`
  //   mutation ($id: ID!) {
  //     # input type: CreateDiscussionInput
  //     deleteDiscussion(input: { id: $id }) {
  //       # response type: CreateDiscussionPayload
  //       discussion {
  //         id
  //       }
  //     }
  //   }
  // `

  // let yn = await arg({
  //   placeholder:
  //     "Are you sure you want to delete this discussion?",
  //   hint: `[y]es or [n]o`,
  // })

  // if (yn === "n") {
  //   exit()
  // }

  // let client = new GraphQLClient(endpoint, {
  //   headers: {
  //     "GraphQL-Features": "discussions_api",
  //     authorization: `Bearer ${await env(
  //       "GITHUB_DISCUSSIONS_TOKEN"
  //     )}`,
  //   },
  // })

  // let result = await client.request(query, {
  //   id,
  // })

  exit()
}

if (!id) {
  log(`No id found in ${base}`)
  exit()
}

try {
  await exec(
    `cd ${projectPath()} && git add ${filePath} && git commit -m "Update ${title}"`
  )
} catch (e) {
  log(e)
}

let query = gql`
  mutation ($id: ID!, $title: String!, $body: String!) {
    # input type: CreateDiscussionInput
    updateDiscussion(
      input: {
        discussionId: $id
        body: $body
        title: $title
      }
    ) {
      # response type: CreateDiscussionPayload
      discussion {
        id
      }
    }
  }
`

let client = new GraphQLClient(endpoint, {
  headers: {
    "GraphQL-Features": "discussions_api",
    authorization: `Bearer ${await env(
      "GITHUB_DISCUSSIONS_TOKEN"
    )}`,
  },
})

let result = await client.request(query, {
  id,
  title,
  body,
})
log(result)
