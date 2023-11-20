<template>
  <div class="c-ranks">
    <div class="rank">
      <div class="rank-icon">
        <div class="icon">
          <icon name="star" />
        </div>
        <span class="text">Star</span>
      </div>
      <div class="rank-text">{{ star }}</div>
    </div>
    <div class="rank">
      <div class="rank-icon">
        <div class="icon">
          <icon name="fork" />
        </div>
        <span class="text">Fork</span>
      </div>
      <div class="rank-text">{{ fork }}</div>
    </div>
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
