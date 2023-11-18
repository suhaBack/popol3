// 예약

const Sequelize = require("sequelize");

// booking_id || user_id || room_id || start_date || end_date
// total_price || status || special_requests

class Booking extends Sequelize.Model {
  static initiate(sequelize) {
    Booking.init({
      booking_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        comment: "예약(booking) 식별자 ID (기본키)",
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "사용자(user) 식별자 ID",
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "객실(room) 식별자 ID",
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: {
            msg: "유효한 시작 날짜를 입력해야 합니다."
          }
        },
        comment: "숙박 시작일",
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: {
            msg: "유효한 종료 날짜를 입력해야 합니다."
          }
        },
        comment: "숙박 종료일",
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: {
            args: 0.00,
            msg: "총 가격은 0 이상이어야 합니다."
          }
        },
        comment: "총 가격",
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          isIn: {
            args: [['예약중', '완료', '취소']],
            msg: "유효하지 않은 상태입니다."
          }
        },
        comment: "상태",
      },
      special_requests: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [0, 1000],
            msg: "특별 요청은 1000자 이하로 작성해야 합니다."
          }
        },
        comment: "특별 요청",
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Booking',
      tableName: 'bookings',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Booking.belongsTo(db.User, { foreignKey: 'User_ID', sourceKey: 'id' });
    db.Booking.belongsTo(db.Room, { foreignKey: 'Room_ID', sourceKey: 'id' });
  }

};

module.exports = Booking;