
<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="gitogram">
          <icon name="gitogram" />
        </div>
        <div class="icons">
          <div class="icon">
            <icon name="home" />
          </div>
          <div class="avatar">
            <img :src="avatar" alt="avatar" />
          </div>
          <div class="icon">
            <icon name="signOut" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="story in data.stories"
            :key="story.id"
          >
            <story
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="x-container">
    <ul class="feeds">
      <li
        class="feed"
        v-for="feed in data.feeds"
        :key="feed.id"
      >
        <feed
          :avatar="feed.avatar"
          :username="feed.username"
          :comments="feed.comments"
          :date="feed.date"
        >
          <div class="feed-container">
            <div class="title">{{ feed.title }}</div>
            <div class="text" v-html="feed.text"></div>
            <ranks
              class="ranks"
              :star="feed.counters.star"
              :fork="feed.counters.fork"
            />
          </div>
        </feed>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { icon } from '@/icons'
import { story } from '@/components/story'
import { feed } from '@/components/feed'
import { ranks } from '@/components/ranks'
import avatar from '@/assets/avatar.png'
import data from './mock.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    story,
    feed,
    ranks
  },
  data() {
    return {
      data,
      avatar
    }
  },
  methods: {
    handlePress(id) {
      console.log(id)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
