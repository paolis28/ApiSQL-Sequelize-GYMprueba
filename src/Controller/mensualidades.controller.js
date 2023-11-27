import { Mensualidades } from "../Models/mensualidades.model.js";
import { Op } from 'sequelize';

export const crearMensualidad = async (req,res)=>{
    const { id_cliente, fechaActual, fecha} = req.body;
    const id = parseInt(id_cliente)

    try{
        if(!id_cliente || !fechaActual || !fecha){
            return res.status(400).json({error:'Todos los campos son obligatorios'});
        }
        if(isNaN(id)){
            return res.status(400).json({error:'id_cliente debe ser un número'});
        }

    const newMensualidades = new Mensualidades({
        id_cliente:id_cliente,
        fechaInicio: fechaActual,
        fechaPago: fecha,
        estatus: 'Vigente'
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

export const conseguirMensualidades = async (req,res) =>{
    try{
        const mensualidad = await Mensualidades.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body:mensualidad
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar las mensualidad"});
        console.log(error);
    }
}

export const conseguirUnicaMensualidad = async (req,res)=>{
    const { id, fecha } = req.body;
    const idAux = parseInt(id);
    const estatus = "Vigente";
    try {
        if(!id || !fecha){
            return res.status(400).json({error: "El id_cliente y la fecha son obligatorios"})
        }
        if(isNaN(idAux)){
            return res.status(400).json({error: "El id debe ser un número"})
        }
        if(!estatus==="Vigente"){
            return res.status(400).json({error: "El estatus es incorrecto"})
        }
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


export const pagarMensualidad = async (req, res) => {
    const { idMensualidad } = req.body;
    const id = parseInt(idMensualidad);
    const estatus = 'Pagado';
  
    try {
      if (isNaN(id)) {
        return res.status(400).json({ error: 'El id de la mensualidad debe ser un número' });
      }

    const updateMensualidad = await Mensualidades.update({
        estatus
    },{
        where:{
            id_mensualidad: id,
        },
    })
      res.status(200).json({ message: 'Mensualidad pagada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al modificar mensualidad' });
      console.log(error);
    }
}

export const cambiarEstatus = async (req, res) => {
    const { idMensualidad } = req.body;
    const id = parseInt(idMensualidad);
    const estatus = 'Adeudo';
  
    try {
      if (isNaN(id)) {
        return res.status(400).json({ error: 'El id de la mensualidad debe ser un número' });
      }

    const updateMensualidad = await Mensualidades.update({
        estatus
    },{
        where:{
            id_mensualidad: id,
        },
    })
      res.status(200).json({ message: 'Estatus cambiado a Adeudo' });
    } catch (error) {
      res.status(500).json({ error: 'Error al modificar mensualidad' });
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