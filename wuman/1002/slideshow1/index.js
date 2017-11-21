/* 
 *轮播
 *
 */
class Play {
    constructor (opt) {
        this.index = opt.index;
        this.timer = opt.timer;
        this.btn = opt.btn;
        this.btnIndex = opt.btnIndex;
        this.speed = opt.speed;
        this.oBox = document.getElementById('box');
        this.boxW = this.oBox.offsetWidth;
        this.tabList = '';
        this.picture = '';
        this.left = '';
        this.right = '';
        this.init();
    }
    init () {
        this.btn && this.createBtn();
        this.btnIndex && this.createIndexBtn();
        this.left = document.getElementsByClassName('left')[0];
        this.right = document.getElementsByClassName('right')[0];
        this.picture = document.getElementById('picture');
        this.createImage();
        this.timer && this.autoPlay();
        this.mouseEvent();
        this.clickEvent();
        this.btn && this.nextClick();
        this.btn && this.prevClick();
        this.tabList[this.index].className = 'active';
    }
    createBtn () {
        let btn = '<span class="left">&lt;</span><span class="right">&gt;</span>';
        this.oBox.innerHTML += btn;
    }
    createIndexBtn () {
        let indexBtn = '<ol id="tabList">' +
                            '<li>1</li>' +
                            '<li>2</li>' +
                            '<li>3</li>' +
                            '<li>4</li>' +
                            '<li>5</li>' +
                            '<li>6</li>' +
                            '<li>7</li>' +
                            '<li>8</li>' +
                        '</ol>';
        this.oBox.innerHTML += indexBtn;
        this.tabList = document.getElementById('tabList').getElementsByTagName('li');
    }
    getJSON (url) {
        let promise = new Promise(function (resolve, reject) {
            let client = new XMLHttpRequest();
            client.open('GET', url);
            client.onreadystatechange = handler;
            client.responseType = 'json';
            client.setRequestHeader('Accept', 'application/json');
            client.send();
            function handler() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
        });

        return promise;
    }
    createImage () {
        let that = this;
        return new Promise((resolve, reject) => {
            let html = '';
            that.getJSON('./data/data.json').then(function (result) {
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    html = `<li><img src="${result[i].imgSrc}"></li>`;
                    that.picture.innerHTML += html;
                };
                resolve();
            }, function (error) {
                console.error('出错了', error);
            });
        });
    }
    play () {
        let that = this;
        for (let i = 0; i < this.tabList.length; i++) {
            that.tabList[i].removeAttribute('class');
        }
        this.picture.style.marginLeft = -this.boxW * this.index + 'px';
        (this.btnIndex) && (this.tabList[this.index].className = 'active');
    }
    autoPlay () {
        let that = this;
        this.timer = setInterval(function () {
            that.index++;
            if (that.index <= this.picture.querySelectorAll('li').length - 1) {
                that.play();
            } else {
                that.index = 0;
                that.play();
            }
        }, that.speed);
    }
    mouseEvent () {
        let that = this;
        this.oBox.onmouseover = function () {
            clearInterval(that.timer);
        };
        this.oBox.onmouseout = function () {
            that.autoPlay();
        };
    }
    clickEvent () {
        let that = this;
        for (let i = 0; i < that.tabList.length; i++) {
            that.tabList[i].onclick = function () {
                that.index = i;
                that.play();
            };
        }
    }
    nextClick () {
        let that = this;
        this.right.onclick = function () {
            that.index++;
            if (that.index > that.picture.querySelectorAll('li').length - 1) {
                that.index = 0;
            }
            that.play();
        };
    }
    prevClick () {
        let that = this;
        this.left.onclick = function () {
            that.index--;
            if (that.index < 0) {
                that.index = that.picture.querySelectorAll('li').length - 1;
            }
            that.play();
        };
    }
}
let play = new Play({
    dom: 'box',
    timer: true,
    speed: 1500,
    btnIndex: true,
    btn: true,
    index: 2
});
console.log(play);