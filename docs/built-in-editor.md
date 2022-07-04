<meta sectionIndex="1">
<meta url="https://github.com/johnlindquist/kit/discussions/794">
<meta id="D_kwDOEu7MBc4AP9TQ">
<meta title="Built-in Editor">
<meta section="Essentials">
<meta i="1">    
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
