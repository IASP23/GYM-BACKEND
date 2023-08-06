import { Router } from "express";
import { editRutine, generateRutine, getRutine, getRutines, saveRutine } from "../controllers/rutineController.js";

const router = Router();

router.post("/rutine", saveRutine);
router.post("/user/:name/rutine", generateRutine);
router.patch("/rutine/:_id", editRutine);
router.get("/rutine/:_id", getRutine);
router.get("/rutines", getRutines);

export default router 