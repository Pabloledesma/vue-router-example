<template>
    <div class="notification">
        <h2 class="title">Login</h2>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email input" v-model="emal">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="login">Login</button>
            </div>
            <div class="control">
                <button class="button is-text">Logout</button>
            </div>
        </div>

    </div>
</template>
<script>
import app from './firebaseInit'

export default {
    name: 'login',
    data(){
        return {
            email: null,
            password: null
        }
    },

    methods: {
        login(){
            app.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/')
                }).catch(error => {
                    console.log(error.message)
                })
        }
    }
}
</script>


