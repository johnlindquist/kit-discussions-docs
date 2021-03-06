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

## Select a Path with Options

```js
// Name: Select a Path with Options

import "@johnlindquist/kit"

await path({
  hint: `Select a path containing JS files`,
  onlyDirs: true,
  onChoiceFocus: async (input, { focused }) => {
    let focusedPath = focused.value
    try {
      let files = await readdir(focusedPath)
      let hasJS = files.find(f => f.endsWith(".js"))

      setPreview(
        md(
          `${
            hasJS ? "✅ Found" : "🔴 Didn't find"
          } JS files`
        )
      )
    } catch (error) {
      log(error)
    }
  },
})
```

[Open select-a-path-with-options in Script Kit](https://scriptkit.com/api/new?name=select-a-path-with-options&url=https://gist.githubusercontent.com/johnlindquist/8ec7f7178cd44481aed4e968fd83da3f/raw/c8a4d8deacaa192f07fbdfed7c17a75558bc99a7/select-a-path-with-options.js")

## Drag and Drop

```js
// Name: Drop Example

import "@johnlindquist/kit"

// Note: Dropping one or more files returns an array of file information
// Dropping text or an image from the browser returns a string
let fileInfos = await drop()

let filePaths = fileInfos.map(f => f.path).join(",")

await div(md(filePaths))
```

[Open drop-example in Script Kit](https://scriptkit.com/api/new?name=drop-example&url=https://gist.githubusercontent.com/johnlindquist/f7937ef8b3d5827b5aaa17b59dc4e223/raw/183d7cdd3c3e687cdd4fd6fd833abd957e57d3de/drop-example.js")

## Select from Finder Prompts

```js
// Name: Select from Finder Prompt

import "@johnlindquist/kit"

let filePath = await selectFile()

let folderPath = await selectFolder()

await div(md(`You selected ${filePath} and ${folderPath}`))
```

[Open select-from-finder-prompt in Script Kit](https://scriptkit.com/api/new?name=select-from-finder-prompt&url=https://gist.githubusercontent.com/johnlindquist/d27e5970cb6284bd28b746eaeb49df78/raw/5f4b446f2b5a61435a651e0132e878fae9a4f819/select-from-finder-prompt.js")
