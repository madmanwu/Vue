import '../style/header/header';
import '../style/header/font-awesome.min.css';
export default {
    props: ['m'],
    template: `
        <header class="header">
            <p>
                <img :src='img' alt="">
                发现
            </p>
            <p @click="shows">
                <i v-bind:class="font"></i>
                <i v-bind:class="bars"></i>
            </p>
        </header>`,
    data () {
        return {
            sho: true,
            img: './images/icon/icon.jpg',
            font: 'fa fa-search',
            bars: 'fa fa-bars'
        };
    },
    methods: {
        shows () {
            this.sho = !this.sho;
        }
    }
};
