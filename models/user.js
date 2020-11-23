// const { Sequelize } = require(".");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		uid:{
			type: DataTypes.STRING,
			autoIncrement: false,
			primaryKey: true,
			required: true,
		},
		uname: {
			type: DataTypes.STRING,
		},
        email:{
			type: DataTypes.STRING,
		},
		phone: {
			type: DataTypes.STRING
		},
		role: {
			type: DataTypes.STRING
		},
		password:{
			type: DataTypes.STRING,
			required: true,
			min:6,
		}
	// },
			// {
			// 	freezeTableName: true,
			// 	instanceMethods: {
			// 		generateHash(password) {
			// 			return bcrypt.hash(password, bcrypt.genSaltSync(8));
			// 		},
			// 		validPassword(password) {
			// 			return bcrypt.compare(password, this.password);
			// 		}
			// 	}
	});

	User.associate = function(models) {
		User.hasMany(models.Leave)
	}

	return User;
};