import { Router } from "express";

import {conseguirHistorial,conseguirUnicoHistorial,crearHistorial,modificarHistorial,eliminarHistorial} from '../Controller/historial.controller.js';

const router = Router();

router.get("/Historial",conseguirHistorial)
router.get("/Historial",conseguirUnicoHistorial)
router.post("/Historial",crearHistorial)
router.put("/Historial",modificarHistorial)
router.delete("/Historial",eliminarHistorial)

export default router;