<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import router from './router';
export default {
    name: 'app',
    components: {
        router
    }
};
</script>
<style scoped>
#app{
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    position: absolute;
    font-size: 0.12rem; 
    flex-direction: column;
    background: #FFF;
    position: relative;
}
</style>
