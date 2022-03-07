const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const todo = db.define(
	'todos',
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING(255),
		},
		status: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'pending',
		},
	},
	{ timestamps: false }
);

module.exports = { todo };