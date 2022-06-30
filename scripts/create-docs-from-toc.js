import "@johnlindquist/kit"

let { fromMarkdown } = await npm("mdast-util-from-markdown")
let slugify = await npm("slugify")

let content = await readFile(projectPath("toc.md"), "utf-8")

let tree = fromMarkdown(content)

let sections = tree.children[0].children
let toc = sections.flatMap(s => {
  let [h, a] = s.children
  let section = h.children[0].value
  let articles = a.children.map(
    c => c.children[0].children[0].value
  )
  return articles.map(a => ({ section, title: a }))
})

let currentSection = ``
let i = 0
await ensureDir(projectPath("docs"))
for await (let { section, title } of toc) {
  if (section !== currentSection) i = 0
  currentSection = section

  let slug = slugify(title, { lower: true })
  let fileName = slug + ".md"
  let h = slugify(section, { lower: true })
  let filePath = projectPath("docs", fileName)
  let content = `
<meta title="${title}">
<meta section="${h}">
<meta i="${i}">    
<meta path="docs/${slug}">    

# ${title}  

In progress...
    `.trim()

  await writeFile(filePath, content)

  i++
}
