import { Clientes } from '../Models/clientes.model.js';

export const conseguirClientes = async (req,res) =>{
    try{
        await Clientes.findAll()
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
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
    const { nombre, apellidoPaterno, apellidoMaterno, celular, fecha } = req.body;
    
    const permitido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

    try{
        if(!nombre || !apellidoPaterno || !apellidoMaterno || !celular || !fecha){
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
    
        const newCliente = new Clientes({
            nombre: nombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            numeroCelular: celular,
            fechaInscripcion: fecha
        })
        await newCliente.validate();
        await newCliente.save();
        res.json({
            newCliente
        });
    }catch(error){
        res.status(500).json({error: "Error al registrar cliente"});
        console.log(error);
    }
}


export const modificarCliente= async(req,res)=>{
    const {id_cliente, nombre, apellidoPaterno, apellidoMaterno, celular }=req.body;
    const id = parseInt(id_cliente);
    const permitido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    try{
        if(!id || !nombre || !apellidoPaterno || !apellidoMaterno || !celular){
            return res.status(400).json({error:'Todos los campos son obligatorios'})
        }
        if (isNaN(id)) {
            return res.status(400).json({error:"id inválido, el id debe ser un número"})
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

        const updateCliente = await Clientes.update({
            nombre:nombre,
            apellidoPaterno:apellidoPaterno,
            apellidoMaterno:apellidoMaterno,
            numeroCelular:celular
        },{
            where:{
                id_cliente:id
            }
        })

        res.json({updateCliente});
    }catch(error){
        res.status(500).json({error: "Error al modificar cliente"});
        console.log(error);
    }
}

export const eliminarCliente = async (req,res)=>{
    const { id_cliente} = req.body;
    const id = parseInt(id_cliente);
    try{
        if (!id) {
            return res.status(400).json({error:"El id no debe estar vacío"})
        }
        if (isNaN(id)) {
            return res.status(400).json({error:"id inválido, el id debe ser un número"})
        }
        await Clientes.destroy({
            where:{
                id_cliente:id
            }
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    }catch(error){
        res.status(500).json({error: "Error al eliminar al cliente"});
        console.log(error);
    }
}