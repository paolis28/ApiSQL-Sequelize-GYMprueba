import { Mensualidades } from "../Models/mensualidades.model.js";
import { Op } from 'sequelize';

export const conseguirMensualidades = async (req,res) =>{
    try{
        const mensualidad = await Mensualidades.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body:mensualidad
        }) 
        res.json(mensualidad) 
    }catch(error){
        res.status(500).json({error: "Error al buscar las mensualidad"});
        console.log(error);
    }
}

export const conseguirUnicaMensualidad = async (req,res)=>{
    const { id, fecha } = req.body;
    const estatus = "Adeudo";

    try {
        const respuesta = await Mensualidades.findOne({
            where:{
                id_cliente: id,
                fechaPago: {
                    [Op.lte]: fecha
                },
                estatus: estatus
            }
        });
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar la mensualidad" });
        console.log(error);
    }
}

export const crearMensualidad = async (req,res)=>{
    const { id_cliente, fechaPago, estatus}=req.body;

    try{
        if(!id_cliente || !fechaPago || !estatus){
            return res.status(400).json({error:'Todos los campos son obligatorios'})
        }

    const newMensualidades = new Mensualidades({
        id_cliente:id_cliente,
        fechaPago: fechaPago,
        estatus: estatus
    });

    await newMensualidades.validate();
    await newMensualidades.save();
    res.json({
        newMensualidades
    })

    }catch(error){
        res.status(500).json({error:"Error al agregar mensualidad"});
        console.log(error);
    }
}

export const modificarMensualidad = async (req,res)=>{
    const {id_cliente,id_mensualidades}=req.body;

    try{
        const id=req.params.id;
        const dataMensualidad=res.body;
        const updateMensualidad=await Mensualidades.update({
            id_mensualidades:id_mensualidades,
            id_cliente:id_cliente
        },{
            where:{
                id_mensualidades:id
            }
        })
        res.send("Mensualidad Modificado")
        res.json(updateMensualidad);
    }catch(error){
        res.status(500).json({error: "Error al modificar mensualidad"});
        console.log(error);
    }
}

export const eliminarMensualidad = async (req,res) =>{
    const id=req.body.id_mensualidades;

    try{
        const mensualidades = await Mensualidades.destroy({
            where:{
                id_mensualidades:id
            }
        });
        res.send("Mensualidad Eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar la mensualidad"});
        console.log(error);
    }
}