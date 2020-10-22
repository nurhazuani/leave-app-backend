module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		uname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
	});

	// User.associate = function(models) {
	// 	User.hasMany(models.Comments)
	// }
	User.associate = function(models) {
		User.hasMany(models.Leave)
	}

	return User;
};