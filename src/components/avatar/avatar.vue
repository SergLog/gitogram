<template>
  <div class="avatar">
    <div class="avatar__image">
      <img :src="url" alt="" />
    </div>
    <p class="avatar__name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "avatar",
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="./avatar.scss" lang="scss" scoped></style>
