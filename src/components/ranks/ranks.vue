<template>
  <div class="c-ranks">
    <button class="btnWithCount" @click="$emit('onStarClick')">
      <div class="left">
        <div class="icon">
          <icon name="star" />
        </div>
        <span class="text">Star</span>
      </div>
      <div class="right">{{ star }}</div>
    </button>
    <button class="btnWithCount" @click="$emit('onForkClick')">
      <div class="left">
        <div class="icon">
          <icon name="fork" />
        </div>
        <span class="text">Fork</span>
      </div>
      <div class="right">{{ fork }}</div>
    </button>
  </div>
</template>

<script>
import { icon } from '@/icons'

export default {
  name: 'ranks',
  components: {
    icon
  },
  props: {
    star: {
      type: String,
      default: '0'
    },
    fork: {
      type: String,
      default: '0'
    }
  }
}
</script>

<styles src="./ranks.scss" lang="scss" scoped></styles>
