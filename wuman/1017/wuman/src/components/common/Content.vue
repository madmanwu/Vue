<template>
    <section>
        <p class="family big">大家正在关注</p>
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(v, k) in slideImg" :key="k">
                    <img :src="v.ban" alt="">
                    <img :src="v.ban2" alt="">
                    <img :src="v.ban3" alt="">
                    <img :src="v.ban4" alt="">
                    <img :src="v.ban5" alt="">
                    <img :src="v.ban6" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <p class="family small">为您推荐</p>

        <ul class="list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        >
            <li v-for='(v, k) in banner' :key='k'>
                <router-link :to='`/VideoInfo/${v.vid}`' active-class="active" class="router-link-active">
                    <span class="first"><img :src="v.imgone" alt=""></span>
                    <span class="second">
                        <span class="map">{{value}}</span>
                        <img :src="v.imgtwo" alt="">
                        <img :src="v.imgtwo" alt="">
                    </span>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import bus from '../../bus';
import Vue from 'vue';
import {Swipe, SwipeItem} from 'mint-ui';
import '../../assets/css/style.min.css';
import {slideMock} from '../../mockjs/index.js';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    name: 'Content',
    data () {
        return {
            value: '北京',
            active: false,
            slideImg: slideMock.slideImg,
            banner: slideMock.banner
        };
    },
    methods: {
        loadMore () {
            this.loading = true;
            setTimeout(() => {
                let last = this.banner[this.banner.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.banner.push(last);
                }
                this.loading = false;
            }, 2500);
        }
    },
    mounted () {
        var that = this;
        bus.$on('changeName', function (cname) {
            that.value = cname;
        });
    }
};
</script>
<style scoped>
.map{
    background: red;
    width: 27px;
    height: auto;
    position: absolute;
    color: #FFF;
}
section{
    position: relative;
    flex: 1;
    overflow-y: auto;
}
.family{
    font-size: 0.14rem;
    color: #a0a0a0;
    text-align: center;
    background: #fafafa;
    padding-top: 0.04rem;
    padding-bottom: 0.04rem;
}
.big{
    margin-top: 0.04rem;
}
.small{
    margin-top: -0.23rem;
}
.banner{
    margin: 0.08rem;
    height: 2.1rem;
}
.banner mt-swipe-item{
    display: flex;
    height: 0.62rem;
}
.banner img{
    width: 49.4%;
    height: 0.62rem;
}
.list{
    padding-left: 0.11rem;
    padding-right: 0.11rem;
}
.list li{
    width: 100%;
}
.list .first img{
    width: 100%;
    height: 299px;
}
.list .second{
    display: flex;
}
.list .second img{
    width: 50%;
}
.list .second img:nth-child(2){
    padding-left: 0.02rem;
}
</style>


