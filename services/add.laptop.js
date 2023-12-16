import mongoose from "mongoose";
import { Laptop } from "../dbmodel/laptop.model.js";
import { laptopValidationSchema } from "../utils/index.js";

export const addLaptop = async (req, res, next) => {
  const newLaptop = req.body;

  // const newLaptop = {
  //     ...req.body,
  //     ip:ip()
  // }

  console.log(newLaptop);
  // console.log(ip(), ipv6())

  // mac(function (err, addr){
  //     console.log(addr)
  // })

  try {
    await laptopValidationSchema.validate(newLaptop);

    const findId = await Laptop.findOne({ model: req.body.model });

    if (!findId) {
      await Laptop.create(newLaptop);
      return res.status(200).send({ message: "laptop added successfully" });
    }
  } catch (error) {
    return res.send(error);
  }

  return res.status(400).send("this model id already exists");
};
