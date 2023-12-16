import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    model: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    color: {
      type: [String],
      required: true,
      trim: true,
      minlength: 2,
    },
    ram: {
      type: Number,
      required: true,
      min: 2,
      max: 128,
    },
    rampower: {
      type: Number,
      min: 1200,
      required: false,
    },
    processor: {
      type: String,
      required: false,
      minlength: 2,
    },
    ip: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Laptop = mongoose.model("laptop", laptopSchema);
export { Laptop };
