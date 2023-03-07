<script>
export default {
  props: {
    title: String,
    href: String,
  }
}
</script>

<template>

  <p>
    <a :href="href">{{ title }}</a>
  </p>

  <!-- <pre>{{ item }}</pre> -->
</template>
