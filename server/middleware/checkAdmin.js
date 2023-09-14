import { userModel } from "../models/user.js";

// check admin
export const checkAdmin = async (req, res, next) => {
  try {
    const userID = req.body.userID;
    const user = await userModel.findById(userID);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Your role is not eligible for access to this section",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
      message: "Salam Admin",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, error: error.message });
  }
};
