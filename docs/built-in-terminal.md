<meta url="https://github.com/johnlindquist/kit/discussions/821">
<meta id="D_kwDOEu7MBc4AP_up">
<meta sectionIndex="1">
<meta title="Built-in Terminal">
<meta section="Essentials">
<meta i="4">    
<meta path="docs/built-in-terminal">

## Use the Built-in Terminal

```js
// Name: Run Commands in the Terminal

import "@johnlindquist/kit"

await term({
  //defaults to home dir
  cwd: `~/.kenv`,
  command: `ls`,
  // The footer is optional. All terms continue with the same shortcuts
  footer: `ctrl+c or cmd+enter to continue`,
})
```

[Open run-commands-in-the-terminal in Script Kit](https://scriptkit.com/api/new?name=run-commands-in-the-terminal&url=https://gist.githubusercontent.com/johnlindquist/e1fbd791d67d772c047f2afcab087cff/raw/37f5ab92f8caafbf437d4f234818ebae67fb7fba/run-commands-in-the-terminal.js")

> Note: The shell defaults to `zsh`. You can change your shell by setting the `KIT_SHELL` environment variable in the ~/kenv/.env, but most of the testing has been done with `zsh`.
