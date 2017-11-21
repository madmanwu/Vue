<template>
    <div>
        <Add></Add>
        <Cut></Cut>
        <Display></Display>
    </div>
</template>

<script>
import Add from './Add';
import Cut from './Cut';
import Display from './Display';
export default {
    name: 'Main',
    components: {
        Add,
        Cut,
        Display
    }
};
</script>
<style scoped>

</style>


