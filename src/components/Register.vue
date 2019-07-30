<template>
    <div class="container">
        
        <form>

        <p>email: <input type="email" name="email" v-model="email" /></p>
        <p>Password: <input type="password" name="password" v-model="password"></p>
        <button @click="register">Register</button>
        </form>
    </div>
</template>
<script>

export default {
    name: 'Register',
    data(){
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        register(e){
            console.log('register');
            e.preventDefault();
        }
    }
}
</script>