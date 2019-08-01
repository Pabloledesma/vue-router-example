<template>
    <div>
        <h1 class="title">Edit Employee</h1>

        <div class="field">
            <label class="label">Id</label>
            <div class="control">
                <input class="input" type="text" placeholder="Id" v-model="employee_id" disabled>
            </div>
        </div>

        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="name">
            </div>
        </div>

        <div class="field">
            <label class="label">Department</label>
            <div class="control">
                <input class="input" type="text" placeholder="department" v-model="dept">
            </div>
        </div>

        <div class="field">
            <label class="label">Position</label>
            <div class="control">
                <input class="input" type="text" placeholder="position" v-model="position">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="editEmployee">Edit</button>
            </div>
            <div class="control">
                <button class="button is-text">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import db from './firebaseInit'
export default {
    name: 'EditEmployee',
    data(){
        return {
            employee_id: null,
            dept: null,
            position: null,
            name: null
        }
    },

    beforeRouteEnter(to, from, next){
        
        db.firestore().collection('employee').where('employee_id', '==', to.params.employee_id).get()
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

        editEmployee(){
            db.collection('employee').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                   doc.ref.update({
                       employee_id: this.employee_id,
                       name: this.name,
                       dept: this.dept,
                       position: this.position
                   }).then(() => {
                       this.$router.push({name: 'EditEmployee', params: {employee_id: this.employee_id}})
                   }).catch(error => alert(error))
                })
            })
        }
    }
}
</script>