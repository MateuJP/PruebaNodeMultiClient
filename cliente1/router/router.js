import express from "express";
import { cofingFileMaker } from "../config/index.js";

const routerClient1 = express.Router();

routerClient1.get('/', async (req, res) => {
    console.log("He recibido una peticion")
    res.status(200).send({ message: `Cliente 1, esta es mi clave ${cofingFileMaker.key}` })
})

export default routerClient1