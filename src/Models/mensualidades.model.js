import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";
import { Clientes } from "./clientes.model.js"; 

export const Mensualidades = sequelize.define('Mensualidades', {
    id_mensualidades: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: Clientes,
            key: 'id_cliente'
        }
    },
    proximoPago: {
        type: DataTypes.DATE,
        required: true
    }
},
{
    timestamps: false
});