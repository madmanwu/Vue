
let content = document.getElementsByClassName('content')[0];
let loadImg = document.getElementsByClassName('load-img')[0];
let idx = 0;
let array = [];
function loadImageAsync (url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        image.src = url;
    });
}
let imgs = [
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3229845804,3621776192&fm=27&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1723559277,853453020&fm=27&gp=0.jpg',
    'http://img3.imgtn.bdimg.com/it/u=2854250323,2738094204&fm=27&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=720985519,3232981341&fm=27&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=2909352837,4034562327&fm=27&gp=0.jpg',
    'http://img5.imgtn.bdimg.com/it/u=3008933349,272514914&fm=27&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=2919869795,1032567945&fm=27&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=4009273332,42836894&fm=200&gp=0.jpg',
    'http://img1.imgtn.bdimg.com/it/u=4258903629,2122086536&fm=27&gp=0.jpg',
    'http://img5.imgtn.bdimg.com/it/u=574722073,786734176&fm=27&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=4202766132,3919286248&fm=11&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=2556777339,380556245&fm=200&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=3917053957,2732930047&fm=27&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=1725393487,2350590061&fm=27&gp=0.jpg',
    'http://img5.imgtn.bdimg.com/it/u=574722073,786734176&fm=27&gp=0.jpg',
    'http://img1.touxiang.cn/uploads/20120710/10-074110_808.jpg'
];
// setTimeout(function () {
//     imgs.map( (v, k) => {
//         loadImageAsync(v).then((result) => {
//             result.id = 'loading';
//             content.appendChild(result);
//             showLoad();
//         });
//     });
// }, 2000);
imgs.map( (v, k) => {
        loadImageAsync(v).then((result) => {
            result.id = 'loading';
            array.push(result);
            idx++;
            showLoad(idx);
        });
    });
function showLoad (k) {
    console.log(k);
    if (array.length === 16) {
        array.forEach(v => {
            content.appendChild(v);
        })
        loadImg.style = 'display:none';
    } else {
        loadImg.style = 'display:block';
    }
    // if (document.getElementById('loading').complete === true) {
    //     content.style = 'display:block';
    //     loadImg.style = 'display:none';
    // } else {
    //     content.style = 'display:none';
    //     loadImg.style = 'display:block';
    // }
}
