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
  prev: false,
  next: false,
  // outDir: './.vitepress/dist',
  // cacheDir: './.vitepress/cache',
  srcDir: './src',

  themeConfig: {
    prev: false,
    next: false,
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
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Tips', link: '/tips' },
          { text: 'FAQs', link: '/faqs' },
          {
            text: 'Zones',
            link: '/zones',
            collapsed: true,
            items: [
              { text: 'Newhaven Valley', link: '/zones/newhaven-valley' },
              { text: 'Dryfoot', link: '/zones/dryfoot' },
              { text: 'Meadowlands', link: '/zones/meadowlands' },
              { text: 'Northreach', link: '/zones/northreach' },
              { text: 'Newhaven', link: '/zones/newhaven' },
              { text: 'Redshore Ridge', link: '/zones/redshore-ridge' },
              { text: 'Grimstone Canyon', link: '/zones/grimstone-canyon' },
            ],
          },
          {
            text: 'Classes',
            link: '/classes',
            collapsed: true,
            items: [
              { text: 'Juggernaut', link: '/classes/juggernaut' },
              { text: 'Marshal', link: '/classes/marshal' },
              { text: 'Knight', link: '/classes/knight' },
              { text: 'Warlord', link: '/classes/warlord' },
              { text: 'Duelist', link: '/classes/duelist' },
              { text: 'Sentinel', link: '/classes/sentinel' },
              { text: 'Brigand', link: '/classes/brigand' },
              { text: 'Berserker', link: '/classes/berserker' },
              { text: 'Warden', link: '/classes/warden' },
            ]
          },
        ],
      },
      {
        text: 'Database',
        collapsed: false,
        items: [
          { text: 'Quests', link: '/quests' },
          { text: 'Items', link: '/items' },
          { text: 'NPCs', link: '/npcs' },
          { text: 'Creatures', link: '/creatures' },
        ]
      },
      {
        text: 'About',
        collapsed: true,
        items: [
          { text: 'This Site', link: '/pages/this-site' },
          { text: 'Embers Adrift', link: '/embers-adrift' },
        ]
      },
    ],
    // logo: '/assets/logo.png',
    editLink: {
      pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: 'Updated Date',
    outline: 'deep',

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
