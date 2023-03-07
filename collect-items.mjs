import fs from 'node:fs/promises'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'

const items = await fs.readdir('./docs/src/items/')

const data = await Promise.all(
  items.map(async (item) => {
    const file = matter.read(`./docs/src/items/${item}`, {
      // excerpt: true,
      // excerpt_separator: '<!-- more -->'
    })

    const { data, excerpt, path } = file
    // const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)

    return {
      ...data,
      // title: contents[0].replace(/\s{2,}/g, '').trim(),
      path: path.replace(/\.\/docs\/src\//, '').replace(/\.md$/, ''),
      // path: path.replace(/\.md$/, ''),
      // excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
    }
  })
)

await fs.writeFile('./docs/data/items.json', JSON.stringify(data), 'utf-8')

