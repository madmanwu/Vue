Vue.component('my-child', {
    props: ['todo'],
    template: `<div class="banner-box" @mouseover="over" @mouseout="out">
                <div class="banner">
                  <img :src="item.src" v-for="(item, index) in todo"/>
                </div>
                <slot name="index" :text="todo" :ev="showIndex" :prev="prev" :next="next"><slot name="arrow"></slot></slot>
              </div>`,
    data () {
        return {
            currentIndex: 0,
            timer: null
        }
    },
    mounted () {
        this.autoPlay();
    },
    methods: {
        autoPlay () {
            var that = this;
            this.timer = setInterval(function(){
                that.currentIndex ++;
                if(that.currentIndex >= that.todo.length  ){
                    that.currentIndex = 0;
                }
                that.showIndex(that.currentIndex);
            }, 1500)
        },
        showIndex (index) {
            this.currentIndex = index;
            $('.banner').css('marginLeft', -index*450);
            $("ul li").eq(index).addClass('active').siblings().removeClass()
        },
        over () {
            clearInterval(this.timer)
        },
        out () {
            this.autoPlay()
        },
        prev () {
            this.currentIndex --;
            if (this.currentIndex < 0){
                this.currentIndex = this.todo.length-1;
            }
            this.showIndex(this.currentIndex)
        },
        next () {
            console.log(2);
            this.currentIndex ++;
            if(this.currentIndex >= this.todo.length  ){
                this.currentIndex = 0;
            }
            this.showIndex(this.currentIndex)
        }
    }
})
    const vm = new Vue({
        el: '#app',
        data: {
            imgs: [
                {
                    'src': './img/1(1).jpeg'
                },
                {
                    'src': './img/1(2).jpg'
                },
                {
                    'src': './img/1(3).jpg'
                },
                {
                    'src': './img/1(4).jpg'
                },
                {
                    'src': './img/1(5).jpg'
                },
                {
                    'src': './img/1(6).jpeg'
                },
                {
                    'src': './img/1(7).jpg'
                },
                {
                    'src': './img/1(8).jpg'
                },
                {
                    'src': './img/1(9).jpg'
                }
            ],
            currentIndex: 0
        }
    })