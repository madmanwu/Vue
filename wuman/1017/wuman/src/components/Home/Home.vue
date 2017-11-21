<template>
    <div id="home">
        <Headers></Headers>
        <Contents></Contents>
        <Footerd></Footerd>
        <City v-if='cityFlag'></City>
        <Footers></Footers>
    </div>
</template>
<script>

// import bus from '../../bus';
import City from '../City/City';
import { mapState } from 'vuex';
import Dialoog from '../../components/common/Dialog.vue';
import Headers from '../../components/common/Header.vue';
import Contents from '../../components/common/Content.vue';
import Footerd from '../../components/common/Footers.vue';
import Footers from '../../components/common/Footer.vue';
export default {
    name: 'home',
    components: {
        Headers,
        Contents,
        Footerd,
        Footers,
        Dialoog,
        City
    },
    computed: mapState({
        cityFlag: state => state.cityFlag,
        city: state => state.city
    }),
    /* data () {
        return {
            isflag: true
        };
    }, */
    mounted () {
        /* let that = this;
        bus.$on('changeCity', function (data) {
            that.cityFlag = data;
        });
        bus.$on('changeCityName', function (cid) {
            that.cityFlag = false;
            console.log(cid.cname);
            that.fn(cid.cname);
        }); */
    },
    methods: {
        /* fn (cname) {
            bus.$emit('changeName', cname);
            // console.log(cname);
        } */
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