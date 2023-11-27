import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../db/localSequelize.js";

const Interactions = sequelize.define('interactions', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    song_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    liked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    play_count: {
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

export default Interactions;