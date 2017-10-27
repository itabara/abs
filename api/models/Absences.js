module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Absences', {
    email_address: DataTypes.STRING,
		day_off : DataTypes.STRING
  },
  {
    indexes: [
        {
            unique: true,
            fields: ['email_address', 'day_off']
        }
    ]
  }, {
    underscored: true  
  });
};
