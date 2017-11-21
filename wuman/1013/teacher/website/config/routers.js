var login = require('../routers/login.js');
module.exports = function (app) {
    app.get('/login', login);
};
