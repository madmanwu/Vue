import '../style/header/content.css';
import '../style/header/swiper.min.css';
import '../style/header/swiper.min.js';

export default {
    template: `
    <section>
    <p class="family">大家正在关注</p>

    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(v, k) in slideImg">
                <p><img :src="v.img" alt=""></p>
                <p><img :src="v.img1" alt=""></p>
                <p><img :src="v.img2" alt=""></p>
                <p><img :src="v.img3" alt=""></p>
                <p><img :src="v.img4" alt=""></p>
                <p><img :src="v.img5" alt=""></p>
            </div>
        </div>
    </div>
    
    <p class="family">为您推荐</p>
    
    <ul class="list">
        <li v-for="(v, k) in banner">
            <p class="first"><img v-bind:src="v.imgone" alt=""></p>
            <p class="second"><img v-bind:src="v.imgtwo" alt=""></p>
        </li>
    </ul>
    </section>
    `,
    data () {
        return {
            banner: [
                {
                    imgone: 'images/img/img1.jpg',
                    imgtwo: 'images/img/img12.jpg'
                },
                {
                    imgone: 'images/img/img2.jpg',
                    imgtwo: 'images/img/img22.jpg'
                },
                {
                    imgone: 'images/img/img3.jpg',
                    imgtwo: 'images/img/img32.jpg'
                },
                {
                    imgone: 'images/img/img4.jpg',
                    imgtwo: 'images/img/img42.jpg'
                },
                {
                    imgone: 'images/img/img5.jpg',
                    imgtwo: 'images/img/img52.jpg'
                },
                {
                    imgone: 'images/img/img6.jpg',
                    imgtwo: 'images/img/img62.jpg'
                }
            ],
            slideImg: [
                {
                    img: 'images/banner/ban1.jpg',
                    img1: 'images/banner/ban2.jpg',
                    img2: 'images/banner/ban3.jpg',
                    img3: 'images/banner/ban4.jpg',
                    img4: 'images/banner/ban5.jpg',
                    img5: 'images/banner/ban6.jpg'
                },
                {
                    img: 'images/banner/ban1.jpg',
                    img1: 'images/banner/ban2.jpg',
                    img2: 'images/banner/ban3.jpg',
                    img3: 'images/banner/ban4.jpg',
                    img4: 'images/banner/ban5.jpg',
                    img5: 'images/banner/ban6.jpg'
                }
            ]
        };
    }
};
setTimeout(function () {
    new Swiper('.swiper-container', {
        autoplay: 1000,
        loop: true
    });
}, 400);
