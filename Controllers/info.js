
import User from "../Models/infoscheme";

export const createUser = async (req, res, next) => {
    const { firstname,lastname,email,position,department,hiredate } = req.body;
    const newUser = new User({ firstname,lastname,email,position,department,hiredate });
    try {
      await newUser.save();
      res
        .status(200)
        .json({ message: "User created successfully", result: newUser });
    } catch (err) {
      next({ message: "Internal error creating a user" });
    }
  };
  
  export const getUser = async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json({ message: "User details", result: user });
    } catch (err) {
      res.status(500).json({ message: "Internal error getting a user" });
    }
  };
  
  
  export const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser= await User.findByIdAndUpdate(
        { _id: id },
        {
          name: req.body.name,
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          email:req.body.email,
          position:req.body.position,
          department:req.body.department,
          hiredate:req.body.department
        }
      );
      if (!updatedUser) {
        return next(errorHandler(404, "User not found"));
      }
      res.status(200).json({
        message: "User updated successfully",
        result: updatedUser,
      });
    } catch (err) {
      res.status(500).json({ message: "Internal error updating a User" });
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedUser = await User.findByIdAndDelete({ _id: id });
      res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ message: "Internal error deleting a User" });
    }
  };