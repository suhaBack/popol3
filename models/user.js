const Sequelize = require("sequelize");
//id | pwd | CKpwd | email | name | phone
class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        comment: "식별자",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "비밀번호",
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "이름",
      },
      contact_number: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "연락처",
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "주소",
      },
      profile_image: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "프로필 이미지",
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "사용자 역할",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  // static associate(db) {
  //   db.User.hasMany(db.Cart, { foreignKey: 'userId', sourceKey: 'id'});
  //   db.User.hasMany(db.Order, { foreignKey: 'userId', sourceKey: 'id'});
  // }
};

module.exports = User;