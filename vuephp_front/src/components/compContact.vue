<template>
    <div class="ui fluid card">
        <div class="content">
            <div class="ui green header">
                {{ capitalize(contactInfo.username) }}
            </div>
        </div>
        <div class="content">
            <div class="meta">
                {{ contactInfo.job }} from 
                {{ capitalize(contactInfo.city) }}
                &nbsp;
                <i :class="contactInfo.country.toLowerCase()" class='flag'> </i>
            </div>
            <h5 class="ui left aligned green">Email</h5>
            {{ contactInfo.email }}
            <div class='ui clearing divider'/>
            <h5 class="ui left aligned green">City</h5>
            {{ capitalize(contactInfo.city) }}
            <div class='ui clearing divider'/>
            <h5 class="ui left aligned green">Country</h5>
            {{ capitalize(contactInfo.country) }}
        </div>
        <div class="extra content">
            <a class="left floated edit" @click="changeView($event,'update')">
                <i class="edit icon"></i>
                Update Info
            </a>
            <a class="right floated delete" @click="changeView($event,'delete')">
                <i class="delete icon"></i>
                Delete Contact
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    props: {
        contactInfo : Object
    },
    methods:{
        capitalize:function(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        changeView(event,reference){
            this.$router.push({
                name : reference,
                params: { id: `${this.contactInfo.id}` }
            })
            this.currentPage = reference
        }
    }
}
</script>

<style scoped>
    .edit:hover{
        color: green !important;
    }
    .delete:hover{
        color: red !important;
    }
</style>
