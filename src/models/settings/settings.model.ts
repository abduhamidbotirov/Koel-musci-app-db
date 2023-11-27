// settings.model.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';

const Settings = sequelize.define('settings', {
  key: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Settings;
