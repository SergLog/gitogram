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
            v-for="story in mock.stories"
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
      <li class="feed" v-for="feed in items" :key="feed.id">
        <feed
          :avatar="feed.owner?.avatar_url"
          :username="feed.owner?.login"
          :comments="mock.feeds[0]?.comments"
          :date="feed.created_at"
        >
          <div class="feed-container">
            <div class="title">{{ feed.name }}</div>
            <div class="text" v-html="feed.description"></div>
            <ranks
              class="ranks"
              :star="feed.stargazers_count"
              :fork="feed.forks_count"
            />
          </div>
        </feed>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from "@/components/topline";
import { icon } from "@/icons";
import { story } from "@/components/story";
import { feed } from "@/components/feed";
import { ranks } from "@/components/ranks";
import avatar from "@/assets/avatar.png";
import mock from "./mock.json";

import { getPopular } from "../../api/rest/popular";

export default {
  name: "feeds",
  components: {
    topline,
    icon,
    story,
    feed,
    ranks,
  },
  data() {
    return {
      mock,
      avatar,
      items: [],
    };
  },
  async created() {
    this.mock = mock

    try {
      const { data } = await getPopular();
      this.items = data.items;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    handlePress(id) {
      console.log(id);
    },
  },
};
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
