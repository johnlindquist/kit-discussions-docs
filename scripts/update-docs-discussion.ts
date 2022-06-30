// Name: Update Docs Discussion

import "@johnlindquist/kit"

let gql = `
mutation {
  # input type: CreateDiscussionInput
  updateDiscussion(input: {discussionId: "D_kwDOEu7MBc4AN_2Q", body: "nice"}) {

    # response type: CreateDiscussionPayload
    discussion {
      id
    }
  }
}


`

