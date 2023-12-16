
import express from "express";
import { DBconnect } from "./dbconnect.js";
import laptopRouter from "./router/index.js"

const app = express();

app.use(express.json())


DBconnect(DBconnect)

app.use("/laptop",laptopRouter)



const port = 8080

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})



