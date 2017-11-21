var express = require('express');
var bodyParse = require('body-parser');
var app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static('./website/public/'));
require('./website/config/routers.js')(app);
app.listen(7000);
