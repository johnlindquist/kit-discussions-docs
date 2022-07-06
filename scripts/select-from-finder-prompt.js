// Name: Select from Finder Prompt

import "@johnlindquist/kit"

let filePath = await selectFile()

let folderPath = await selectFolder()

await div(md(`You selected ${filePath} and ${folderPath}`))

