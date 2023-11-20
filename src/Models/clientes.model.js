import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";

export const Clientes = sequelize.define('Clientes', {
    id_cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        required: true
    },
    apellidoPaterno: {
        type: DataTypes.STRING(50),
        required: true
    },
    apellidoMaterno: {
        type: DataTypes.STRING(50),
        required: true
    },
    numeroCelular: {
        type: DataTypes.STRING(10),
        required: true
    },
    fechaInscripcion: {
        type: DataTypes.DATEONLY,
        required: true
    }
},
{
    timestamps: false,
});