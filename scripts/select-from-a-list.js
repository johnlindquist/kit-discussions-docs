// Name: Select From a List

import "@johnlindquist/kit"

let fruit = await arg("Pick a fruit", [
    "Apple",
    "Banana",
    "Cherry"
])

await div(md(`You selected ${fruit}`))

