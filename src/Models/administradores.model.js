import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";

export const Administradores = sequelize.define('Administradores', {
    usuario: {
        type: DataTypes.STRING(50),
        required: true,
    },
    contraseña: {
        type: DataTypes.STRING(50),
        required: true,
    }
},{
    timestamps: false
})