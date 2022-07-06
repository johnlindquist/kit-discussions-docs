// Name: Input Text

import "@johnlindquist/kit"

let name = await arg("Enter your name")

await div(md(
    `Hello, ${name}`
))

