import { User } from "../models/users.js";
import { SendMail } from "../utils/SendMail.js";
import { SendToken } from "../utils/SendToken.js";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { avatar } = req.files;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const otp = Math.floor(Math.random() * 1000000);
    user = await User.create({
      name,
      email,
      password,
      avatar:{
        public_id: "",
        url: ""
      },
      otp,
      otp_expiry: new Date(Date.now() + process.env.OTP_EXPIRE *60*1000),
    });

    await SendMail(email, "Verify your account", `Your OTP is ${otp}`)
    SendToken(res,user,200,"OTP send to your email,Please verify your account")
  } catch (error) {
    res.status(500).json({ success: false, message: error.messagea });
  }
};
