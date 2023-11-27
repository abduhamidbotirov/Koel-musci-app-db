import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../db/localSequelize.js";

const PasswordResets = sequelize.define('passwordresets', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

export default PasswordResets;