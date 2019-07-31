<template>
     <div class="notification">
        <h2 class="title">Register</h2>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email input" v-model="email">
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
                <button class="button is-link" @click="register">Register</button>
            </div>
            <div class="control">
                <button class="button is-text">Cancel</button>
            </div>
        </div>

    </div>
</template>
<script>
import app from './firebaseInit'

export default {
    name: 'Register',
    data(){
        return {
            email: null,
            password: null
        }
    },

    methods: {
        register(){
            app.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                        alert(`Account created for ${user.email}`)
                        this.$router.push('/')
                    },
                    error => {
                        alert(error.message)
                    }
                )
        }
    }
}
</script>