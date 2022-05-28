import User from "../../models/User";
import connectDb from "../../middlewere/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email } = req.body;
    let u = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "123").toString(),
    });
    await u.save();
    return res.status(200).json({ succes: "succes" });
  } else {
    return res.status(400).json({ error: "this method in not allowed" });
  }
};

export default connectDb(handler);
