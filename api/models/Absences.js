module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Absences', {
    email_address: DataTypes.STRING,
		day_off : DataTypes.STRING
  }, {
    instanceMethods: {
			getAbsences: function() {
        // how to implement this method ?
      }
    }
  });
};
