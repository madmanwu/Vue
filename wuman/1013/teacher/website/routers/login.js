var express = require('express');
var router = express.Router();
var url = require('url');
var qs = require('queryString');
router.get('/login', function (req, res) {
    var userInfo = qs.parse(url.parse(req.url).query);
    /* var result = {
        code: 0,
        msg: '登录成功',
        username: userInfo.name,
        token: ''
    };
    console.log(req.headers.token);
    if (req.headers.token === '') { 
        result.token = '18346fsahfsag';// token有专门的获取途径   
    } else {
        // if(//token没有失效){
        //     index.html
        // } {
        //    result.token = 'fsafsafsa'
        // }
    } */
    if (userInfo.name === 'zhangsan' && userInfo.pwd === '123456') {
        // res.send(result);
        res.send('sucess');
    };
    // node-fetch
});
module.exports = router;
