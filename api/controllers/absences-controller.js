var db = require('../helpers/db');
var moment = require('moment');

exports.absencesPOST = function(args, res, next) {
  var email_address = args.body.email_address;
  var days_off = args.body.days_off;

  var absences = [];
  days_off.forEach(function(item){
      absences.push(
        {
          email_address : email_address,
          day_off: item
        }
      );
  });

  db.Absences.bulkCreate(absences).then(function(data) {
    res.status(200).send({ info: `${days_off.length} days off added for: ${email_address}` });
  }).catch(function(err) {
    res.status(500).send({ error: err });
	});
};

exports.absencesGET = function(args, res, next) {
  var today = moment(new Date()).format("DD/MM/YYYY");
  db.Absences.findAll({
    where: {day_off: today},
    attributes: ['email_address', 'day_off']
  })
    .then (function(data){
      if (data === null)
        res.status(404).send({ info: [] });
        else
        res.status(200).send(data);
      });
};
