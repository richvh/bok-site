import DefaultTheme from 'vitepress/theme'
import MyImageComponent from './MyImageComponent.vue'
import MyItemComponent from './MyItemComponent.vue'
import MyQuestComponent from './MyQuestComponent.vue'
import ItemCard from './ItemCard.vue'
import ItemList from './ItemList.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app
      .component('MyImageComponent', MyImageComponent)
      .component('MyItemComponent', MyItemComponent)
      .component('MyQuestComponent', MyQuestComponent)
      .component('ItemCard', ItemCard)
      .component('ItemList', ItemList)
  }
}


