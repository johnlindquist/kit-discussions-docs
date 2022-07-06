// Name: Manual Update All Docs

import "@johnlindquist/kit"

let files = await readdir(projectPath("docs"))

for await (let f of files) {
  let filePath = projectPath(`docs`, f)
  await run(projectPath("scripts", "watch-docs"), filePath)
}
