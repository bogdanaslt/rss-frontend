<template>
  <div class="register-page">
    <div class="columns">
      <form novalidate class="column is-6 is-offset-3" @submit.prevent="register">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              :class="{'is-danger': messages.email.isError, 'is-success': !messages.email.isError && messages.email.message}"
              type="email"
              placeholder="someone@awesome.com"
            />
            <p
              class="help"
              :class="{'is-danger': messages.email.isError, 'is-success': !messages.email.isError && messages.email.message}"
            >{{ messages.email.message }}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              v-model="password"
              class="input"
              :class="[messages.password.isError ? 'is-danger' : '']"
              type="password"
              placeholder="********"
            />
            <p
              class="help"
              :class="[messages.password.isError ? 'is-danger' : '']"
            >{{ messages.password.message }}</p>
          </div>
        </div>
        <div class="field is-grouped is-flex is-vcentered">
          <div class="control">
            <button class="button is-link" :disabled="isLoading">Register</button>
          </div>
          <router-link class="is-link" :to="{ name: 'login' }">Navigate to Login page</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "@/service/UserService";
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      email: null,
      password: null,
      messages: {
        email: {
          message: null,
          isError: false
        },
        password: {
          message: null,
          isError: false
        }
      },
      isLoading: false
    };
  },
  created() {
    this.debouncedCheckEmail = debounce(this.checkEmail, 500);
  },
  methods: {
    register() {
      this.isLoading = true;
      UserService.register({ email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch(error => {
          this.messages.email.message = error.response.data.email;
          this.messages.email.isError = !!error.response.data.email;
          this.messages.password.message = error.response.data.password;
          this.messages.password.isError = !!error.response.data.password;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    checkEmail() {
      this.isLoading = true;
      UserService.checkEmail(this.email)
        .then(response => {
          this.messages.email.message = response.data.email;
          this.messages.email.isError = false;
        })
        .catch(error => {
          this.messages.email.message = error.response.data.email;
          this.messages.email.isError = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  watch: {
    email() {
      this.debouncedCheckEmail();
    }
  }
};
</script>

<style lang="css">
.is-flex.is-vcentered {
  align-items: center;
}
</style>
