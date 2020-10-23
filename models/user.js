// const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		uid:{
			type: DataTypes.STRING,
			autoIncrement: false,
			primaryKey: true
		},
		uname: {
			type: DataTypes.STRING,
		},
        email:{
			type: DataTypes.STRING
		},
        password:{
			type: DataTypes.STRING
		},
		
        role: {
			type: DataTypes.STRING
		}
	});

	// User.associate = function(models) {
	// 	User.hasMany(models.Comments)
	// }
	User.associate = function(models) {
		User.hasMany(models.Leave)
	}
	// User.associate = function(models) {
	// 	User.hasMany(models.Profile)
	// }

	return User;
};