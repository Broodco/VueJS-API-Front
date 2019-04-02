<template>
    <div class='ui green fixed inverted menu'>
        <div class="header item">ContactDB</div>
        <a class="item" 
        @click="changeView($event,'home')" 
        v-bind:class="{'active': currentPage == 'home'}">Home</a>
        <a class="item" 
        @click="changeView($event,'create')"
        v-bind:class="{'active': currentPage == 'create'}">Create</a>

    </div>
</template>

<script scoped>
export default {
    name: "Navbar",
    data (){
        return{
            currentPage: 'home'
        }
    },
    methods: {
        changeView(event,reference){
            this.$router.push({
                name : reference
            })
            this.currentPage = reference
        }
    },
    props: {
    }
}
</script>

<style scoped>
    .ui.fixed.menu{
        margin-bottom : 50px !important
    }
</style>
