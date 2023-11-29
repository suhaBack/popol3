// 객실

const Sequelize = require("sequelize");

// room_id || lodging_id || type
//  price  || capacity

class Room extends Sequelize.Model {
  static initiate(sequelize) {
    Room.init({
      room_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement:true,
        comment: "객실(room) 식별자 ID (기본키)",
      },
      lodging_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "숙박업소(lodging) 식별자 ID",
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "객실 유형",
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "객실 가격",
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: {
            args: [1, 30],
            msg: "객실 수용인원은 최소 1명 이상, 최대 30명 이하여야 합니다."
          }
        },
        comment: "수용 인원",
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Room',
      tableName: 'rooms',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Room.belongsTo(db.Lodging, { foreignKey: 'lodging_id', targetKey: 'lodging_id' });
    db.Room.hasMany(db.Booking, { foreignKey: 'room_id', sourceKey: 'room_id' });
  }
  
};

module.exports = Room;