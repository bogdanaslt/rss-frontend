<template>
  <div class="login-page">
    <div class="columns">
      <form novalidate class="column is-6 is-offset-3" @submit.prevent="login">
        <div class="notification is-danger" v-if="errors.generic">
          {{ errors.generic }}
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="someone@awesome.com"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div class="field is-grouped is-flex is-vcentered">
          <div class="control">
            <button class="button is-link" :disabled="isLoading">Login</button>
          </div>
          <router-link class="is-link" :to="{ name: 'register' }"
            >Navigate to Registration page</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "@/service/UserService";

export default {
  data() {
    return {
      email: null,
      password: null,
      errors: {
        email: "",
        password: "",
        generic: ""
      },
      isLoading: false
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      UserService.login({ email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.errors.generic = error.response.data.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="css">
.is-flex.is-vcentered {
  align-items: center;
}
</style>
