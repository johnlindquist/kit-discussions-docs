<meta sectionIndex="1">
<meta url="https://github.com/johnlindquist/kit/discussions/813">
<meta id="D_kwDOEu7MBc4AP9Tj">
<meta title="npm Packages">
<meta section="Essentials">
<meta i="6">    
<meta path="docs/use-npm-packages">

## Install Express from npm

```js
// Name: Express Example

import "@johnlindquist/kit"

let express = await npm("express")
let detect = await npm("detect-port")

let app = express()

app.get("/", (req, res) => {
  res.send(`Hello Script Kit!`)
})

let port = await detect()
app.listen(port)

await hide() // in case the terminal is open from installing packages

await browse(`http://localhost:${port}`)
```

[Open express-example in Script Kit](https://scriptkit.com/api/new?name=express-example&url=https://gist.githubusercontent.com/johnlindquist/52c9ab749f8483a15ccbd28631db2df1/raw/e8bc1e1dec05fd17e36cafbf21ada409b91a6fa9/express-example.js")

> You can terminate a long-running process like above from the menubar dropdown menu or by pressing `cmd+p` from the Script Kit window to list running processes.
