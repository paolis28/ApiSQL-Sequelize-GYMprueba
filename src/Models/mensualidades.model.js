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

// La que funcione

// Mensualidades.hasOne(Clientes,{          Opcion 1
//     foreinkey:"id_cliente",
//     sourceKey:"id_cliente",
// });
// Mensualidades.belongsTo(Clientes, {foreinkey:"id_cliente", targetId: "id_cliente"});


// Mensualidades.hasOne(Clientes); Opcion 2