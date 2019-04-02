<template>
    <div>
        <form class="ui container attached form" id="updateForm">
            <div class="field">
                <label>Username</label>
                <input v-model="contact.username"/>
            </div>
            <div class="field">
                <label>Email</label>
                <input v-model="contact.email"/>
            </div>
            <div class="field">
                <label>City</label>
                <input v-model="contact.city"/>
            </div>
            <div class="field">
                <label>Country</label>
                <input v-model="contact.country"/>
            </div>
            <div class="field">
                <label>Job</label>
                <input v-model="contact.job"/>
            </div>
            <span>
                <button class="ui green submit button" @click="sendUpdate">Update Contact Infos</button>
                <button class="ui red reset button" @click="resetForm($event)">Reset</button>
            </span>
        </form>
        <Message v-if="requestMade" :msg="message" :status="requestStatus"/>
    </div>
</template>

<script>
import axios from 'axios';
import Message from '../components/compMessage.vue'

export default {
    name:"viewUpdate",
    components:{
        Message
    },
    data(){
        return{
            contact:{},
            backup:{},
            currentPage: "update",
            requestMade : false,
            message:"",
            requestStatus:""
        }
    },
    props:{
        id: String
    },
    methods: {
        fetchContact: function(){
            axios 
            .get(`http://10.20.1.71/api/contacts/read_one.php?id=${this.id}`)
            .then(response => {
                this.contact = response.data
                this.backup = JSON.parse(JSON.stringify(response.data))       
            })
            .catch(error => {
                console.log(error)
            })
        },
        resetForm: function() {
            this.contact = Object.assign({},this.backup)
        },
        sendUpdate: function(){
            if(this.contact.username !='' & this.contact.email !='' & this.contact.city !='' & this.contact.country !='' & this.contact.job !=''){
                axios
                .post('http://127.0.0.1/api/contacts/update.php',this.contact)
                .then(response => {
                    console.log(response.data);
                    this.requestMade = true;
                    this.message = response.data.message
                    this.requestStatus = response.status
                })
                .catch(error => {
                    console.log(error)
                });
            } else {
                this.requestMade = true;
                this.message = 'Please fill out all fields';
                this.requestStatus = 'error'
            }
        }
    },
    mounted: function(){
        this.fetchContact()
    },
}
</script>

<style scoped>
    .form{
        padding-top: 50px;
    }
</style>
