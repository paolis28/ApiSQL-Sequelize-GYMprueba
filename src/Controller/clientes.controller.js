import { Clientes } from '../Models/clientes.model.js';

export const conseguirClientes = async (req,res) =>{
    try{
        const clientes = await Clientes.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body:clientes
        }) 
    }catch(error){
        res.status(500).json({error: "Error al buscar los clientes"});
        console.log(error);
    }
}

export const conseguirUnicoCliente = async (req,res) =>{
    const id = req.params.id;

    try {
        const cliente = await Clientes.findOne({
            where:{
                id_cliente:id
            }
        });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el cliente" });
        console.log(error);
    }
}

export const crearCliente = async (req, res) => {
    const { id_cliente, nombre, apellidoPaterno, apellidoMaterno, numeroCelular, fechaInscripcion }=req.body;
    
    const permitido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

    try{
        if(!nombre || !apellidoPaterno || !apellidoMaterno || !numeroCelular || !fechaInscripcion){
            return res.status(400).json({error:'Todos los campos son obligatorios'})
        }
    
        if(!permitido.test(nombre)){
            return res.status(400).json({error:"Nombre inválido, solo se aceptan acentos como caracteres especiales"})
        }
    
        if(!permitido.test(apellidoPaterno)){
            return res.status(400).json({error:"Apellido Paterno inválido, solo se aceptan acentos como caracteres especiales"})
        }
    
        if(!permitido.test(apellidoMaterno)){
            return res.status(400).json({error:"Apellido Materno inválido, solo se aceptan acentos como caracteres especiales"})
    }
    const parsedFechaInscripcion = new Date(fechaInscripcion);
    
        const cliente = await Clientes.create({
            id_cliente:id_cliente,
            nombre: nombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            numeroCelular: numeroCelular,
            // fechaInscripcion: fechaInscripcion
            fechaInscripcion: new Date(parsedFechaInscripcion).getTime()
        });
        const fechaFormateada = new Date(cliente.fechaInscripcion).toISOString().split('T')[0];
        res.json({
            id_cliente: cliente.id_cliente,
            nombre: cliente.nombre,
            apellidoPaterno: cliente.apellidoPaterno,
            apellidoMaterno: cliente.apellidoMaterno,
            numeroCelular: cliente.numeroCelular,
            fechaInscripcion: fechaFormateada
        });
    }catch(error){
        res.status(500).json({error: "Error al registrar cliente"});
        console.log(error);
    }
}


export const modificarCliente= async(req,res)=>{
    const {nombre,apellidoPaterno,apellidoMaterno,numeroCelular,fechaInscripcion}=req.body;

    try{
        const id=req.params.id;
        const dataCliente=res.body;
        const updateCliente=await Clientes.update({
            nombre:nombre,
            apellidoPaterno:apellidoPaterno,
            apellidoMaterno:apellidoMaterno,
            numeroCelular:numeroCelular
        },{
            where:{
                id_cliente:id
            }
        })
        res.send("Cliente Modificado")
        res.json(updateCliente);
    }catch(error){
        res.status(500).json({error: "Error al modificar cliente"});
        console.log(error);
    }
}

export const eliminarCliente = async (req,res)=>{
    const id=req.body.id_cliente;
    const nombre=req.body.nombre;

    try{
        const cliente = await Clientes.destroy({
            where:{
                id_cliente:id
            }
        });
        res.send("Cliente Eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar al cliente"});
        console.log(error);
    }
}