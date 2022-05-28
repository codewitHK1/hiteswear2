import User from "../../models/User";
import connectDb from "../../middlewere/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhhhh");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "123");
    let decrptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (req.body.email == user.email && req.body.password == decrptedPass) {
        var token = jwt.sign(
          {
            email: user.email,
            name: user.name,
          },
          "jwtSecret",
          { expiresIn: "2d" }
        );

        return res.status(200).json({ success: true, token });
      } else {
        return res
          .status(200)
          .json({ success: false, error: "invalid credentials" });
      }
    } else {
      return res.status(200).json({ success: false, error: "no user found" });
    }
  } else {
    res.status(400).json({ error: "this user not found" });
  }
};

export default connectDb(handler);
