<script>
export default {
  props: {
   frontmatter: Object,
  }
}
</script>

<template>
  <p>
    Equipment Type: {{ frontmatter.equipmentType }}
  </p>
  <p>
    Armor Class: {{ frontmatter.armorClass }}
  </p>
  <p>
    <MyImageComponent :image="frontmatter.image" :alt="frontmatter.title" />
  </p>
</template>
