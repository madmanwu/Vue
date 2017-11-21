let list = document.querySelector('.list-wrap');
let startY, endY, Y;
let clientH = list.querySelector('dl').clientHeight;
let footList = list.querySelector('.foot-list');
let i = 0;
let data = [
    {
        src: './images/imgs/imgs_05.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 29.9,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_04.png',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 30,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_06.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 29.9,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_07.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 29.9,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_08.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 30,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_09.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 29.9,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_05.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 29.9,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_06.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 30,
        menprice: 109,
        bought: 270
    }, {
        src: './images/imgs/imgs_07.jpg',
        title: '旺顺阁芋头泡饼',
        infor: '[王府井/东单]1斤鱼头券3选1',
        price: 29.9,
        menprice: 109,
        bought: 270
    }
];
function loadDlAsync (datas) {
    console.log(datas);
    return new Promise(function (resolve, reject) {
        let dls = [];
        let str = '';
        datas.map((v, k) => {
            str = `<dl>
                    <dt><img src=${v.src}></dt>
                    <dd>
                        <div class="top">${v.title}</div>
                        <div class="center text-block">${v.infor}</div>
                        <div class="price">
                            <span class="strong">${v.price}</span><span class="strong-color">元</span>
                            <del>门市价:${v.menprice}元</del>
                            <span class="line-right">已售${v.bought}</span>
                        </div>
                    </dd>
                </dl>`;
            dls.push(str);
        });
        dls.map((v, k) => {
            v.onload = function () {
                resolve(dls);
            };
            v.onerror = function () {
                reject(new Error('Could not load image' + v));
            };
            footList.innerHTML += v;
        });
    });
};
list.addEventListener('touchstart', e => {
    startY = e.changedTouches[0].clientY;
    console.log('开始滑动事件');
});
list.addEventListener('touchmove', e => {
    console.log('滑动中');
});
list.addEventListener('touchend', e => {
    endY = e.changedTouches[0].clientY;
    console.log('滑动结束');
    Y = Math.abs(endY - startY);
    if (Y >= clientH && data.length > 2) {
        let datas = data.splice(0, 2);
        loadDlAsync(datas);
    }
});
