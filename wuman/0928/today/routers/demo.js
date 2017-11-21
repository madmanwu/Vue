var express = require('express');
var router = express.Router();

/* var obj = [{
    'title': 'Title',
    'con': 'Content',
    'open': '确认',
    'close': '取消'
}]; */
/* router.get('/', function (req, res) {
    res.render('page1', {data: obj});
}); */
router.get('/', function (req, res) {
    res.render('page1');
});
module.exports = router;
