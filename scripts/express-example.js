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

await hide()

await browse(`http://localhost:${port}`)



