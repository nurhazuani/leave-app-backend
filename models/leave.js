module.exports = (sequelize, DataTypes) => {
	const Leave = sequelize.define('Leave', {
        title: DataTypes.STRING,
        desc: DataTypes.STRING,
        typeLeave: DataTypes.STRING,
        status: DataTypes.STRING,
        datefrom: DataTypes.DATEONLY,
        dateto: DataTypes.DATEONLY
	});

    Leave.associate = function(models) {
        Leave.belongsTo(models.User)
    }

	return Leave;
};