// Name: Read Files

import "@johnlindquist/kit"

let pkg = await readFile(home(".kenv", "package.json"), "utf-8")

await editor({
    value: pkg,
    language: "json"
})

