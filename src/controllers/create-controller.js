import { Tip } from "../models/tips-models.js";
import {bd} from "../infra/bd.js"

export const create = (app)=>{
    app.post('/create', (req, res)=>{
        const body = req.body
        const newTip = new Tip(body.tip)
        bd.tips.push(newTip)
        res.send({"Tip": newTip})
    })
}