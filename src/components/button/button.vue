<template>
  <button class="c-button">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "button",
  props: {
    buttonText: String,
    required: true
  },
};
</script>

<style src="./button.scss" lang="scss" scoped></style>
