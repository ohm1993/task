import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure username is unique
    validate: {
      notEmpty: true, // Ensure username is not empty
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensure password is not empty
      len: [6, 255], // Ensure password length is between 6 and 255 characters
    }
  }
});

export default User;
