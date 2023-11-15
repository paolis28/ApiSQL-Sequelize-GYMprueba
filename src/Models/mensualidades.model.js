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
    fechaPago: {
        type: DataTypes.DATE,
        required: true
    },
    estatus:{
        type:DataTypes.STRING,
        required: true
    }
},
{
    timestamps: false
});

// La que funcione
//opción 1
Mensualidades.hasOne(Clientes,{          
    foreignKey:"id_cliente",
    sourceKey:"id_cliente",
});
Mensualidades.belongsTo(Clientes, {foreinKey:"id_cliente", targetId: "id_cliente"});

//Opción 2
// Mensualidades.hasOne(Clientes);