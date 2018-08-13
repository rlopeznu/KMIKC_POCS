var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
  mongoose = require('mongoose')
  flightInfo = require('./api/models/fligthInfo') //modelo
  bodyParser = require('body-parser');

//conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Playground')

//bodyParser es un middleware que parsea los incoming request a JSon antes de enviarlo a los handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importar Rutas
var routes = require('./api/routes/apiRoutes');
routes(app);

//si entra a una url rara
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port); 

console.log('todo list RESTful API server started on: ' + port);