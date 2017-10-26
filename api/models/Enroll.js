var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Enroll = sequelize.define('Enroll', {
    email_address: { type: Sequelize.STRING, unique: true }
  }, {
    underscored: true,
    instanceMethods: {
			add: function(onSuccess, onError) {
				var email_address = this.email_address;
				this.build({email_address: email_address}).save().success(onSuccess).error(onError);
			},
			removeById: function(email_address, onSuccess, onError) {
				this.destroy({
					where: {
						email_address: email_address
					}
				}).success(onSuccess).error(onError);
			}
    }
  });
  return Enroll;
};
