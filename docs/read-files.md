<meta sectionIndex="3">
<meta url="https://github.com/johnlindquist/kit/discussions/805">
<meta id="D_kwDOEu7MBc4AP9Tb">
<meta title="Read Files">
<meta section="Files and Data">
<meta i="0">    
<meta path="docs/read-files">

## Read Files

```js
// Name: Read Files

import "@johnlindquist/kit"

let pkg = await readFile(
  home(".kenv", "package.json"),
  "utf-8"
)

await editor({
  value: pkg,
  language: "json",
})
```

[Open read-files in Script Kit](https://scriptkit.com/api/new?name=read-files&url=https://gist.githubusercontent.com/johnlindquist/00093125f3735bed8062dce0e20af4f8/raw/faec10fc8f99cc0744e9e840cfadb6cbe88e3a32/read-files.js")
