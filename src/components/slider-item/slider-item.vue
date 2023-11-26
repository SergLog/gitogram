<template>
  <div class="wrapper">
    <progressBar />
    <div class="avatar-container">
      <avatar
        url="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
        name="Username"
      />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
    <x-button buttonText="Follow"></x-button>
  </div>
</template>

<script>
import { progressBar } from "../progress-bar";
import { avatar } from "../avatar";
import { button } from "../button";

export default {
  name: "slider-item",
  components: {
    avatar,
    progressBar,
    xButton: button,
  },
  props: {},
};
</script>

<style src="./slider-item.scss" lang="scss" scoped></style>
