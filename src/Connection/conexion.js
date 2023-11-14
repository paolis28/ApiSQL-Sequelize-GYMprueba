import Sequelize from 'sequelize';

export const sequelize=new Sequelize(
    "proyecto_gimnasio",
    "root",
    "basepaola",

    {
        host:"localhost",
        dialect:"mysql",
    }
);

