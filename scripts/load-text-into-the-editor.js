// Name: Load Text Into the Editor

import "@johnlindquist/kit"

let { data} = await get(`https://raw.githubusercontent.com/johnlindquist/kit/main/README.md`)

let result = await editor({
    value: data,
    // Supports "css", "js", "ts", and "md". "md" is default. More language support coming in future releases.
    language: "md",
    footer: `Hit cmd+s to continue...`
})

await div(md(result))

