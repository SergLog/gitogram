<template>
  <div class="c-feed">
    <user
      :avatar="avatar"
      :username="username"
    />
    <slot></slot>
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="comment in comments" :key="comment.id">
          <comment :text="comment.text" :username="comment.username" />
        </li>
      </ul>
    </div>
    <div
      v-if="date"
      class="date"
    >
      {{ date }}
    </div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { user } from '../user'

export default {
  name: 'feed',
  components: {
    comment,
    toggler,
    user
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    comments: {
      type: Array,
      default() {
        return []
      }
    },
    date: {
      type: String
    }
  },
  data() {
    return {
      shown: false
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style src="./feed.scss" lang="scss" scoped></style>
