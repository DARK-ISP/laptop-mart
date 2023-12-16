import mongoose from "mongoose";
import { Laptop } from "../dbmodel/laptop.model.js";

//show details using id or model numbers

export const view = async (req, res, next) => {
  const findById = req.params.id;

  const validateLaptopId = mongoose.Types.ObjectId.isValid(findById);

  if (!validateLaptopId) {
    const findByModel = await Laptop.findOne({ model: findById });

    if (!findByModel) {
      return res.send("invalid id or model number");
    }

    return res.status(200).send(findByModel);
  }

  const findLaptopById = await Laptop.findOne({ _id: findById });

  if (!findLaptopById) {
    return res.status(400).send("this product id not exists");
  }
  return res.send(findLaptopById);
};
