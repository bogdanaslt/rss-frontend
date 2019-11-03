<template>
  <div id="app">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">RSS Reader</h1>
            <h2 class="subtitle">Simple RSS reader for single feed</h2>
          </div>
          <div class="column is-clearfix" v-if="user">
            <Profile />
          </div>
        </div>
      </div>
    </div>
    <div class="container padd">
      <router-view />
    </div>
  </div>
</template>

<script>
import Profile from "./components/Profile";

export default {
  components: {
    Profile
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>