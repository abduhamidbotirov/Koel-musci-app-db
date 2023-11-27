// playlistSong.model.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';

const PlaylistSong = sequelize.define('playlistsong', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  playlist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  song_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default PlaylistSong;
