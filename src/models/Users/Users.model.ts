import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../db/localSequelize.js';
import { UserAttributes, UserCreationAttributes } from './Users.interface.js';

const Users = sequelize.define<Model<UserAttributes, UserCreationAttributes>>(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        preferences: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        remember_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: false,
    }
);

export default Users;
