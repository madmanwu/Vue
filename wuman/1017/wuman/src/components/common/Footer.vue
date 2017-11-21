<template>
    <div class="wrap" v-show="sho" :class="{active: isactive}">
        <i :class='bars' @click='clicks'></i>
        <Dialoog  v-if="isflag"></Dialoog>
        <img :src="img" alt="">
        <div class="search">
            <div class="middle">
                <input type='text' placeholder='搜索你喜欢的' v-model='str'>
                <i class="fa fa-search" @click='shows'></i>
            </div>
        </div>
        <div class="box" @click="box">
            <p class="top"><span class="lii"></span></p>
            <p>向上滑动页面</p>
        </div>
    </div>
</template>

<script>
import Dialoog from '../common/Dialog';
export default {
    name: 'Footer',
    components: {
        Dialoog
    },
    data () {
        return {
            isflag: false,
            str: '',
            sho: true,
            img: '../src/assets/image/img/bg.jpg',
            bars: 'fa fa-bars',
            isactive: false

        };
    },
    methods: {
        shows () {
            if (this.str === '') {
                console.log('输入内容为空!');
            } else {
                this.sho = !this.sho;
            }
        },
        fn () {
            if (this.str === '') {
                console.log('输入内容为空!');
            }
        },
        clicks () {
            this.isflag = !this.isflag;
        },
        box () {
            this.isactive = !this.isactive;
        },
        calls () {
            this.isflag = !this.isflag;
        }
    }
};
</script>

<style scoped>
.active{
    transform: translate3d(0px, -1000px, 0px);
    transition: all 4s ease-out;
}
.wrap{
    z-index: 9999;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
.wrap img{
    width: 100%;
    height: 100%;
}
i{
    position: absolute;
    top: 0.08rem;
    right: 0.08rem;
    color: #fff;
    font-size: 0.22rem;
}
.search{
    width: 90%;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    right: 0.12rem;
    left: 0.12rem;
    box-sizing: border-box;
}
.middle{
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.05rem;
    position: absolute;
}
.middle i{
    color: #bfbfbf;
}
input{
    font-size: 0.18rem;
    width: 100%;
    border: none;
    height: 95%;
    border-radius: 0.05rem;
    padding-left: 0.1rem;
}
.box{
    width: 1.04rem;
    height: 0.48rem;
    position: absolute;
    bottom: 0.3rem;
    left: 37%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box p{
    font-size: 0.16rem;
    color: #FFF;
}
.lii{
    display: block;
    width: 0.3rem;
    height: 0.3rem;
    border-left: 0.01rem solid #fff;
    border-top: 0.01rem solid #fff;
    transform: rotate(45deg);
}
</style>


