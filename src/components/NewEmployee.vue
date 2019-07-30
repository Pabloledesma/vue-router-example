<template>
    <div>
        <h1>New Employee</h1>

        <div class="field">
            <label class="label">Id</label>
            <div class="control">
                <input class="input" type="text" placeholder="Id" v-model="employee_id">
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
                <button class="button is-link" @click="saveEmployee">Submit</button>
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
    name: 'NewEmployee',
    data(){
        return {
            name: null,
            dept: null,
            position: null,
            employee_id: null
        }
    },

    methods: {
        saveEmployee(){
            db.collection('employee').add({
                name: this.name,
                dept: this.dept,
                position: this.position,
                employee_id: this.employee_id
            }).then(docRef => {
                this.$router.push('/')
            }).catch(error => console.log(err))
        }        
    }
}
</script>