<script>
  import items from '../data/items.json';
  export default {
    data() {
      return {
        items: items
      }
    }
  }
</script>

<template>

  <div v-for="(item, index) in items" :key="index">
    <ItemCard :title="item.title" :href="item.path" />
  </div>

  <!-- <pre>{{ items }}</pre> -->

</template>

