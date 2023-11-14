import {Router} from 'express';
import { conseguirClientes, conseguirUnicoCliente ,crearCliente,modificarCliente,eliminarCliente } from '../Controller/clientes.controller.js';
const router=Router();

router.get("/clientes",conseguirClientes)
router.get("/clientes/:id",conseguirUnicoCliente)
router.post("/clientes",crearCliente)
router.put("/clientes/:id",modificarCliente)
router.delete("/clientes/:id",eliminarCliente)

export default router