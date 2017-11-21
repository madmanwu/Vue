<template>
    <div id="city">
        <p class="top">请选择您所在的城市</p>
        <div class="" v-for="(item, k) in cityArr" :key='k'>
              <p class="province">{{item.name}}</p>
              <div class="city" v-for="(city, k) in item.city" :key="k">
                  <p @click="changeCityName(city.cid)">{{city.name}}</p>
                  <!-- <p @click="changeCityName(city.cid, city.cname, item.id)">{{city.name}}</p> -->
              </div>
        </div>
        <div class="tos" v-for="(item, k) in cityArr" :key="k">
            <p class="tos-item">a</p>
            <p>b</p>
            <p>c</p>
            <p>d</p>
            <p>e</p>
            <p>f</p>
            <p>g</p>
            <p>h</p>
            <p>i</p>
            <p>j</p>
            <p>k</p>
            <p>l</p>
            <p>m</p>
            <p>n</p>
            <p>o</p>
            <p>p</p>
            <p>q</p>
            <p>r</p>
            <p>s</p>
            <p>t</p>
            <p>u</p>
            <p>v</p>
            <p>w</p>
            <p>x</p>
            <p>y</p>
            <p>z</p>
        </div>
    </div>
</template>
<script>
import bus from '../../bus';
import axios from 'axios';
export default {
    name: 'city',
    data () {
        return {
            cityArr: []
        };
    },
    methods: {
        changeCityName (cid) {
            bus.$emit('changeCityName', cid);
        }
    },
    /* method: {
        changeCityName (cid, cname, pid) {
            bus.$emit('changeCityName', {cid: cid, cname: cname, pid: pid})
        }
    } */
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
    color: #FFF;
    overflow-y: auto;
};
.tos-item{
    display: block;
}
.tos{
    padding-left: 15px;
    height: 415px;
    width: 20px;
    background: blueviolet;
    position: fixed;
    right: 5px;
    z-index: 100000;
}
.province{
    background: pink;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #000;
}
.city{
    line-height: 20px;
    color: #000;
}
</style>


