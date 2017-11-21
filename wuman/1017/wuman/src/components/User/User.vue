<template>
    <div id="user">
        我的{{username}}
        <router-view></router-view>
        <router-link :to="{name: 'profile', params: {id: 1}}">跳转2级</router-link>
        <!-- {{$route.params.id}} -->
    </div>
</template>
<script>
// import { mapState } from 'vuex';
export default {
    name: 'user',
    data () {
        return {
            username: ''
        };
    },
    mounted () {
        this.username = window.localStorage.getItem('username');
    }
    /* ,
    computed: mapState({
        username: state => state.username
    }) */
};
</script>
<style scoped>

</style>
