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
      { text: 'FAQs', link: '/pages/faqs' },
      {
          text: 'Database',
          items: [
              { text: 'Zones', link: '/zones' },
              { text: 'Quests', link: '/quests' },
              { text: 'Items', link: '/items' },
              { text: 'Npcs', link: '/npcs' },
              { text: 'Creatures', link: '/creatures' },
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
            text: 'Dungeons',
            link: '/dungeons',
            collapsed: true,
            items: [
              { text: 'Central Veins 1', link: '/dungeons/central-veins-1' },
              { text: 'Central Veins 2', link: '/dungeons/central-veins-2' },
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
          {
            text: 'Professions',
            link: '/professions',
            collapsed: true,
            items: [
              { text: 'Hunter', link: '/professions/hunter' },
              { text: 'Forester', link: '/professions/forester' },
              { text: 'Prospector', link: '/professions/prospector' },
              { text: 'Tinker', link: '/professions/tinker' },
              { text: 'Weaponsmith', link: '/professions/weaponsmith' },
              { text: 'Armorsmith', link: '/professions/armorsmith' },
              { text: 'Outfitter', link: '/professions/outfitter' },
              { text: 'Provisioner', link: '/professions/provisioner' },
              { text: 'Woodworker', link: '/professions/woodworker' },
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
          { text: 'Todo', link: '/todo' },
        ]
      },
    ],
    // logo: '/assets/logo.png',
    editLink: {
      pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/src/:path',
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
