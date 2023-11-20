<template>
  <button class="c-feed-user">
    <div class="avatar">
      <img :src="avatar" class="img" alt="avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  name: 'User',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
