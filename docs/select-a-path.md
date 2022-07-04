<meta sectionIndex="1">
<meta url="https://github.com/johnlindquist/kit/discussions/809">
<meta id="D_kwDOEu7MBc4AP9Tf">
<meta title="Select a Path">
<meta section="Essentials">
<meta i="2">    
<meta path="docs/select-a-path">

## Select a Path

```js
// Name: Select a Path

import "@johnlindquist/kit"

let filePath = await path()

await div(md(`You selected ${filePath}`))
```

[Open select-a-path in Script Kit](https://scriptkit.com/api/new?name=select-a-path&url=https://gist.githubusercontent.com/johnlindquist/68ae880d76f6d92b1aa9994501465f2b/raw/839a08ef025a07e5d5e292c8730d7c631b934798/select-a-path.js")

##

## Select from Finder Prompts

```js
// Name: Select from Finder Prompt

import "@johnlindquist/kit"

let filePath = await selectFile()

let folderPath = await selectFolder()

await div(md(`You selected ${filePath} and ${folderPath}`))
```

[Open select-from-finder-prompt in Script Kit](https://scriptkit.com/api/new?name=select-from-finder-prompt&url=https://gist.githubusercontent.com/johnlindquist/d27e5970cb6284bd28b746eaeb49df78/raw/5f4b446f2b5a61435a651e0132e878fae9a4f819/select-from-finder-prompt.js")
