<template>
    <div >
        <div class='ui three column doubling stackable grid container'>
            <div class="column" v-for="(record,index) in contacts.records" :key="index">
                <Contact :contactInfo="record"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Contact from '../components/compContact.vue'

export default {
    name:"Home",
    components:{
        Contact
    },
    data (){
        return{
            contacts : {}
        }
    },
    methods: {
        fetchContacts: function(){
            axios 
            .get('http://10.20.1.71/api/contacts/read.php')
            .then(response => {
                this.contacts = (response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted: function(){
        this.fetchContacts()
    }
}
</script>

<style scoped>
    .grid{
        padding-top:50px !important;
    }

</style>
