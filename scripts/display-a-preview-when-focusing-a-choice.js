// Name: Display a Preview When Focusing a Choice

import "@johnlindquist/kit"

let heights = [320, 480, 640]
let choices = heights.map(h => {
    return {
        name: `Kitten height: ${h}`,
        preview: () => `<img class="w-full" src="http://placekitten.com/640/${h}"`,
        value: h
    }
})

let height = await arg("Select a Kitten", choices)

await div(md(`You selected ${height}`))

