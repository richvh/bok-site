export default {
  appearance: true,
  base: '/',
  lang: 'en-US',
  title: 'Bees of Knowledge',
  titleTemplate: false,
  cleanUrls: true,
  description: 'An information side for Embers Adrift',
  head: [
    //
  ],
  // ignoreDeadLinks: false,
  lastUpdated: true,
  markdown: {
    lineNumbers: false
  },
  // outDir: './.vitepress/dist',
  // cacheDir: './.vitepress/cache',
  // srcDir: '.',

  themeConfig: {
    tempDir: '/var/tmp/vitepress',
    nav: [
      { text: 'faqs', link: '/pages/faqs' },
      {
          text: 'stuff',
          items: [
              { text: 'zones', link: '/temp' },
              { text: 'quests', link: '/temp' },
              { text: 'items', link: '/temp' },
              { text: 'npcs', link: '/temp' },
              { text: 'creatures', link: '/temp' },
          ]
      },
    ],
    sidebar: [
      {
        text: 'Gameplay',
        items: [
          { text: 'Getting Started', link: '/pages/getting-started' },
          { text: 'Tips', link: '/pages/tips' },
          { text: 'Class Guides', link: '/pages/tips' },
        ]
      },
      {
        text: 'Database',
        items: [
          { text: 'Zones', link: '/temp' },
          { text: 'Classes', link: '/temp' },
          { text: 'Quests', link: '/temp' },
          { text: 'Items', link: '/temp' },
          { text: 'NPCs', link: '/temp' },
          { text: 'Creatures', link: '/temp' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'This Site', link: '/temp' },
          { text: 'Embers Adrift', link: '/temp' },
        ]
      },
    ],
    // logo: '/assets/logo.png',
    editLink: {
      pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: 'Updated Date',
  },

    // root: string
    // srcDir: string
    // site: SiteData<ThemeConfig>
    // configPath: string | undefined
    // themeDir: string
    // outDir: string
    // tempDir: string
    // alias: AliasOptions
    // pages: string[]

}
