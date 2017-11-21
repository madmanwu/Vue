// 图片异步加载
var content = document.querySelector('.content');
var imgs, imgsH;
var startY, endY, Y;
var i = 1;
var contentH = content.clientHeight; // 整个屏幕的高
LoadImageAsync(['./images/img1.jpg', './images/img2.jpg']).then((res) => {
    res.map((v) => {
        content.appendChild(v);
    });
    imgs = document.querySelectorAll('.content img');
    imgsH = imgs[0].clientHeight;
    // console.log(imgsH);
    content.addEventListener('touchstart', (e) => {
        startY = e.changedTouches[0].clientY;
    });
    content.addEventListener('touchend', (e) => {
        endY = e.changedTouches[0].clientY;
        Y = Math.abs(endY - startY);
        if (Y > imgsH && Y < contentH) {
            i < 9 ? ++i : i = 1;
            LoadImageAsync([`images/img${i+1}.jpg`]).then((result) => {
                content.append(result[0]);
            });
        } else if (Y > contentH) {
            i < 8 ? i += 2 : i = 1;
            LoadImageAsync([`images/img${i}.jpg`,`images/img${i+1}.jpg`]).then((result) => {
                for(var i in result) {
                    content.append(result[i]);
                }
            });
        }
    });
});


function LoadImageAsync (urls) {
    return new Promise((resolve, reject) => {
        let imgs = [];
        let img;
        urls.map((v) => {
            img = new Image();
            imgs.push(img);
        });
        imgs.map((v, k) => {
            v.onload = function () {
                resolve(imgs);
            };
            v.onerror = function () {
                reject(new Error('Could not load image' + urls));
            };
            v.src = urls[k];
        });
    });
}

