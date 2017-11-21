class Dialog {
    constructor (obj) {
        this.obj = obj;
        this.contStr = '';
        this.btnStr = '';
        this.back = document.createElement('div');
        this.body = document.querySelector('body');
        this.init(obj);
    }
    init (obj) {
        this.initDom (obj);
        this.initEvent (obj);
    }
    initDom (obj) {
        let btns = obj.btns;
        const that = this;
        btns.map( (v, k) => {
            that.btnStr +=  `
                <button>${v}</button>
            `
        });
        this.contStr += `
            <div class='cont-box'>
                <div class='title'>${obj.title}</div>
                <div>${obj.content}</div>
                <div class='btn-box'>${this.btnStr}</div>
            </div>
        `;
        this.back.className = 'dialog';
        this.back.innerHTML = this.contStr;
        this.body.appendChild(this.back);
    }
    initEvent (obj) {
        this.open(obj);
        this.close ();
        this.destroy ();
    }
    open (obj) {
        let btn = document.querySelector('.click-btn');
        let back = document.querySelector('.dialog');
        let that = this;
        btn.onclick = function () {
            if (back) {
                back.style = 'opacity:1;z-index:99;';
            } else {
                that.initDom(obj);
            }
        }
    }
    close () {
        let dialog = document.getElementsByClassName('dialog')[0]
        let btn = dialog.getElementsByTagName('button')[1];
        btn.onclick = function () {
            dialog.style = 'opacity:0;z-index:-99;'
        }
    }
    destroy () {
        let dialog = document.getElementsByClassName('dialog')[0]
        let btn = document.getElementsByTagName('button');
        let thats = this;
        btn[1].onclick = function () {
            thats.body.removeChild(dialog);
            Array.from(btn).map(v => {
                v.onclick = null;
            })
        }
    }
    //constructor (obj) {
    //    this.titles = obj.title;
    //    this.contents = obj.content;
    //    this.temp = document.getElementsByClassName('dialog')[0];
    //    this.btns = obj.btns;
    //    this.box = document.getElementsByTagName('body')[0];
    //    this.init();
    //}
    //init () {
    //    if (!this.temp) {
    //        this.showDia();
    //    } else {
    //        this.temp.style = 'opacity:1;z-index:99;';
    //    }
    //}
    //open () {
    //    this.back.style = 'opacity:0;z-index:-99;';
    //}
    //close () {
    //    this.title = '';
    //    this.content = '';
    //    this.temp = null;
    //    this.btns = null;
    //    this.box.removeChild(this.back);
    //    this.box = null;
    //}
    //showDia () {
    //    let that = this;
    //    this.back = document.createElement('div');
    //    this.back.className = 'dialog';
    //    this.box.insertBefore(this.back, this.btn);
    //    this.contBox = document.createElement('div');
    //    this.contBox.className = 'cont-box';
    //    this.back.appendChild(this.contBox);
    //    this.title = document.createElement('div');
    //    this.title.className = 'title';
    //    this.contBox.appendChild(this.title);
    //    this.title.innerText = this.titles;
    //    this.content = document.createElement('div');
    //    this.content.className = 'content';
    //    this.contBox.appendChild(this.content);
    //    this.content.innerText = this.contents;
    //    this.btnBox = document.createElement('div');
    //    this.btnBox.className = 'btn-box';
    //    this.contBox.appendChild(this.btnBox);
    //    this.btns.forEach(v => {
    //        if (v === '确定') {
    //            that.sure = document.createElement('button');
    //            that.sure.className = 'sure';
    //            that.btnBox.appendChild(that.sure);
    //            that.sure.innerText = v;
    //            that.sure.onclick = function () {
    //                that.open();
    //            };
    //        } else {
    //            that.cancel = document.createElement('button');
    //            that.cancel.className = 'cancel';
    //            that.btnBox.appendChild(that.cancel);
    //            that.cancel.innerText = v;
    //            that.cancel.onclick = function () {
    //                that.close();
    //            };
    //        }
    //    })
    //}
}