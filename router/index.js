import express from "express";
import { deleted } from "../services/delete.laptop.js";
import { addLaptop} from "../services/add.laptop.js";
import { view } from "../services/view.laptop.js";

const router = express.Router();

//add laptop in db

router.post("/add", addLaptop);

//view details

router.get("/find/:id",view)
  
     
//delete from id or model number

  router.delete("/delete/:id",deleted)









 



export default router;

