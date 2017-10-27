var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	var Enroll = sequelize.define('Enroll', {
		email_address: {
			type: Sequelize.STRING,
			unique: true
		}
	}, {
		underscored: true
	});
	return Enroll;
};
