module.exports = (sequelize, DataTypes) => {
	const Profile = sequelize.define('Profile', {
        phone: DataTypes.INTEGER,
        addr: DataTypes.STRING,
	});

//         Profile.associate = function(models) {
//         Profile.belongsTo(models.User)
        
//     }

	return Profile;
};