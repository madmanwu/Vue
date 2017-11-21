<template>
    <div>
        内容：{{num}}
    </div>
</template>

<script>
export default {
    name: 'Display',
    computed: {
        num () {
            return this.$store.state.count;
        }
    }
};
</script>
<style scoped>

</style>


