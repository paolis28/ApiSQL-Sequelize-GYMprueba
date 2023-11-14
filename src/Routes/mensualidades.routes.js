import {Router} from 'express'

import {conseguirMensualidades, conseguirUnicaMensualidad, crearMensualidad, modificarMensualidad,eliminarMensualidad} from '../Controller/mensualidades.controller.js';

const router=Router();

router.get("/Mensualidad",conseguirMensualidades)
router.get("/Mensualidad/:id",conseguirUnicaMensualidad)
router.post("/Mensualidad",crearMensualidad)
router.put("/Mensualidad/:id",modificarMensualidad)
router.delete("/Mensualidad/:id",eliminarMensualidad)

export default router