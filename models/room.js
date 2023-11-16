// 객실

const Sequelize = require("sequelize");

// room_id || lodging_id || type || price 
// capacity || description

class Room extends Sequelize.Model {
  static initiate(sequelize) {
    Room.init({
      room_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        comment: "객실(room) 식별자 ID (기본키)",
      },
      lodging_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lodgings', // Lodgings 모델 참조
          key: 'lodging_id',  // 참조하는 키
        },
        comment: "숙박업소 식별자",
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          len: {
            args: [1, 100],
            msg: "객실 유형은 1자 이상 100자 이하이어야 합니다."
          }
        },
        comment: "객실 유형",
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: {
            args: 0,
            msg: "객실 가격은 0원 이상이여야 합니다."
          }
        },
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
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [5, 1000],
            msg: "설명은 최소 5글자 이상 1000글자 이하로 작성해야 합니다."
          }
        },
        comment: "객실 설명",
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
};

module.exports = Room;