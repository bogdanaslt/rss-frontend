<template>
  <div>
    <FeedListItem v-for="(item, index) in feeds" :key="index" :item="item" />
  </div>
</template>

<script>
import FeedListItem from "./FeedListItem";

export default {
  props: {
    feeds: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    FeedListItem
  }
};
</script>
