<template>
  <div class="box">
    <article class="article">
      <a :href="item.link" target="_blank" class="subtitle">{{ item.title }}</a>
      <div v-html="item.summary"></div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
