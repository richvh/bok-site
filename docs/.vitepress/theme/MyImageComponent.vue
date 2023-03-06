<script>
export default {
  props: [
    'image',
    'alt',
  ]
}
</script>

<template>
<p>
  <img :src="'https://img.beesofknowledge.com/' + image" :alt="alt">
</p>
</template>
