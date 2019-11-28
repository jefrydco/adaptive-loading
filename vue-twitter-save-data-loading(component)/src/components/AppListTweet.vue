<template>
  <div class="scroller">
    <app-tweet v-for="(item, i) in tweets" :key="i" :tweet="item" :save-data="saveData" />
  </div>
</template>

<script>
// import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";

import AppTweet from "./AppTweet";

export default {
  props: {
    tweets: {
      type: Array,
      default() {
        return [];
      }
    },
    saveData: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppTweet
  }
}
</script>

<style>
.scroller {
  height: 100vh;
  overflow-y: auto;
}
</style>
