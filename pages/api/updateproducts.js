import Product from "../../models/Product";
import connectDb from "../../middlewere/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.lenght; i++) {
      let p = await Product.findById(req.body[i]._id, req.body[i]);
    }
    return res.status(200).json({ succes: "succes" });
  } else {
    return res.status(400).json({ error: "this method in not allowed" });
  }
};

export default connectDb(handler);
