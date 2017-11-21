<template>
    <div class="video">
        <h1>午夜影院</h1>
        <br>
        <h3>电影名称：《{{videoInfo.title}}》</h3>
        <br>
        <h3>电影票价：{{videoInfo.nums}}元</h3>
        <br>
        <h4>开场时间：00：00</h4>
        <div class="img">
            <img src="../../assets/image/banner/ban4.jpg" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'videoInfo',
    data () {
        return {
            videoInfo: ''
        };
    },
    methods: {
        getVideo () {
            const pp = {
                'vid': 0,
                'title': '无匹配',
                'nums': 0
            };
            axios.get('/getVideoInfo', {params: {vid: this.$route.params.vid}}).then((res) => {
                if (res.data[0] !== undefined) {
                    this.videoInfo = res.data[0];
                } else {
                    this.videoInfo = pp;
                }
            });
        }
    },
    mounted () {
        this.getVideo();
    },
    beforeRouteUpdata (to, from, next) {
        this.getVideo();
    }
};
</script>

<style scoped>
.video{
    text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: pink;
    padding: 0.1rem;
    box-sizing: border-box;
}
img{
    width: 100%;
    margin-top: 0.2rem;
    
}
.img{
    width: 100%;
    box-shadow: (0, 0, 0.5rem,red);
}
</style>


