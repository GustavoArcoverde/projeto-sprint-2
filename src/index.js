import express from "express";
const app = express()
const port = 3000
app.use(express.json())

import { create } from "./controllers/create-controller.js";
create(app)

import { showTip } from "./controllers/tips-controller.js";
showTip(app)

app.listen(port, ()=>{
    console.log("Rodando na porta 3000, meu consagrado")
})