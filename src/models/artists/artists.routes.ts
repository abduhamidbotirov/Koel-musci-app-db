import express from "express";
import UsersContr from "./artists.contr.js";
const router = express.Router();
router.post("/", UsersContr.createUser);
router.get("/", UsersContr.getUsers);
export default router