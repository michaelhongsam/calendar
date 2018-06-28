const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
	title: Sequelize.STRING,
	year: Sequelize.INTEGER,
	month: Sequelize.INTEGER,
	day: Sequelize.INTEGER,
	startTime: Sequelize.STRING,
	endTime: Sequelize.STRING,
	description: Sequelize.TEXT
});

// const EventTwo = db.define('event-two', {
// 	startTime: Sequelize.DATE,
// 	endTime: Sequelize.DATE,
// 	title: Sequelize.STRING,
// 	description: Sequelize.TEXT
// })

module.exports = Event