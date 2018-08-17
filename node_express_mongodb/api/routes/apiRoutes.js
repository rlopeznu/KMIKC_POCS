'use strict'
module.exports = function(app) {
    var fligthInfoController = require('../controllers/fligthInfoController');
    var bigQueryController = require('../controllers/bigQuery');

    app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.route('/report')
        .get(fligthInfoController.getReports)
        .post(fligthInfoController.addReports);

    app.route('/report/:title')
        .get(fligthInfoController.getReportByTitle)
        .put(fligthInfoController.updateReportByTitle)
        .delete(fligthInfoController.deleteReportByTitle);

    app.route('/bigquerytest')
        .get(bigQueryController.queryBigQuery);
}
