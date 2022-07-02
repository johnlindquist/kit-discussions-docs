<meta url="https://github.com/johnlindquist/kit/discussions/818">
<meta id="D_kwDOEu7MBc4AP-jj">
<meta sectionId="1">
<meta title="Display HTML and Markdown">
<meta section="Essentials">
<meta i="0">    
<meta path="docs/display-html-and-markdown">

[Open docs---display-html in Script Kit](kit://snippet?name=docs---display-html&content=Ly8gTmFtZTogRG9jcyAtIERpc3BsYXkgSFRNTAoKaW1wb3J0ICJAam9obmxpbmRxdWlzdC9raXQiCgphd2FpdCBkaXYoYDxoMT5IZWxsbyBXb3JsZDwvaDE-YCkKCg)

```js
// Name: Docs - Display HTML

import "@johnlindquist/kit"

await div(`<h1>Hello World</h1>`)
```

[Open docs--display-html-with-css in Script Kit](kit://snippet?name=docs--display-html-with-css&content=Ly8gTmFtZTogRG9jcyAtIERpc3BsYXkgSFRNTCB3aXRoIENTUwoKaW1wb3J0ICJAam9obmxpbmRxdWlzdC9raXQiCgphd2FpdCBkaXYoYDxoMSBjbGFzcz0icC0xMCB0ZXh0LTR4bCB0ZXh0LWNlbnRlciI-SGVsbG8gV29ybGQ8L2gxPmApCgo)

```js
// Name: Docs - Display HTML with CSS

import "@johnlindquist/kit"

await div(
  `<h1 class="p-10 text-4xl text-center">Hello World</h1>`
)
```
