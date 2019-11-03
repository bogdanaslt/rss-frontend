<template>
  <div class="home">
    <div class="container">
      <WordTags :words="words" />
    </div>
    <div class="container boxes">
      <FeedList :feeds="feeds" />
    </div>
  </div>
</template>

<script>
import FeedService from "@/service/FeedService";
import WordTags from "@/components/WordTags";
import FeedList from "@/components/FeedList";

export default {
  data() {
    return {
      words: {},
      feeds: []
    };
  },
  mounted() {
    FeedService.getFeeds().then(response => {
      this.words = response.data.top_words;
      this.feeds = response.data.entries;
    });
  },
  components: {
    WordTags,
    FeedList
  }
};
</script>

<style lang="css">
.boxes {
  margin-top: 1rem;
}
</style>
