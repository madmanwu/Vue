var express = require('express'); // node.js的应用框架
var bodyParse = require('body-parser'); // express的中间件，用于解析客户端请求的body中的内容，内部使用JSON编码处理，url编码处理以及对于文件的上传处理
var app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));
app.use(express.static('./websit/public/'));
require('./website/config/routers.js')(app);
app.listen(3000);
