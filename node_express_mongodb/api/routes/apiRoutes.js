'use strict'
module.exports = function(app) {
    var fligthInfoController = require('../controllers/fligthInfoController');

    app.route('/report')
        .get(fligthInfoController.getReports)
        .post(fligthInfoController.addReports);
    
    app.route('/report/:title')
        .get(fligthInfoController.getReportByTitle)
        .put(fligthInfoController.updateReportByTitle)
        .delete(fligthInfoController.deleteReportByTitle);
}
