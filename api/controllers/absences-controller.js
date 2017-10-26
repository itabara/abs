var db = require('../helpers/db');
var moment = require('moment');

exports.absencesPOST = function(args, res, next) {
  var email_address = args.body.email_address;
  var days_off = args.body.days_off;

  var response = { message: `${days_off.length} days off added for: ${email_address}` };
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};

exports.absencesGET = function(args, res, next) {
  var today = moment(new Date()).format("DD/MM/YYYY");
  db.Absences.findAll({where: {day_off: today}})
    .then (function(data){
      if (data === null)
        res.status(404).send({ info: [] });
        else
        res.status(200).send(data);
      });
};
