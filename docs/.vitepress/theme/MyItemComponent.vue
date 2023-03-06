<script>
export default {
  props: {
   item: Object,
  }
}
</script>

<template>
  <p>
    <template v-for="(value, name) in item.attributes">
      <div v-if="value">
        {{ name }}: {{ value }}
      </div>
    </template>
  </p>

  <p>
    <MyImageComponent :image="item.image" :alt="item.title" />
  </p>

  <!-- <pre>{{ item }}</pre> -->
</template>
