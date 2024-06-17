import express from "express";

import { getAllPizzas, createNewPizza } from "./controllers/pizza.js";

const router = express.Router();

router.get("/", getAllPizzas);
router.post("/", createNewPizza);

export default router;
