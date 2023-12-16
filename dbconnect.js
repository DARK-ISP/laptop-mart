import mongoose from "mongoose";

const dbName = "lgrapreteorp";
const dbPass = encodeURIComponent("12345");
//  const dbPass = encodeURIComponent(process.env.DB_PASS);



export const DBconnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://w8:${dbPass}@cluster0.8gihaah.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );
    console.log("database connected");
  } catch (error) {
    console.log(error + "db connection failed");
  }
};
