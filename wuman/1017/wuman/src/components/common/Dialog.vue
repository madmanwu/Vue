<template>
    <div>
        <div class="dialog" v-if="isflag">
            <div class="cha">
                <span @click="calls">×</span>
            </div>
            <div class="btn">
                <button class="left" @click="sign(paths)">注册</button>
                <button class="right" @click="register(path)">登录</button>
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
    </div>
</template>
<script>
export default {
    name: 'Dialog',
    data () {
        return {
            isflag: true,
            path: '/register',
            paths: '/sign'
        };
    },
    methods: {
        calls () {
            this.isflag = !this.isflag;
        },
        register (path) {
            this.$router.push(path);
        },
        sign (paths) {
            this.$router.push(paths);
        }
    }
};
</script>
<style>
.dialog{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(51, 51, 51, 0.95);
    height: 100%;
    z-index: 1000;
}
.cha{
    width: 100%;
    background: rgba(51, 51, 51, 0.95);
    color: #fff;
    font-size: 0.3rem;
    text-align: right;
    line-height: 0.42rem;
}
.cha span{
    margin-right: 0.12rem;
}
.btn{
    margin-top: 0.2rem;
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
    right: 0.14rem;
    top: 0.14rem;
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


