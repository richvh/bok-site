<script>
export default {
  props: ['image', 'alt']
}
</script>

<template>
<p>
  <img v-bind:src="'https://img.beesofknowledge.com/' + image" v-bind:alt="alt">
</p>
</template>
