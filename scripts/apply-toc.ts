// Name: Apply TOC

import "@johnlindquist/kit"

await readFile(projectPath("toc.md"))
await readdir(projectPath("docs"))

