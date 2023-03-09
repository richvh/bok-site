import fs from 'node:fs/promises'
import matter from 'gray-matter'

const items = await fs.readdir('./docs/src/items/')

const data = await Promise.all(
  items.map(async (item) => {
    const file = matter.read(`./docs/src/items/${item}`, {
    })

    const { data, excerpt, path } = file
    // const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)

    return {
      ...data,
      path: path.replace(/\.\/docs\/src\//, '').replace(/\.md$/, ''),
    }
  })
)

await fs.writeFile('./docs/data/items.json', JSON.stringify(data), 'utf-8')

