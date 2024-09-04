import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  position:String,
  department:String,
  hiredate:Date
}, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
