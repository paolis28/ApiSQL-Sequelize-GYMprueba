import { Router } from "express";
import { buscarAdmin } from "../Controller/administradores.controller.js";
const router = Router();

router.post("/loginadmin", buscarAdmin);

export default router;