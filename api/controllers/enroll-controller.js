var db = require('../helpers/db');

exports.enrollPOST = function(args, res, next) {
  var email_address = args.body.email_address;
  db.Enroll.create({
    email_address : email_address
  }).then(function(data) {
    res.status(200).send({ info: `Your email ${email_address} has been enrolled to the system. Enjoy!` });
  }).catch(function(err) {
    res.status(500).send({ error: err });
	});
};

exports.enrollDELETE = function(args, res, next) {
  var email_address = args.body.email_address;
  db.Enroll.find({where: {email_address: email_address}}).then(function(data){
    if (data == null)
      res.status(404).send({ info: `Your email ${email_address} has not been found in the system.` });
    else
      data.destroy({}).then(function(data) {
        res.status(204).send({ info: `Your email ${email_address} has been removed from the system. That's sad!` });
    }).catch(function(err) {
      res.status(500).send({ error: err });
  	});
  });
};
