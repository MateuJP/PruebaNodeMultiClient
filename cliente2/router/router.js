import express from "express";
import { cofingFileMaker } from "../config/index.js";

const routerClient2 = express.Router();

routerClient2.get('/', (req, res) => {
    res.status(200).send({ message: `Cliente 2, esta es mi clave ${cofingFileMaker.key}` })
})

export default routerClient2