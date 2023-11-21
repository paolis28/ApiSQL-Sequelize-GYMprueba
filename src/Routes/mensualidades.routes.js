import {Router} from 'express';
import {conseguirMensualidades, conseguirUnicaMensualidad, crearMensualidad, pagarMensualidad,eliminarMensualidad} from '../Controller/mensualidades.controller.js';
const router = Router();

router.get("/obtenertodos",conseguirMensualidades);
router.post("/registrar",crearMensualidad);
router.put("/pagar", pagarMensualidad);
router.delete("/eliminar/:id",eliminarMensualidad);
//prueba de consulta
router.post("/buscar", conseguirUnicaMensualidad);

export default router