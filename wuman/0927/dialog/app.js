var data = {
  'title':'标题',
  'content':'你是否删除',
  'btns':['确定', '取消']
};
var express = require('express');
var	app = express();
app.use(express.static(__dirname + '/static'));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/getData', function (req, res) {
  res.end(JSON.stringify(data));
});
app.listen(3000);