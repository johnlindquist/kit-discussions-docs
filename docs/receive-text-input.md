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

## Select From a List of Strings

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

## Select From a List of Objects

```js
// Name: Select From a List of Objects

import "@johnlindquist/kit"

let { size, weight } = await arg("Select a Fruit", [
  {
    name: "Apple",
    description: "A shiny red fruit",
    // add any properties to "value"
    value: {
      size: "small",
      weight: 1,
    },
  },
  {
    name: "Banana",
    description: "A long yellow fruit",
    value: {
      size: "medium",
      weight: 2,
    },
  },
])

await div(
  md(
    `You selected a fruit with size: ${size} and weight: ${weight}`
  )
)
```

[Open select-from-a-list-of-objects in Script Kit](https://scriptkit.com/api/new?name=select-from-a-list-of-objects&url=https://gist.githubusercontent.com/johnlindquist/1643c1f34cc146e19c01b5144c542b6f/raw/ac3a2bc71c27d1ee58cf83394c8755a005d2a567/select-from-a-list-of-objects.js")

## Display a Preview When Focusing a Choice

```js
// Name: Display a Preview When Focusing a Choice

import "@johnlindquist/kit"

let heights = [320, 480, 640]
let choices = heights.map(h => {
  return {
    name: `Kitten height: ${h}`,
    preview: () =>
      `<img class="w-full" src="http://placekitten.com/640/${h}"`,
    value: h,
  }
})

let height = await arg("Select a Kitten", choices)

await div(md(`You selected ${height}`))
```

[Open display-a-preview-when-focusing-a-choice in Script Kit](https://scriptkit.com/api/new?name=display-a-preview-when-focusing-a-choice&url=https://gist.githubusercontent.com/johnlindquist/13299ad794a03d3443a5afd8e11ca76a/raw/ac84e21e88c8ac5e8ffdd729a8a5a04a281df796/display-a-preview-when-focusing-a-choice.js")
