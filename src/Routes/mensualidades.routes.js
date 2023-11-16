import {Router} from 'express'

import {conseguirMensualidades, conseguirUnicaMensualidad, crearMensualidad, modificarMensualidad,eliminarMensualidad} from '../Controller/mensualidades.controller.js';

const router=Router();

router.get("/obtenertodos",conseguirMensualidades);
router.post("/registrar",crearMensualidad);
router.put("/modificar/:id",modificarMensualidad);
router.delete("/eliminar/:id",eliminarMensualidad);
//prueba de consulta
router.post("/buscar", conseguirUnicaMensualidad);

export default router