<meta sectionIndex="1">
<meta url="https://github.com/johnlindquist/kit/discussions/794">
<meta id="D_kwDOEu7MBc4AP9TQ">
<meta title="Built-in Editor">
<meta section="Essentials">
<meta i="3">    
<meta path="docs/built-in-editor">

## Built-in Editor

```js
// Name: Editor Example

import "@johnlindquist/kit"

let result = await editor({
  footer: `Hit cmd+s to continue...`,
})

await div(md(result))
```

[Open editor-example in Script Kit](https://scriptkit.com/api/new?name=editor-example&url=https://gist.githubusercontent.com/johnlindquist/3be99f494f84cea0b21aa673740c0e2e/raw/64757d3981befaf3ef7b3a0eceadab240cd8c2e2/editor-example.js")

## Load Text in the Editor

```js
// Name: Load Text Into the Editor

import "@johnlindquist/kit"

let { data } = await get(
  `https://raw.githubusercontent.com/johnlindquist/kit/main/README.md`
)

let result = await editor({
  value: data,
  // Supports "css", "js", "ts", and "md". "md" is default. More language support coming in future releases.
  language: "md",
  footer: `Hit cmd+s to continue...`,
})

await div(md(result))
```

[Open load-text-into-the-editor in Script Kit](https://scriptkit.com/api/new?name=load-text-into-the-editor&url=https://gist.githubusercontent.com/johnlindquist/69efafa66f1c6aa436b8f8283cc1fbba/raw/7f371e045609d3dbee92999b09eac4839262fc9f/load-text-into-the-editor.js")
