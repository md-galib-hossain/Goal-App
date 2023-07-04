export const SendToken = (res, user, statusCode, message) => {
  const token = user.getJWTToken()
    const options = {
        httpOnly: true,
        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*60*1000 )
    }
  const userData = {
    _id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    task: user.task,
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, message, user: userData });
};
