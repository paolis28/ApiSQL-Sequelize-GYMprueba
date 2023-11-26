import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";

export const Administradores = sequelize.define('Administradores', {
    id_administrador: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    usuario: {
        type: DataTypes.STRING(50),
        required: true,
    },
    password: {
        type: DataTypes.STRING(200),
        required: true,
    }
},{
    timestamps: false
})