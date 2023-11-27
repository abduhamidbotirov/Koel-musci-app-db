// songs.model.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';

const Songs = sequelize.define('songs', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  album_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  artist_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  length: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  track: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  disc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lyrics: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  path: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  mtime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Songs;
