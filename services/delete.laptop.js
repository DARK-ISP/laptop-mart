import mongoose, { model } from "mongoose";
import { Laptop } from "../dbmodel/laptop.model.js";

export const deleted = async (req, res) => {
  const deleteById = req.params.id;

  const isValidMongoId = mongoose.Types.ObjectId.isValid(deleteById);

  if (!isValidMongoId) {
    const deleteByModel = await Laptop.findOne({ model: deleteById });
    if (!deleteByModel) {
      return res.send("invalid id or device model number");
    } else {
      await Laptop.findByIdAndDelete(deleteByModel);
      return res.send(
        "delete product successfully using their model number" + deleteByModel
      );
    }
  }
  const findIdForDelete = await Laptop.findOne({ _id: deleteById });

  if (findIdForDelete) {
    await Laptop.findByIdAndDelete(deleteById);
    return res
      .status(200)
      .send("delete product successfully by using their id " + findIdForDelete);
  } else {
    return res.status(404).send("with this id. product not found");
  }
};
