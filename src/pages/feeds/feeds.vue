
<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="">
          <h1>Gitogram /</h1>
          <div class="icon">
            <icon name="home" />
          </div>
          <div class="icon">
            <icon name="home" />
          </div>
          <div class="icon">
            <icon name="home" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in data.stories" :key="story.id">
            <story :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)" />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <ul class="feeds">
    <li class="feed-item" v-for="feed in data.feeds" :key="feed.id">
      <feed :avatar="feed.avatar" :username="feed.username" :comments="feed.comments" />
    </li>
  </ul>
</template>

<script>
import { topline } from '@/components/topline'
import { icon } from '@/icons'
import { story } from '@/components/story'
import { feed } from '@/components/feed'
import data from './dataMock.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    story,
    feed
  },
  data() {
    return {
      data
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
