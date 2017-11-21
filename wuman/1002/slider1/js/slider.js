class Slider {
    constructor (option) {
        this.ele = document.getElementById(option.ele);
        this.index = option.index || 0;
        this.pagination = option.pagination || false;
        this.play = option.autoplay || false;
        this.speed = option.speed || 1000;
        this.mouseEvent = option.mouseEvent;
        this.clickEvent = option.clickEvent;
        this.imgs = null;
        this.timer = null;
        this.init();
    }
    async init () {
        await this.creatImgs();
        this.pagination && this.paginations();
        this.play && this.autoplay();
        this.mouseEvent && this.mouseEvents();
        this.clickEvent && this.clickEvents();
    }
    autoplay () {
        let that = this;
        this.timer = setInterval(function () {
            that.index++;
            if (that.index > that.imgs.length - 1) {
                that.index = 0;
            }
            that.changeActive();
        }, this.speed);
    }
    async creatImgs () {
        let that = this;
        await this.ajax('http://localhost:8001').then(function (result) {
            that.imgs = JSON.parse(result);
        });
        return new Promise((resolve, reject) => {
            if (that.imgs) {
                let str = '<ul>';
                for (var i = 0; i < this.imgs.length; i++) {
                    str += `<li><img src="${this.imgs[i]}"></li>`;
                }
                str += `</ul><div class="leftBtn btn"><</div>
                <div class="rightBtn btn">></div>`;
                this.ele.innerHTML = str;
                let uls = that.ele.getElementsByTagName('ul')[0];
                uls.style.marginLeft = that.index * -980 + 'px';
                resolve();
            } else {
                reject(new Error());
            }
        });
    }
    changeActive () {
        let uls = this.ele.getElementsByTagName('ul')[0];
        if (this.pagination) {
            let olis = this.ele.getElementsByTagName('ol')[0].getElementsByTagName('li');
            for (var i = 0; i < olis.length; i++) {
                olis[i].className = '';
            };
            olis[this.index].className = 'active';
        }
        uls.style.marginLeft = this.index * -980 + 'px';
    }
    paginations () {
        let str = '<ol>';
        console.log(this.imgs);
        for (var i = 0; i < this.imgs.length; i++) {
            str += `<li>${i + 1}</li>`;
        }
        str += '</ol>';
        this.ele.innerHTML += str;
        let olis = this.ele.getElementsByTagName('ol')[0].getElementsByTagName('li');
        olis[this.index].className = 'active';
    }
    clickEvents () {
        let that = this;
        let leftBtn = this.ele.querySelector('.leftBtn');
        let rightBtn = this.ele.querySelector('.rightBtn');
        leftBtn.onclick = function () {
            that.index--;
            if (that.index < 0) {
                that.index = that.imgs.length - 1;
            }
            that.changeActive();
        };
        rightBtn.onclick = function () {
            that.index++;
            if (that.index > that.imgs.length - 1) {
                that.index = 0;
            }
            that.changeActive();
        };
        if (this.pagination) {
            let olis = this.ele.getElementsByTagName('ol')[0].getElementsByTagName('li');
            for (let i = 0; i < olis.length; i++) {
                olis[i].onclick = function () {
                    that.index = i;
                    that.changeActive();
                };
            }
        }
    }
    mouseEvents () {
        let that = this;
        let leftBtn = this.ele.querySelector('.leftBtn');
        let rightBtn = this.ele.querySelector('.rightBtn');
        this.ele.onmouseover = function () {
            clearInterval(that.timer);
            leftBtn.style.display = 'block';
            rightBtn.style.display = 'block';
        };
        this.ele.onmouseout = function () {
            if (that.play) {
                that.autoplay();
            }
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        };
    }
    ajax (url) {
        var promise = new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = handler;
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send();

            function handler() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            }
        });
        return promise;
    }
}
console.log(Slider);
