// 숙박 시설

const Sequelize = require("sequelize");

// lodging_id || name || location || description || price_range || type
// check_in_time || check_out_time || rating || review_count

class Lodgings extends Sequelize.Model {
  static initiate(sequelize) {
    Lodgings.init({
      lodging_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        comment: "숙박(lodging) 식별자 ID (기본키)",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: "이름은 2자 이상이어야 합니다."
          }
        },
        comment: "이름",
      },
      location: {
        type: Sequelize.STRING(500),
        allowNull: false,
        validate: {
          min: {
            args: 5,
            msg: "주소는 5자 이상이여야 합니다."
          }
        },
        comment: "주소(위치)",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          min: {
            args: 5,
            msg: "설명은 최소 5글자 이상 작성하여야합니다."
          }
        },
        comment: "숙박시설 설명",
      },
      price_range: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          is: {
            args: /^\d+-\d+$/,
            msg: "가격 범위 형식이 유효하지 않습니다."
          }
        },
        comment: "가격 범위",
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          isIn: {
            args: [['모텔', '호텔/리조트', '펜션', '게스트하우스', '캠핑/글램핑', '해외여행']], // 허용되는 유형
            msg: "유효하지 않은 유형입니다."
          }
        },
        comment: "유형",
      },
      check_in_time: {
        type: Sequelize.TIME,
        allowNull: false,
        comment: "체크인 시간",
      },
      check_out_time: {
        type: Sequelize.TIME,
        allowNull: false,
        comment: "체크아웃 시간",
      },
      rating: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: false,
        validate: {
          min: { args: 0.00, msg: "평점은 0점 이상이어야 합니다." },
          max: { args: 5.00, msg: "평점은 5점 이하이어야 합니다." }
        },
        comment: "평점",
      },
      review_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 0,
            mag: "음수가 될 수 없습니다."
          }
        },
        comment: "리뷰 수",
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Lodging',
      tableName: 'lodgings',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};

module.exports = Lodgings;