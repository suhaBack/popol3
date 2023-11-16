const Sequelize = require("sequelize");
const User = require('./user');
const Ticket = require('./ticket');
const Border = require('./border');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Lodgings = Lodgings;
db.Rooms = Rooms; 
db.Bookings = Bookings; 
db.Reviews = Reviews; 

User.initiate(sequelize);
Ticket.initiate(sequelize); 
Border.initiate(sequelize);

// User.associations(db);
// Ticket.associations(db);
// Border.associations(db);

module.exports = db;