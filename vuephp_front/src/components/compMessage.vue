<template>
    <div class='container'>
        <div class="ui bottom attached floating message container" v-bind:class="[status == '200'|'201'? 'positive' : 'negative']">
            {{ this.msg }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        msg : String,
        status: String
    }
}
</script>