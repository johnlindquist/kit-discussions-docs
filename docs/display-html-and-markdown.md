<meta url="https://github.com/johnlindquist/kit/discussions/818">
<meta id="D_kwDOEu7MBc4AP-jj">
<meta sectionId="1">
<meta title="Display HTML and Markdown">
<meta section="Essentials">
<meta i="0">    
<meta path="docs/display-html-and-markdown">

## Display HTML

Use `await div(`<p>Some HMTL</p>`)` to display HTML.

[Open display-html in Script Kit](https://scriptkit.com/api/new?name=display-html&url=https://gist.githubusercontent.com/johnlindquist/ba1d6754436d898f8cebe8558647e720/raw/468e99941e8c63eff51ba24b6cb7c86bb9dd70fe/display-html.js")

```js
// Name: Display HTML

import "@johnlindquist/kit"

await div(`<h1>Hello World</h1>`)
```

## Display HTML with CSS

Scpt
[Open display-html-with-css in Script Kit](https://scriptkit.com/api/new?name=display-html-with-css&url=https://gist.githubusercontent.com/johnlindquist/18f9790d737f299ede36b54c9495035e/raw/1d80190f0cfce860078cec799fd614bd6f49a474/display-html-with-css.js")

```js
// Name: Display HTML with CSS

import "@johnlindquist/kit"

await div(
  `<h1 class="p-10 text-4xl text-center">Hello World</h1>`
)
```
