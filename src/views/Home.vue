<template>
  <div class="home">
    <div class="container">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control" v-for="(item, index) in words" :key="index">
          <div class="tags has-addons">
            <span class="tag is-dark">{{ item.word }}</span>
            <span class="tag is-success">{{ item.count }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container boxes">
      <div class="box">
        <article class="article">
          <a href="" target="_blank" class="title">Hello</a>
          <p>Description</p>
        </article>
      </div>      <div class="box">
        <article class="article">
          <h2>Hello</h2>
          <p>Description</p>
        </article>
      </div>      <div class="box">
        <article class="article">
          <h2>Hello</h2>
          <p>Description</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      words: [],
      feeds: []
    };
  },
  mounted() {
    var things = ["Rock", "Paper", "Scissor"];
    for (let i = 0; i < 10; i++) {
      this.words.push({
        word: things[Math.floor(Math.random() * things.length)],
        count: Math.floor(Math.random() * 100)
      });
    }
  }
};
</script>

<style lang="css">
.boxes {
  margin-top: 1rem;
}
</style>