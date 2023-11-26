import { Administradores } from "../Models/administradores.model.js";
import bcrypt from 'bcrypt';

export const registroAdmin = async(req, res) =>{
    const { usuario, password } = req.body;
    const saltRounds = 10;
    const permitido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\d]+$/;
    const pswPermitida = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    try {
        if (!usuario || !password) {
            return res.status(400).json({error:'Los campos no pueden ir vacios'})
        }
        if (!permitido.test(usuario)) {
            return res.status(400).json({error:'Usuario no acepta espacios'})
        }
        if (!pswPermitida.test(password)) {
            return res.status(400).json({error:'La contraseña debe tener minimo 8 caracteres, un número y un caráceter especial'})
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newAdmin = new Administradores({
            usuario,
            password: hashedPassword
        })
        newAdmin.validate();
        newAdmin.save();
        res.json(
            newAdmin
        )
    } catch (error) {
        res.status(500).json({error: "Error al buscar al administardor"});
        console.log(error);
    }
}

export const buscarAdmin = async(req, res) =>{
    const { usuario, password } = req.body;
    const permitido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\d]+$/;
    const pswPermitida = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    try {
        if (!usuario || !password) {
            return res.status(400).json({error:'Los campos no pueden ir vacios'})
        }
        if (!permitido.test(usuario)) {
            return res.status(400).json({error:'Usuario no acepta espacios'})
        }
        if (!pswPermitida.test(password)) {
            return res.status(400).json({error:'La contraseña debe tener minimo 8 caracteres, un número y un caráceter especial'})
        }
        const administrador = await Administradores.findOne({
            where:{
                usuario,
            },
        })

        if (!administrador) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }

        const correctPassword = await bcrypt.compare(password, administrador.password);

        if (!correctPassword) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.status(200).json({message: "Datos correctos"});
    } catch (error) {
        res.status(500).json({error: "Error al buscar al administardor"});
        console.log(error);
    }
}