const Sequelize = require("sequelize");
const User = require("./user");
const Lodging = require("./lodging");
const Review = require("./review");
const Room = require("./room");
const Booking = require("./booking");

const env = process.env.NODE_ENV || 'development';

const config = require('../c\onfig/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Lodging = Lodging;
db.Review = Review;
db.Room = Room;
db.Booking = Booking;

User.initiate(sequelize);
Lodging.initiate(sequelize);
Review.initiate(sequelize);
Room.initiate(sequelize);
Booking.initiate(sequelize);

Booking.associations(db);
Lodging.associations(db);
Room.associations(db);

module.exports = db;
