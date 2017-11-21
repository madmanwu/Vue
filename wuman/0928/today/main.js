var express = require('express');
var app = express();
var ejs = require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
	res.render('page1');
});

app.listen(8888);
// require('./config')(app);
