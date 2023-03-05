import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('MyItemComponent')
    ctx.app.component('MyQuestComponent')
    ctx.app.component('MyNPCComponent')
    ctx.app.component('MyCreatureComponent')
  }
}


