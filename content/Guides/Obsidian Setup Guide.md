---
date: 2023-09-18
---
# Preface

If you're here I likely convinced you to use Obsidian or you asked me "what's that app you're always on?" and I sent you here. Hopefully this guide will help you get started, you won't regret picking it up!

If all this text seems overwhelming, feel free to start by [installing](https://obsidian.md/) and playing around with Obsidian yourself and coming back to use this guide as a reference.

# What is Obsidian?

Obsidian at its core is a markdown editor. Yup, all it does is edit markdown files. That's it, it just does that one thing really well. This is intentional, Obsidian is designed with the understanding that the files will outlast the tool.

> The ancient temples of Egypt contain hieroglyphs that were chiseled in stone thousands of years ago. The ideas hieroglyphs convey are more important than the type of chisel that was used to carve them. -- Steph Ango, CEO Of Obsidian

*To read about this philosophy more click [here](https://stephango.com/file-over-app)*

One day Obsidian **will** become defunct. When this happens your files will still exist, they are plain markdown files stored locally that anyone can access and open. I would like to pose you question, what would happen to your files if a service like Google Docs or Notion disappears?
# Editor
Everything in Obsidian starts and ends with the editor... so how do you use it? Like I stated before, Obsidian is at its core a markdown editor. So, what's markdown?

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML). 
> -- John Gruber, Creator of Markdown

*To read more about markdown click [here](https://daringfireball.net/projects/markdown/).*

In short, you can use Obsidian as a simple text editor and Markdown provides html support and you can use certain shortcuts to stylize it. 

**Here's some tips to get you started:** 

- Use `# headingname` for a heading. The number of #'s is the level of heading.
	- i.e `# headingname` is h1 whereas `## headingname` is h2.

![[MarkdownHeadingExample.png| 100]]
<center>Example behavior</center>

- Write math in Obsidian using LaTeX (prounounced «Lah-tech» or «Lay-tech»)
	- Inline syntax: `$\text{your math here!}$`
	- New Line Equation syntax: `$$\text{your math here!}$$`
	- LaTeX in itself is it's own beast which I won't be writing about, check out this [quick-start guide](https://latex-tutorial.com/quick-start/) or just learn as you go. Although it seems intimidating, it's much less difficult than it seems. I went from 0 LaTeX skill to taking notes live in lecture and doing homework using LaTeX.
- Create links to notes using the following syntax `[[file]]` . 
	- The link can be renamed using the syntax `[[file|Link Display Name]]`
- Add images use the syntax  `![[yourimagename.png]]]`.
	- You can copy and paste images directly into your editor as well, the image will be placed in the folder you set as the attachments folder.
	- Modify the image size using `![[yourimagename.png|size (i.e 100)]]`.

![[SetAttachmentFolder.png|400]]
<center>Set attachment folder by right clicking desired folder in sidebar.</center>

- To link to the web use `[Link Title](https://www.yourwebsite.com/)`.
	- Link to a web image like so `![Image Title](https://imagelink.com)`
- Create tables using the Markdown Table Syntax
	- Install a community plugin like Advanced Table Editor or Markdown Table Editor, thank me later.
- Callout Blocks can be created to segment and stylize your information. They can be made into dropdown menus and configured with different icons, see more [here](https://help.obsidian.md/Editing+and+formatting/Callouts).

> [!example]- Example Callout Block!
> Here's an example sentence, any content can be placed in callout blocks!

# Organization
One of Obsidian's biggest selling points is its organizational capability. 

**Here are some of the features you may want to utilize:**
- **Links**: Obsidian allows you to create links between your files, helping you connect ideas.
	- See syntax in the editor section.
	 - Some applications include the [Zettelkasten Method](https://zettelkasten.de/posts/overview/).
	- These links can be kept track of using Obsidian's graph feature. It's very pretty! *(but in my  usecase, not very practical)*

![[MyGraph.png]]

<center>Here's my personal graph!</center>

- Every note also has backlinks, helping you know what it helps define.
- **Daily Notes**: Obsidian allows the creation of daily notes, this is useful for keeping track of daily tasks or just writing down miscellaneous things that you do during the day. 
	- I highly recommend using the [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) plugin to keep track  of your daily notes.
- **Folders**: Just like any other file management system, it's a great idea to use folders to organize your ideas together.
- **[Dataview](https://github.com/blacksmithgu/obsidian-dataview)**: A plugin that allows query your notes like a relational database by their properties you set in the frontmatter. 
- **Tags:** You can tag and search your notes by tag.
	- Use the syntax `#tag`

In the end, I highly recommend experimenting with different organizational formats until you figure out what's best for **YOU**. You don't (and shouldn't) have to make use of every fancy feature just because someone online tells you to, often you may find you don't need the extra fluff. Remember that your organizational system should work **for** you, not **against**. 

What is important is you are aware of the tools that are available and that Obsidian provides the features and flexibility needed for your workflow.
# Themes
Themes are community made themes (duh) that help you tune the appearance of your Obsidian to your liking. These can be further tuned with the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin or your own css snippets.

**Some of my favorites:** \
[Minimal](https://github.com/pages-themes/minimal): There is a minimal themes settings plugin that goes with this theme. \
[Nord](https://github.com/insanum/obsidian_nord) \
[Prism](https://github.com/damiankorcz/Prism-Theme) 
# Plugins
Plugins are community made extensions that can add additional functionality not included in base Obsidian. 

Install and manage plugins using the community plugins section in your Obsidian options.

**Here are some plugins I personally find useful:** \
[Better Word Count](https://github.com/lukeleppan/better-word-count): Adds more word count statistics, i.e hover to find word count of highlighted. \
[Calendar](https://github.com/liamcain/obsidian-calendar-plugin): Adds a calendar you can use to organize your daily notes. \
[Dataview](https://github.com/blacksmithgu/obsidian-dataview): A plugin that allows query your notes like a relational database by their properties you set in the frontmatter. \
[Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin): Lets you draw in Obsidian! Useful for jotting down quick notes or creating simple graphs. Very useful in conjunction with the Canvas feature. \
[Execute Code](https://stackoverflow.com/questions/59815504/how-to-run-a-github-repository): Adds the ability to run code inside markdown code blocks, useful for notes. **note:** to add a C++ execute code block use 'run-cpp'... this one cost me a couple of hours \
[Markdown Table Editor](https://github.com/ganesshkumar/obsidian-table-editor): Adds GUI to create and edit markdown tables. \
[Style Settings](https://github.com/mgmeyers/obsidian-style-settings): Adds the ability to easily modify your theme. 