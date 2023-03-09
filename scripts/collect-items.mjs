import fs from 'node:fs/promises'
import matter from 'gray-matter'

const items = await fs.readdir('./docs/items/')

const data = await Promise.all(
  items.map(async (item) => {
    const file = matter.read(`./docs/items/${item}`, {
    })

    const { data, excerpt, path } = file

    return {
      ...data,
      path: path.replace(/\.\/docs/, '').replace(/\.md$/, ''),
    }
  })
)

await fs.writeFile('./docs/.vitepress/data/items.json', JSON.stringify(data), 'utf-8')

