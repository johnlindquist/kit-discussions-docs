<meta url="https://github.com/johnlindquist/kit/discussions/819">
<meta id="D_kwDOEu7MBc4AP-jk">
<meta sectionId="1">
<meta title="Text Input">
<meta section="Essentials">
<meta i="1">    
<meta path="docs/receive-text-input">

## Input Text with `await arg()`

The simplest form of input you can accept from a user is an `arg()`

```js
// Name: Input Text

import "@johnlindquist/kit"

let name = await arg("Enter your name")

await div(md(`Hello, ${name}`))
```

[Open input-text in Script Kit](https://scriptkit.com/api/new?name=input-text&url=https://gist.githubusercontent.com/johnlindquist/af8883b05ae34055fff79ec8556e007d/raw/bb5d116f831d3124081867e83710a07e39bf41cd/input-text.js")

```js
// Name: Select From a List

import "@johnlindquist/kit"

let fruit = await arg("Pick a fruit", [
  "Apple",
  "Banana",
  "Cherry",
])

await div(md(`You selected ${fruit}`))
```

[Open select-from-a-list in Script Kit](https://scriptkit.com/api/new?name=select-from-a-list&url=https://gist.githubusercontent.com/johnlindquist/a53ebfe6372eb3ad3aade06e2d11ef51/raw/b1939b6cceb669f2bbaeec5e6b3af2549994e214/select-from-a-list.js")
