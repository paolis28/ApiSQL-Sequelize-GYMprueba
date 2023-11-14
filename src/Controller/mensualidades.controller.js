import { Mensualidades } from "../Models/mensualidades.model.js";

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
    const id = req.params.id;

    try {
        const mensualidades = await Mensualidades.findOne({
            where:{
                id_mensualidades:id
            }
        });
        res.json(mensualidades);
        res.send("Mensualidad modificada");
    } catch (error) {
        res.status(500).json({ error: "Error al buscar la mensualidad" });
        console.log(error);
    }
}

export const crearMensualidad = async (req,res)=>{
    const {id_cliente,id_mensualidades}=req.body;

    try{
        if(!id_mensualidades || !id_cliente){
            return res.status(400).json({error:'Todos los campos son obligatorios'})
        }

    await Mensualidades.sync()

    const mensualidades=await Mensualidades.create({
        id_mensualidades:id_mensualidades,
        id_cliente:id_cliente
    });

    await mensualidades.validate();
    await mensualidades.save();

    res.json(mensualidades);
    res.send("Mensualidad registrada")

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