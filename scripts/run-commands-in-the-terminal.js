// Name: Run Commands in the Terminal

import "@johnlindquist/kit"

await term({
    //defaults to home dir
    cwd: `~/.kenv`, 
    command: `ls`,
    // The footer is optional. All terms continue with the same shortcuts
    footer: `ctrl+c or cmd+enter to continue`
})