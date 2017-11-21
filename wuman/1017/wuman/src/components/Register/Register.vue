<template>
<div>
    <div class="head">
        <p>
            <img :src='img' alt="">
            <span>登录</span>
        </p>
        <p>
            <i v-bind:class="font"></i>
            <i v-bind:class="bars" @click="calls"></i>
        </p>
    </div>

    <div class="dialog" v-if="isflag">
        <div class="cha">
            <span @click="calls">×</span>
        </div>
        <div class="btn">
            <button class="left">注册</button>
            <button class="right" >登录</button>
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

    <div class="content">
        <div class="top">
            <span>------</span> <span>使用合作账号登录花瓣网 </span><span>------</span>
        </div>
        <ul class="list">
            <li v-for="(v, k) in list" :key="k">
                <img :src="v" alt="">
            </li>
        </ul>
        <div class="top">
            <span>----</span> <span>或者，使用花瓣注册邮箱登录 </span><span>----</span>
        </div>
        <div class="ipt">
            <input type="text" placeholder="花瓣注册邮箱" v-model="uname">
            <input type="text" placeholder="密码">
            <button @click="register">登录</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {slideMock} from '../../mockjs/index.js';
export default {
    name: 'Register',
    data () {
        return {
            img: '../src/assets/image/icon/icon.jpg',
            font: 'fa fa-search',
            list: slideMock.list,
            isflag: false,
            bars: 'fa fa-bars',
            uname: ''
        };
    },
    methods: {
        calls () {
            this.isflag = !this.isflag;
            if (this.isflag) {
                this.bars = 'fa fa-times';
            } else {
                this.bars = 'fa fa-times';
                this.bars = 'fa fa-bars';
            }
        },
        register () {
            axios.post('/register', {
                username: this.uname
            }).then((res) => {
                if (res.data.code === 0) {
                    window.localStorage.setItem('username', this.uname);
                    // this.$store.dispatch('updataUserName', res.data.username);
                    this.$router.push('/user');
                }
            });
        }
    }
};
</script>

<style>
.head{
    display: flex;
    padding-left: 0.08rem;
    padding-right: 0.08rem;
    border-bottom: 0.01rem solid #eaeaea;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    height: 0.48rem;
    align-items: center;
    background: #fff;
}
.head p{
    color: #666;
    display: flex;
    height: 0.2rem;
    align-items: center;
    font-size: 0.18rem;
}
.head p:nth-child(2){
    font-size: 0.22rem;
}
p i:nth-child(1){
    color: #363636;
    padding-left: 0.14rem;
    padding-right: 0.2rem;
    z-index: 1999;
}
p:nth-child(1) span{
    cursor: pointer;
}
p i:nth-child(2){
    color: #363636;
    display: inline-block;
    cursor: pointer;
}
p img{
    padding-right: 0.14rem;
}
.content{
    background: #fafafa;
    height: 100%;
}
.top{
    text-align: center;
    font-size: 0.16rem;
    color: #a1a29f;
    margin-top: 0.14rem;
}
.list{
    display: flex;
    margin-top: 0.18rem;
}
.list li{
    flex: 1;
    height: 0.61rem;
    text-align: center;
}
.ipt{
    display: flex;
    flex-direction: column;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin-top: 0.2rem;
    font-size: 0.16rem;
}
.ipt input{
    border-width: 0;
    height: 0.28rem;
    border-radius: 0.05rem;
    padding-left: 0.08rem;
    border: 0.01rem solid #e2e2e2;
}
.ipt input:nth-child(1){
    margin-bottom: 0.1rem;
}
.ipt input:nth-child(2){
    margin-bottom: 0.1rem;
}
.ipt button{
    background: #d7373a;
    color: #FFF;
    height: 0.4rem;
    border-radius: 0.03rem;
    border: 0.01rem solid #ce1a1a;
}
.dialog{
    z-index: 99;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(51, 51, 51, 0.95);
    margin-top: 0.44rem;
}
.btn{
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
</style>


