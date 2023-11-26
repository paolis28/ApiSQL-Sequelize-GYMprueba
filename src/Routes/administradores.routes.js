import { Router } from "express";
import { registroAdmin, buscarAdmin } from "../Controller/administradores.controller.js";
const router = Router();

router.post("/registroadmin", registroAdmin);
router.post("/loginadmin", buscarAdmin);

export default router;