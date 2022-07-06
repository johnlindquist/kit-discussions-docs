// Name: Select From a List of Objects

import "@johnlindquist/kit"

let { size, weight } = await arg("Select a Fruit", [{
    name: "Apple",
    description: "A shiny red fruit",
    // add any properties to "value"
    value: {        
        size: "small",
        weight: 1
    }
}, {
    name: "Banana",
    description: "A long yellow fruit",
    value: {        
        size: "medium",
        weight: 2
    }
    }])

await div(md(`You selected a fruit with size: ${size} and weight: ${weight}`))

