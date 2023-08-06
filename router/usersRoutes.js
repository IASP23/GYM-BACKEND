import { Router } from "express";
import { deleteUser, getUser, getUsers, saveUser, updateUser } from "../controllers/userController.js";

const router = Router();

router.post("/user", saveUser);
router.get("/users", getUsers);
router.get("/user/:name", getUser);
router.delete("/user/:name", deleteUser);
router.patch("/user/:name", updateUser);

export default router