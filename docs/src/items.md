---
title: Items
editLink: false
prev: false
next: false
lastUpdated: false
---
<script setup>
  import items from '../data/items.json'
</script>

# {{ $frontmatter.title }}

<div v-for="(item, index) in items" :key="index">
  <ItemCard :title="item.title" :href="item.path" />
</div>

<!-- <pre>{{ items }}</pre> -->


