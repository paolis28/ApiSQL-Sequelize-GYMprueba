import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";

export const Clientes = sequelize.define('Clientes', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        required: true
    },
    apellidoPaterno: {
        type: DataTypes.STRING,
        required: true
    },
    apellidoMaterno: {
        type: DataTypes.STRING,
        required: true
    },
    numeroCelular: {
        type: DataTypes.STRING,
        required: true
    },
    fechaInscripcion: {
        type: DataTypes.DATE,
        required: true
    }
},
{
    timestamps: false,

});