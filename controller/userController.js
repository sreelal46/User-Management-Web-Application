const userSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRound = 10;
let username;

//load register page
const loadRegister = (req, res) => {
  res.render("user/register");
};

//storing new user to db
const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await userSchema.findOne({ email });
    if (user)
      return res.render("user/register", { message: "User alrady exist" });

    const hashPassword = await bcrypt.hash(password, saltRound);

    const newUser = new userSchema({
      email,
      username,
      password: hashPassword,
    });

    await newUser.save();
    res.render("user/login", { message: "Created successful" });
  } catch (error) {
    console.log(error);
  }
};

//loading login page
const loadLogin = (req, res) => {
  res.render("user/login");
};

//validating user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email });
    if (!user)
      return res.render("user/login", { message: "User doesn't exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    req.session.user = true;

    if (!isMatch)
      return res.render("user/login", {
        message: "Invalid Email or Password",
      });
    username = user.username;
    res.redirect("/user/home");
  } catch (error) {
    console.log(error);
  }
};

//loading home page
const loadHome = async (req, res) => {
  res.render("user/home", { message: username });
};

//logout
const logout = (req, res) => {
  req.session.user = null;
  res.redirect("/user/login");
};

module.exports = {
  registerUser,
  loadRegister,
  loadLogin,
  login,
  loadHome,
  logout,
};
