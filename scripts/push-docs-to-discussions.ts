// Name: Push Docs to Discussions

import "@johnlindquist/kit"

let { gql, GraphQLClient } = await npm("graphql-request")

let repositoryId = "MDEwOlJlcG9zaXRvcnkzMTc2Mzk2ODU="
let categoryId = "DIC_kwDOEu7MBc4B_u-c"
let endpoint = "https://api.github.com/graphql"

let client = new GraphQLClient(endpoint, {
  headers: {
    "GraphQL-Features": "discussions_api",
    authorization: `Bearer ${await env(
      "GITHUB_DISCUSSIONS_TOKEN"
    )}`,
  },
})

type Post = { title: string; content: string }
let toPush: Post[] = []
let toUpdate: Post[] = []

let files = await readdir(projectPath("docs"))
for await (let f of files) {
  let content = await readFile(
    projectPath("docs", f),
    "utf8"
  )

  let title =
    content.match(/(?<=<meta title=").*(?=")/)?.[0] || ""
  let id =
    content.match(/(?<=<meta id=").*(?=")/)?.[0] || ""

  if (id) {
    toUpdate.push({ title, content })
  } else {
    toPush.push({ title, content })
  }
}

let query = gql`
  mutation (
    $categoryId: ID!
    $repositoryId: ID!
    $title: String!
    $content: String!
  ) {
    createDiscussion(
      input: {
        repositoryId: $repositoryId
        categoryId: $categoryId
        title: $title
        body: $content
      }
    ) {
      discussion {
        id
      }
    }
  }
`

for await (let { title, content } of toPush) {
  let data = {
    categoryId,
    repositoryId,
    title,
    content,
  }

  let result = await client.request(query, data)
  log(result)
}

// copy(JSON.stringify(data))

// let deleteDiscussion = id => `
// mutation{
//     deleteDiscussion(input:{
//       id: ${id}
//     }) {
//       clientMutationId
//     }
//   }
// `

// let Category = {
//   Announcements: "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyODIwMDgw",
//   Guide: "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyODc5NjIx",
//   Share: "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDg0MTcw",
//   Docs: "DIC_kwDOEu7MBc4B_u-c",
// }

// let endpoint = "https://api.github.com/graphql"

// const categoryKey = "Docs"

// let category = {
//   name: categoryKey,
//   value: Category[categoryKey],
// }

// let client = new GraphQLClient(endpoint, {
//   headers: {
//     "GraphQL-Features": "discussions_api",
//     authorization: `Bearer ${await env(
//       "GITHUB_DISCUSSIONS_TOKEN"
//     )}`,
//   },
// })

// let query = gql`
//   query ($categoryId: ID) {
//     repository(owner: "johnlindquist", name: "kit") {
//       discussions(
//         first: 100
//         categoryId: $categoryId
//         orderBy: { field: CREATED_AT, direction: DESC }
//       ) {
//         # type: DiscussionConnection
//         totalCount # Int!
//         nodes {
//           title
//           url
//           author {
//             ... on User {
//               twitterUsername
//               name
//             }
//             login
//             avatarUrl
//             url
//           }
//           body
//           id
//           createdAt
//         }
//       }
//     }
//   }
// `

// let response = await client.request(query, {
//   categoryId: category.value,
// })
