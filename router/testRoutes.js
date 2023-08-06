import { Router } from "express";
import { realizarTest, saveTest } from "../controllers/testController.js";

const router = Router();

router.post("/test", saveTest);
router.post("/user/:name/test/:test", realizarTest);


/* router.get("/user", getUsers);
router.get("/user/:name", getUser);
router.delete("/user/:name", deleteUser);
router.patch("/user/:name", updateUser);
 */
export default router