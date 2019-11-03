<template>
    <div class="profile is-pulled-right">
        <p>Logged in as <b>{{ user.email }}</b></p>
        <p>Member since {{ user.createdAt | formatDate }}</p>
        <a @click="logout">Logout</a>
    </div>
</template>

<script>
import UserService from "@/service/UserService"

export default {
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        logout() {
            UserService
                .logout()
                .then(response => this.$store.state.commit('setUser', null))
                .catch(error => {})
                .finally(() => {
                    this.$router.push('/login');
                });
        }
    },
    filters: {
        formatDate(date) {
            return (new Date(date)).toLocaleDateString("lt-LT");
        }
    }
}
</script>