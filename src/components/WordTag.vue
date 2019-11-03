<template>
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">{{ word }}</span>
      <span class="tag is-success">{{ count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      default: ""
    },
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>
