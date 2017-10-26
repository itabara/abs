var Sequelize = require('sequelize');
var config    = require('config').database;

// initialize database connection
var sequelize = new Sequelize(
  config.dbName,
  config.username,
  config.password,
  config.options
);

var db = {};

// load models
var models = [
  'Enroll',
  'Absences'

];

models.forEach(function(model) {
  var model = sequelize.import(__dirname + '/../models/' + model);
  db[model.name] = model;
});

// Applying Enroll & Absence Table to database
console.log('Connecting to database...');

sequelize.sync({alter:false}).then(() => {
  console.log('Database synced!');
  console.log('Disconnecting...');
}).catch(e => {
  console.log(e);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
