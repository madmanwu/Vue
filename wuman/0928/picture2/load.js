
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
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745403994&di=cc60180473eb29a74b8de46f761bf960&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170519%2F28d4efe996d7413aa1ea84a196fc400c.png',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437111&di=595270d1083e453ba1150bc34ca9a2f2&imgtype=0&src=http%3A%2F%2Fnpic7.edushi.com%2Fcn%2Fzixun%2Fzh-chs%2F2017-04%2F20%2F3907158-3772d15512.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437111&di=873178c30ed0e0b83870f037d0acd729&imgtype=0&src=http%3A%2F%2Fwww.5djiaren.com%2Fuploads%2F2017-05%2F08-173554_342.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437111&di=446da5e1bbccdc4c91176f2635512fc5&imgtype=0&src=http%3A%2F%2Fwww.chinairn.com%2Feditor%2F..%2FUserFiles%2Fimage%2F20170508%2F20170508143110_5529.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437110&di=0305c9c0ac6edbf967027837c0491396&imgtype=0&src=http%3A%2F%2Fimage.uczzd.cn%2F8156508052252237594.jpeg%3Fid%3D0%26from%3Dexport',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437109&di=a6502f57dc65f892746d8a8c1284ccda&imgtype=0&src=http%3A%2F%2Fwww.guangyuanol.cn%2Fuploads%2Fallimg%2F170507%2F1306435620-1.png',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437109&di=6a557849195ee8567f86fd4a9fbf9bfd&imgtype=0&src=http%3A%2F%2Fent.gog.cn%2Fpic%2F003%2F023%2F808%2F00302380868_7e1b9ba3.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437109&di=106d6c999098c882199fed9d347a6d5a&imgtype=0&src=http%3A%2F%2Fpic.wehefei.com%2F0%2F02%2F80%2F39%2F2803936_153413.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437108&di=7379285be367068e81ea5b3eae6a5bf7&imgtype=0&src=http%3A%2F%2Fimg1.utuku.china.com%2F640x0%2Fnews%2F20170519%2F91f1533d-9693-4185-9d54-fc7de31bc077.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437108&di=d9cec3b68b73c4f72d3b5236bd162c71&imgtype=0&src=http%3A%2F%2Fnpic7.edushi.com%2Fcn%2Fzixun%2Fzh-chs%2F2017-05%2F06%2F3929497-0602380380.png',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437107&di=fc7f2a35a8d85bfd37c3f7286de706e3&imgtype=0&src=http%3A%2F%2Fupload.taihainet.com%2F2017%2F0509%2F1494286188730.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437103&di=acd4027a669d64d74454461c4b3de7bf&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20170425%2F36%2F13590335529244500064.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437103&di=4e96544ce1a0c8301cd4f379ad4afec3&imgtype=0&src=http%3A%2F%2Fupload.cankaoxiaoxi.com%2Ftemp%2F2017%2F0516%2F1494936410729.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437101&di=ede42376ab00530b6505280573615171&imgtype=0&src=http%3A%2F%2Fwww.5djiaren.com%2Fuploads%2F2017-05%2F08-173554_239.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506745437100&di=54339a2b55570bd7a46e3900bed67da5&imgtype=0&src=http%3A%2F%2Fimg6.nanrenwo.net%2Fuploads%2F170428%2F8122-1F42P9440QO_8b5ec5_250_165.jpg'
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
    if (array.length === 15) {
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
