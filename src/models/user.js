'use strict';
const { 
  Model 
} = require('sequelize');

const bcrypt = require ('bcrypt');

const { SALT } = require('../config/serverConfig');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100]
        }
      }
    },
    {
      sequelize,       
      modelName: 'User'
    }
  );
User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
});
  return User;
};