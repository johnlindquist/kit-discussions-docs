<meta url="https://github.com/johnlindquist/kit/discussions/818">
<meta id="D_kwDOEu7MBc4AP-jj">
<meta sectionId="1">
<meta title="HTML and Markdown">
<meta section="Essentials">
<meta i="0">    
<meta path="docs/display-html-and-markdown">

## Display HTML

Use `await div('')` to display HTML.

```js
// Name: Display HTML

import "@johnlindquist/kit"

await div(`<h1>Hello World</h1>`)
```

[Open display-html in Script Kit](https://scriptkit.com/api/new?name=display-html&url=https://gist.githubusercontent.com/johnlindquist/ba1d6754436d898f8cebe8558647e720/raw/468e99941e8c63eff51ba24b6cb7c86bb9dd70fe/display-html.js")

## Display HTML with CSS

Script Kit bundles [Tailwind CSS](https://tailwindcss.com/).

[Open display-html-with-css in Script Kit](https://scriptkit.com/api/new?name=display-html-with-css&url=https://gist.githubusercontent.com/johnlindquist/18f9790d737f299ede36b54c9495035e/raw/1d80190f0cfce860078cec799fd614bd6f49a474/display-html-with-css.js")

```js
// Name: Display HTML with CSS

import "@johnlindquist/kit"

await div(
  `<h1 class="p-10 text-4xl text-center">Hello World</h1>`
)
```

## Display Markdown

The `md()` function will convert Markdown to HTML into HTML that you can pass into div. It will also add the default Tailwind styles so you won't have to think about formatting.

```js
// Name: Display Markdown

import "@johnlindquist/kit"

let html = md(`# Hello World`)

await div(html)
```

[Open display-markdown in Script Kit](https://scriptkit.com/api/new?name=display-markdown&url=https://gist.githubusercontent.com/johnlindquist/84779dbf8e39212c672b16ee72c68ccf/raw/7e985c988fa6aa878e4c0040dac6b87b8cfb173c/display-markdown.js")
