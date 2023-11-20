import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";
import { Clientes } from "./clientes.model.js"; 

export const Mensualidades = sequelize.define('Mensualidades', {
    id_mensualidades: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
            model: Clientes,
            key: 'id_cliente'
        }
    },
    fechaInicio: {
        type: DataTypes.DATEONLY,
        required: true
    },
    fechaPago: {
        type: DataTypes.DATEONLY,
        required: true
    },
    estatus:{
        type:DataTypes.STRING(7),
        required: true
    }
},
{
    timestamps: false
});