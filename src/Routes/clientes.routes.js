import {Router} from 'express';
import { conseguirClientes, conseguirUnicoCliente ,crearCliente,modificarCliente,eliminarCliente } from '../Controller/clientes.controller.js';
const router=Router();

router.get("/obtenertodo",conseguirClientes)
router.get("/buscar/:id",conseguirUnicoCliente)
router.post("/registrar",crearCliente)
router.put("/modificar/:id",modificarCliente)
router.delete("/eliminar/:id",eliminarCliente)

export default router