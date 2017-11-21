<template>
    <div class='footer'>
        <ul class='tab'>
            <li v-for='(v, k) in list' :key='k' :class="{bg:flag==k}" @click='fn(k, v.path)'>
                <i :class='v.fonts'></i>
                <span>{{v.smg}}</span>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data () {
        return {
            flag: 0,
            list: [
                {
                    fonts: 'fa fa-home',
                    smg: '首页',
                    path: '/'
                },
                {
                    fonts: 'fa fa-qrcode',
                    smg: '分类',
                    path: '/kind'
                },
                {
                    fonts: 'fa fa-cart-plus',
                    smg: '购物车',
                    path: '/car'
                },
                {
                    fonts: 'fa fa-user-o',
                    smg: '我的',
                    path: '/user'
                }
            ]
        };
    },
    methods: {
        fn (index, path) {
            this.$router.push(path);
            this.flag = index;
        }
    }
};
</script>

<style scoped>
.footer{
    width: 100%;
    bottom: 0;
    display: flex;
    position: fixed;
    bottom: 0;
    height: .4rem;
    background: #fafafa;
    font-size: 0.12rem;
}
.bg{
    color: #ff3366;
}
.footer > .tab{
    margin-top: 4px;
    margin-bottom: 4px;
    display: flex;
    width: 100%;
}
        
.footer > .tab > li{
    width: 25%;
    text-align: center;
}
            
                
.footer > .tab > li > i{
    font-size: 16px;
}             
                    
.footer > .tab > li span{
    display: block;
}
                    
</style>

