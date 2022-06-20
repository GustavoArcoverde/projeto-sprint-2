import { Tip } from "../models/create-models.js";

const create = ()=>{
    app.post('/create', (req, res)=>{
        const body = req.body
        const newTip = new Tip(body.tip)
        bd.tips.push(newTip)
        res.send({"Tip": newTip})
    })
}