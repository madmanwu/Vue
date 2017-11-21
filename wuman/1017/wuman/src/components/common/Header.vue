<template>
    <header class="header">
        <p>
            <img :src='img' alt="">
            <span @click="cityShow">发现  【{{city.cname}}】</span>
        </p>
        <p>
            <i v-bind:class="font" @click="search"></i>
            <i v-bind:class="bars" @click="calls"></i>
        </p>
        <div class="sea" v-if="isshow">
            <span @click="search">×</span>
            <input type="text" v-model="city.cname" ref="ipt">
        </div>

        <div class="dia" v-if="isflag">
            <div class="btn">
                <button class="left" @click="sign(paths)">注册</button>
                <button class="right"  @click="register(path)">登录</button>
            </div>
            <div class="cont">
                <div class="list1">
                    <span>最新</span><i class="fa fa-angle-right"></i>
                </div>
                <div class="list2">
                    <span>热门</span><i class="fa fa-angle-right"></i>
                </div>
                <div class="list3">
                    <span>发现</span><i class="fa fa-angle-right"></i>
                </div>
            </div>
            <div class="bottom">
                <button>访问电脑版</button>
                <button>下载客户端</button>
            </div>
        </div>
    </header>
</template>
<script>
import bus from '../../bus';
import {mapState} from 'vuex';
export default {
    name: 'Header',
    data () {
        return {
            img: '../src/assets/image/icon/icon.jpg',
            font: 'fa fa-search',
            bars: 'fa fa-bars',
            // value: '北京',
            // city: {
            //     cid: 0,
            //     cname: '北京'
            // },
            isflag: false,
            isshow: false,
            item: '',
            path: '/register',
            paths: '/sign'
        };
    },
    computed: mapState({
        city: state => state.city
    }),
    methods: {
        cityShow () {
            // bus.$emit('changeCity', 'changed');
            this.$store.dispatch('cityShow');
        },
        calls () {
            this.isflag = !this.isflag;
            if (this.isflag) {
                this.bars = 'fa fa-times';
            } else {
                this.bars = 'fa fa-times';
                this.bars = 'fa fa-bars';
            }
        },
        search () {
            this.isshow = !this.isshow;
        },
        init () {
            // console.log(this.$refs.ipt);
        },
        register (path) {
            this.$router.push(path);
        },
        sign (paths) {
            this.$router.push(paths);
        }
    },
    mounted () {
        this.init();
        var that = this;
        bus.$on('changeName', function (cname) {
            that.value = cname;
        });
    }
};
</script>

<style scoped>
.sea{
    position: absolute;
    width: 85%;
    top: 0.14rem;
    height: 0.2rem;
    z-index: 999;
    display: flex;
    align-items: center;
}
.sea span{
    font-size: 0.3rem;
    padding-right: 0.1rem;
    background: #fff;
    margin-top: -0.05rem;
}
.sea input{
    width: 100%;
    height: 100%;
    border-width: 0;
    border: 0.01rem solid #ccc;
    background: #f3f3f3;
}
.dia{
    z-index: 99;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(51, 51, 51, 0.95);
    margin-top: 0.44rem;
}
.btn{
    margin-top: 0.13rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    height: 0.35rem;
}
.btn button{
    height: 100%;
    border: none;
    font-size: 0.16rem;
}
.btn .left{
    width: 60%;
    background: #e03b43;
    color: #fff;
    border: 0.01rem solid #c90000;
}
.btn .right{
    width: 33.7%;
    margin-left: 0.141rem;
    color: #444;
}
.cont{
    margin-top: 0.21rem;
    font-size: 0.16rem;
    color: #FFF;
}
.cont div{
    border-top: 0.01rem solid #333333;
    line-height: 0.42rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    position: relative;
}
.cont div i{
    position: absolute;
    color: #8a8a8a;
    right: 0.12rem;
    top: 0.12rem;
}
.cont .list3{
    border-bottom: 0.01rem solid #333333;
}
.bottom{
    line-height: 0.68rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
}
.bottom button{
    width: 48%;
    border-width: 0;
    background: #333333;
    color: #FFF;
    height: 0.38rem;
    font-size: 0.16rem;
}
.bottom button:nth-child(2){
    margin-left: 0.06rem;
}
header{
    display: flex;
    padding: 0.08rem;
    border-bottom: 0.01rem solid #eaeaea;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    height: 0.3rem;
    align-items: center;
    background: #fff;
}
header p{
    color: #666;
    display: flex;
    height: 0.2rem;
    align-items: center;
    font-size: 0.18rem;
} 
p i:nth-child(1){
    color: #333;
    padding-left: 0.14rem;
    padding-right: 0.2rem;
    z-index: 1999;
}
p:nth-child(1) span{
    cursor: pointer;
}
p:nth-child(2) i:nth-child(1){
    z-index: 88;
}
p i:nth-child(2){
    color: #333;
    display: inline-block;
    cursor: pointer;
}
p img{
    padding-right: 0.14rem;
}
</style>


