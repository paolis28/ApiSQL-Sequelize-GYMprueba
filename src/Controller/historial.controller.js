import {Historial} from '../Models/historial.model.js';

export const conseguirHistorial= async (req,res)=>{
    try{
        const historial = await Historial.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body:historial
        })
        res.json(historial) 
    }catch(error){
        res.status(500).json({error: "Error al buscar todo el historial"});
        console.log(error);
    }
}

export const conseguirUnicoHistorial = async(req,res)=>{
    const id = req.params.id;

    try {
        const historial = await Historial.findOne({
            where:{
                id_historial:id
            }
        });
        res.json(historial);
        res.send("Historial modificado");
    } catch (error) {
        res.status(500).json({ error: "Error al buscar historial del cliente" });
        console.log(error);
    }
}

export const crearHistorial=async (req,res)=>{
    const {id_historial,id_mensualidades,id_cliente,fechapago,estatus}=req.body;

    try{
        if(!id_historial, !id_mensualidades, !id_cliente, !fechapago, !estatus){
            return res.status(400).json({error:'Todos los campos son obligatorios'})
        }

    await Historial.sync()

    const historial=await Historial.create({
        id_historial:id_historial,
        id_mensualidades:id_mensualidades,
        id_cliente:id_cliente,
        fechapago:fechapago,
        estatus:estatus
    });

    await historial.validate();
    await historial.save();

    res.json(historial);
    res.send("Historial registrado")

    }catch(error){
        res.status(500).json({error:"Error al crear historial"});
        console.log(error);
    }
}

export const modificarHistorial = async (req,res)=>{
    const {id_historial,id_mensualidades,id_cliente,fechapago,estatus}=req.body;

    try{
        const id=req.params.id;
        const dataHistorial=res.body;
        const updateHistorial=await Historial.update({
            id_historial:id_historial,
            id_mensualidades:id_mensualidades,
            id_cliente:id_cliente,
            fechapago:fechapago,
            estatus:estatus
        },{
            where:{
                id_historial:id
            }
        })
        res.send("Historial Modificado")
        res.json(updateHistorial);
    }catch(error){
        res.status(500).json({error: "Error al modificar historial"});
        console.log(error);
    }
}

export const eliminarHistorial = async (req,res)=>{
    const id=req.params.id;

    try{
        const historial = await Historial.destroy({
            where:{
                id_historial:id
            }
        });
        res.send("Historial Eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar el historial"});
        console.log(error);
    }
}