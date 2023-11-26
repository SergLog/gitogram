<template>
  <div class="c-progress-bar" :class="{ 'active': active }">
    <div ref="progress" class="progress"></div>
  </div>
</template>

<script>
export default {
  title: "progress-bar",
  emits: ["onFinish"],
  data() {
    return {
      active: false,
    };
  },  
  methods: {
    emitOnFinish() {
      this.$emit("onFinish");
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.active = true;
    });

    this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      "transitionend",
      this.emitOnFinish
    );
  },
};
</script>

<style src="./progress-bar.scss" lang="scss" scoped></style>
