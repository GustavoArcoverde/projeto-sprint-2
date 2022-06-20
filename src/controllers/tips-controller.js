import {Tip} from "../models/tips-models.js";
import {bd} from "../infra/bd.js"

export const showTip = (app)=>{
    app.get("./tips", (req, res)=>{
        res.send(bd.tips[Math.floor(Math.random * bd.tips.length)])
    })
}