// Name: Select a Path

import "@johnlindquist/kit"

let filePath = await path()

await div(md(`You selected ${filePath}`))

