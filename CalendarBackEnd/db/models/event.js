const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
	title: Sequelize.STRING,
	date: Sequelize.DATE,
	startTime: Sequelize.STRING,
	endTime: Sequelize.STRING,
	description: Sequelize.TEXT
});

module.exports = Event;