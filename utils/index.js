import * as yup from "yup";

export const laptopValidationSchema = yup.object({
  name: yup
    .string()
    .min(2, "name must be at least 2 character")
    .trim()
    .required(),

  model: yup
    .string()
    .min(6, "model number must be 6 character")
    .required()
    .trim(),

  color: yup
    .string()
    .min(3, "atleast 3 minimum character required ")
    .required(),

  ram: yup.number().min(2, "ram must be at least 2GB").required(),

  ip: yup.string().min(1, "atleast one character required"),
});
