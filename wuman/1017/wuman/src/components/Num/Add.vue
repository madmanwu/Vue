<template>
    <div>
        <button @click="add">+1</button>
    </div>
</template>

<script>
export default {
    name: 'add',
    mounted () {
        this.$store.dispatch('add', 100);
    },
    methods: {
        add () {
            this.$store.dispatch('add', 1);
        }
    }
};
</script>
<style scoped>
    button{
        width: 0.5rem;
        background: pink;
    }
</style>
