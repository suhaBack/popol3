// 숙박 시설

const Sequelize = require("sequelize");

// lodging_id || name || location || description || price_range || type
// check_in_time || check_out_time || rating || review_count

class Lodging extends Sequelize.Model {
  static initiate(sequelize) {
    Lodging.init({
      lodging_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
      location_info: {
        type: Sequelize.STRING(500),
        allowNull: true,
        comment: "주소(위도,경도)",
      },
      imageURL: {
        type: Sequelize.STRING(500),
        allowNull: false,
        comment: "이미지 경로",
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
      type: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        validate: {
          isIn: {
            args: [['0', '1', '2', '3', '4']], // 허용되는 유형
            msg: "유효하지 않은 유형입니다."
          }
        },
        comment: "0:모텔, 1:호텔/리조트, 2:펜션, 3:게스트하우스, 4:캠핑/글램핑 ",
      },
      
      rating: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true,
        validate: {
          len:{
            args:[0.00,5.00],
            msg: "평점은 0에서 5사이여야 합니다"
          }
        },
        comment: "평점",
      },
      review_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          len: {
            args: [0],
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
  static associate(db) {
    db.Lodging.hasMany(db.Room, { foreignKey: 'lodging_id', sourceKey: 'lodging_id'});
    db.Lodging.hasMany(db.Review, { foreignKey: 'lodging_id', sourceKey: 'lodging_id'});
  }
};

module.exports = Lodging;