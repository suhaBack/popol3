// 리뷰

const Sequelize = require("sequelize");

// review_id || user_id || lodging_id || rating || content

class Review extends Sequelize.Model {
  static initiate(sequelize) {
    Review.init({
      review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        comment: "리뷰(review) 식별자 ID (기본키)",
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User', // User 모델 참조
          key: 'user_id',  // 참조하는 키
        },
        comment: "사용자(user) 식별자 ID",
      },
      lodging_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lodging', // Lodging 모델 참조
          key: 'lodging_id',  // 참조하는 키
        },
        comment: "숙박시설(lodging) 식별자 ID",
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
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [3, 1000],
            msg: "내용은 3자 이상 1000자 이하로 작성하여야 합니다."
          }
        },
        comment: "리뷰 내용",
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Review',
      tableName: 'reviews',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};

module.exports = Review;