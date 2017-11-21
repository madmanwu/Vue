import '../style/header/dialog.css';
import '../style/header/font-awesome.min.css';
export default {
    template: `
    <div class="wrap" v-show="sho">
        <i class="fa fa-bars"></i>
        <p>花瓣，陪你过生活的设计师</p>
        <img :src="img" alt="">
        <div class="search">
            <div>
                <input type="text" placeholder="搜索你喜欢的" v-model="str"><i class="fa fa-search" @click="shows"></i>
            </div>
        </div>
    </div>
    `,
    data () {
        return {
            str: '',
            sho: true,
            img: 'images/img/bg.jpg',
            bars: 'fa fa-bars'
        };
    },
    methods: {
        shows () {
            if (this.str === '') {
                console.log('输入内容为空！');
            } else {
                this.sho =! this.sho;
            }
        },
        fn () {
            if (this.str === '') {
                console.log('输入内容为空！');
            }
        }
    }
};
