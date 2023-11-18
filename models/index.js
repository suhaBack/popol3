const Sequelize = require("sequelize");
const User = require("./user");
const Lodging = require("./lodging");
const Room = require("./room");
const Booking = require("./booking");
const Review = require("./review");

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Lodging = Lodging;
db.Room = Room;
db.Booking = Booking;
db.Review = Review;

User.initiate(sequelize);
Lodging.initiate(sequelize);
Review.initiate(sequelize);
Room.initiate(sequelize);
Booking.initiate(sequelize);

User.associate(db);
Lodging.associate(db);
Room.associate(db);
Booking.associate(db);
Review.associate(db);

module.exports = db;