const moment = require("moment");

const requestNotify = (req, res, next) => {
    console.log(`[${moment().format('MMMM Do YYYY, hh:mm:ss a')}]`, req.method, '"' + req.url + '"');
    next();
}

module.exports = { requestNotify };