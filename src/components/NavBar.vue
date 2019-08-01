<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <router-link to="/" class="navbar-item">Dashboard</router-link>

            <a class="navbar-item">
                Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <router-link class="button is-primary" to="/register" v-show="!authenticated">
                        <strong>Sign up</strong>
                    </router-link>
                    <router-link class="button is-light" to="/login" v-show="!authenticated">
                        Log in
                    </router-link>
                    <button class="button" @click="logout" v-show="authenticated">Logout</button>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
import app from './firebaseInit'

export default {
    name: 'NavBar',
    data(){
        return {
            
        }
    },

    computed: {
        authenticated(){
            app.auth().onAuthStateChanged(user => {
                if(user){
                    return true
                } else {
                    return false
                }
            })
        }
    },

    methods: {
        logout(){
            app.auth().signOut().then(() => {
                this.$router.push('/login')
            })
        }
    }
    
}
</script>