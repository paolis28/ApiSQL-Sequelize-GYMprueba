import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize=new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql",
    }
);

