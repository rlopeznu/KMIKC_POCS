'use strict'

var moongose = require('mongoose');
flightInfo = moongose.model('flight_records');

exports.getReports = (req, res) => {
    flightInfo.find({}, function(err, response){
        if(err) res.send(err);
        res.json(response);
    })
};

exports.addReports = (req, res) => {
    var data = new flightInfo(req.body);
    data.save((err, response) => {
        if(err) res.send(err);
        res.json(response);
    })
}

exports.getReportByTitle = (req, res) => {
    let title = req.params.title;
    flightInfo.findOne({title: title}, (err, data)=> {
        if(err) res.send(err);
        res.json(data)    
    }) 
}

exports.updateReportByTitle = (req, res) => {
    let title = req.params.title;
    flightInfo.findOneAndUpdate({title: title}, req.body, {new: true}, (err, data)=> {
        if(err) res.send(err);
        res.json(data)   
    })
}

exports.deleteReportByTitle = (req, res) => {
    let title = req.params.title;
    flightInfo.deleteOne({title: title}, (err, data)=> {
        console.log(title)
        if(err) res.send(err);
        res.json({ message: 'Record deleted' }); 
    })
}