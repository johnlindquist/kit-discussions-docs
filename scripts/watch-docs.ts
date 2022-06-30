// Name: Watch Docs
// Watch: ../docs/*

import "@johnlindquist/kit"

let { gql, GraphQLClient } = await npm("graphql-request")

let filePath = await arg("file")

let endpoint = "https://api.github.com/graphql"

let body = await readFile(filePath, "utf8")

let base = path.basename(filePath)

let title =
  body.match(/(?<=<meta title=").*(?=")/)?.[0] || ""

let id = body.match(/(?<=<meta id=").*(?=")/)?.[0] || ""

if (!id) {
  log(`No id found in ${base}`)
  exit()
}

await exec(
  `cd ${projectPath()} && git add ${filePath} && git commit -m "Update ${title}"`
)

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
