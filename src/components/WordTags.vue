<template>
  <div class="field is-grouped is-grouped-multiline">
    <WordTag
      v-for="(count, word) in words"
      :key="word"
      :word="word"
      :count="count"
    />
  </div>
</template>

<script>
import WordTag from "./WordTag";

export default {
  props: {
    words: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    WordTag
  }
};
</script>
