import { Administradores } from "../Models/administradores.model.js";

export const buscarAdmin = async(req, res) =>{
    const { usuario, contraseña } = req.body;
    const permitido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\d]+$/;
    const pswPermitida = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    try {
        if (!usuario || !contraseña) {
            return res.status(400).json({error:'Los campos no pueden ir vacios'})
        }
        if (!permitido.test(usuario)) {
            return res.status(400).json({error:'Usuario no acepta espacios'})
        }
        if (!pswPermitida.test(contraseña)) {
            return res.status(400).json({error:'La contraseña debe tener minimo 8 caracteres, un número y un caráceter especial'})
        }
        const administrador = await Administradores.findOne({
            where:{
                usuario,
                contraseña
            }
        })
        res.json(
            administrador
        )
    } catch (error) {
        res.status(500).json({error: "Error al buscar al administardor"});
        console.log(error);
    }
}