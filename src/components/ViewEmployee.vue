<template>
    <div>
        <h1>View Employee</h1>

        <ul>
            <li>Name: {{ name }}</li>
            <li>Department: {{ dept }}</li>
            <li>Position: {{ position }}</li>
        </ul>

        <div class="field is-grouped">
            <p class="control">
                <router-link to="/" class="button">Back</router-link>
            </p>
            <p class="control">
                <router-link v-bind:to="{name: 'EditEmployee', params: {employee_id}}" class="button is-link">Edit</router-link>
            </p>
            <p class="control">
                <button @click="deleteEmployee" class="button is-danger">Delete</button>
            </p>
        </div>

    </div>
</template>
<script>
import db from './firebaseInit.js'

export default {
    name: 'ViewEmployee',
    data(){
        return {
            employee_id: null,
            dept: null,
            position: null,
            name: null
        }
    },

    beforeRouteEnter(to, from, next){
        
        db.collection('employee').where('employee_id', '==', to.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm => {
                        vm.employee_id = doc.data().employee_id
                        vm.name = doc.data().name
                        vm.dept = doc.data().dept
                        vm.position = doc.data().position
                    })
                })
            }) 
    },

    watch: {
        '$route' : 'fetchData'
    },

    methods: {
        fetchData(){
            db.collection('employee').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.employee_id = doc.data().employee_id;
                        this.name = doc.data().name
                        this.dept = doc.data().dept
                        this.position = doc.data().position
                    })
                })
        },

        deleteEmployee(){
            if(confirm('are you sure?')){
                db.collection('employee').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                       doc.ref.delete()
                       this.$router.push('/')
                    })
                })
            }
        }
    }
}
</script>