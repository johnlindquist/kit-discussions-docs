let files = await readdir(projectPath())

if (files.includes("toc.md")) {
  let yn = await arg({
    placeholder: "Overwrite?",
    hint: `[y]es/[n]o`,
  })

  if (yn === "n") {
    exit()
  }
}

let content = ``
for await (let f of files.filter(
  f => f.endsWith(`.md`) && f !== "toc.md"
)) {
  let { name } = path.parse(f)
  content += `${name}\n`
}

await writeFile(path.join(projectPath, "toc.md"), content)
