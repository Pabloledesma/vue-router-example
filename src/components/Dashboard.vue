<template>
    <div>
        <h1>Dashboard</h1>

        <nav class="panel">
            <p class="panel-heading">
                Employees
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
           
            <router-link 
                v-bind:to="{ name: 'ViewEmployee', params: { employee_id: employee.employee_id }}" 
                class="panel-block" 
                v-for="employee in employees"
                :key="employee.Id"
            >
                <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                {{ employee.name }}
            </router-link>
            
        </nav>

        <router-link class="button" to="/new">New</router-link>
    </div>
</template>
<script>
import app from './firebaseInit'

export default {
    name: 'Dashboard',
    data(){
        return {
            employees: []
        }
    },

    created(){
        app.firestore().collection('employee').get().then(
            querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id' : doc.id,
                        'employee_id' : doc.data().employee_id,
                        'name' : doc.data().name,
                        'position' : doc.data().position,
                        'dept' : doc.data().dept
                    }

                    this.employees.push(data)
                })
            }
        )
    }
}
</script>