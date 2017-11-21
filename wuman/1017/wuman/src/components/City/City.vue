<template>
    <div id="city">
        <mt-index-list>
            <mt-index-section index="A" v-for="(i, k) in cityArr" :key="k" :index="i.name">
                <mt-cell title="Aaron" v-for="(v, k) in i.city" :key="k" :title="v.name">
                    <p @click="changeCityName(v.cid, v.name, i.id)" style="width:100px;height:20px"></p>
                </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
// import bus from '../../bus';
import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
    name: 'city',
    data () {
        return {
            cityArr: []
        };
    },
    methods: {
        changeCityName (cid, cname, pid) {
            // bus.$emit('changeCityName', {cid: cid, cname: cname, pid: pid});
            this.$store.dispatch('updataCity', {cid: cid, cname: cname, pid: pid});
        }
    },
    mounted () {
        axios.get('/getCityList').then((res) => {
            this.cityArr = res.data.province;
        });
    }
};
</script>
<style scoped>
#city{
    width: 100%;
    height: 2000px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, .6);
    color: #000;
    overflow-y: auto;
};
</style>


