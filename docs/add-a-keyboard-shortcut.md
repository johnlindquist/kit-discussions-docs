<meta url="https://github.com/johnlindquist/kit/discussions/792">
<meta id="D_kwDOEu7MBc4AP9TO">
<meta title="Add a Keyboard Shortcut">
<meta section="script-options">
<meta i="0">    
<meta path="docs/add-a-keyboard-shortcut">

## // Shortcut Metadata

Use the `// Shortcut` metadata to add a global keyboard shortcut to any script

```js
// Shortcut: cmd shift j

import "@johnlindquist/kit"

say(`You pressed command shift j`)
```

```js
// Shortcut: opt i

import "@johnlindquist/kit"

say(`You pressed option i`)
```

## // Shortcode Metadata

A shortcode allows you quickly run a script without needing to search for it.

To trigger a `// Shortcode`, type the string of characters from the main menu, then hit `spacebar`. In this example, you would type `oi` then `spacebar` to run this script:

```js
// Shortcode: oi

import "@johnlindquist/kit"

say(`You pressed option i`)
```

## Quick Submit from Hint

A common pattern from Terminal is to quickly submit a script from a hint. Using a bracket around a single character will submit that character when pressed.

```js
import "@johnlindquist/kit"

let value = await arg({
  placeholder: "Continue?",
  hint: `Another [y]/[n]`,
})

if (value === "y") {
  say(`You pressed y`)
} else {
  say(`You pressed n`)
}
```

## Quick Submit from Choice

If you need to provide a little more information to the user, use a choice instead of a hint. This allows you to provide a full value that will be submitted instead of just the single letter.

```js
import "@johnlindquist/kit"

let value = await arg("Select a food", [
  {
    name: "[a]pple",
    value: "apple",
  },
  {
    name: "[b]anana",
    value: "banana",
  },
  {
    name: "[c]heese",
    value: "cheese",
  },
])

await div(md(value))
```
