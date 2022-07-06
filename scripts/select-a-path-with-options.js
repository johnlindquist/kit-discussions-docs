// Name: Select a Path with Options

import "@johnlindquist/kit"

await path({
    hint: `Select a path containing JS files`,
    onlyDirs: true,
    onChoiceFocus: async (input, { focused }) => {         
        let focusedPath = focused.value
        try {
            let files = await readdir(focusedPath)
            let hasJS = files.find(f => f.endsWith(".js"))

            setPreview(md(`${hasJS ? "✅ Found" : "🔴 Didn't find"} JS files`))
        } catch (error) {
            log(error)
        }
    }
})