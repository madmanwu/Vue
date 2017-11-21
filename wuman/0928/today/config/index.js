var demo = require('../routers/demo');

module.exports = function (app) {
    app.get('/', demo);
};
