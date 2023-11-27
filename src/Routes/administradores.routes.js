import { Router } from "express";
import { registroAdmin, loginAdmin, actualizarPassword } from "../Controller/administradores.controller.js";
const router = Router();

router.post("/registroadmin", registroAdmin);
router.post("/loginadmin", loginAdmin);
router.put("/actualizarpassword", actualizarPassword);

export default router;