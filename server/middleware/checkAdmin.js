import jwt from "jsonwebtoken";

// check admin
export const checkAdmin = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(404)
        .send({ success: false, message: "Token is invalid" });
    }
    jwt.verify(token, "4473", (err, admin) => {
      if (err) {
        return res
          .status(401)
          .send({ success: false, message: "Token is wrong" });
      } else {
        if (admin.role !== "admin") {
          return res.status(403).send({
            success: false,
            message: "Your role is not eligible for access to this section",
          });
        } else {
          req.admin = admin;
          next();
        }
      }
    });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};
