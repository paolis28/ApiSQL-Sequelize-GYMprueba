import { DataTypes } from "sequelize";
import { sequelize } from "../Connection/conexion.js";
import {Mensualidades} from "./mensualidades.model.js";
import {Clientes} from "./clientes.model.js";
 
export const Historial = sequelize.define('Historial',{
    id_historial:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    id_mensualidades:{
        type:DataTypes.INTEGER,

        references:{
            model:Mensualidades,
            key:'id_mensualidades',

            onUpdate:'CASCADE',
            onDELETE:'CASCADE'
        }
    },
    id_cliente:{
        type:DataTypes.INTEGER,

        references:{
            model:Clientes,
            key:'id_cliente',

            onUpdate:'CASCADE',
            onDELETE:'CASCADE'
        }
    },
    fechapago:{
        type:DataTypes.DATE
    },
    estatus:{
        type:DataTypes.STRING
    }
},
    {
        timestamps:false
    }
);