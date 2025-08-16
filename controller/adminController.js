const adminModel = require("../model/adminModel");
const userModel = require("../model/userModel");
const userSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRound = 10; //

//load loging page
const loadLogin = (req, res) => {
  res.render("admin/login");
};

//backend validation
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email });

    if (!admin)
      return res.render("admin/login", {
        message: "Invalid email or password",
      });

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch)
      return res.render("admin/login", {
        message: "Invalid email or password",
      });

    req.session.admin = true;

    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

//loading dashboard
const loadDashboard = async (req, res) => {
  try {
    const users = await userModel.find();
    res.render("admin/dashboard", { users });
  } catch (error) {
    res.send("users no found");
  }
};

//loading registration page
const loadRegister = (req, res) => {
  res.render("admin/register");
};

//adding new user with validation
const addUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const user = await userSchema.findOne({ email });
    if (user)
      return res.render("admin/register", { message: "User alrady exist" });

    const hashPassword = await bcrypt.hash(password, saltRound);

    await userModel.create({
      email,
      username,
      password: hashPassword,
    });
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
  }
};

//loading edit user data in edituser page
const loadEditUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userModel.findById(userId);
    console.log(user);

    if (!user) return res.send("error");

    res.render("admin/editUser", { user });
  } catch (error) {
    console.error(error);
  }
};

//editing user data with validation
const editUser = async (req, res) => {
  try {
    const updateData = { username: req.body.username, email: req.body.email };
    const newPassword = req.body.password.trim();
    const newEmail = req.body.email.trim();

    if (newPassword !== "") {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    // check if another user already has this email
    const existingUser = await userModel.findOne({ email: newEmail });

    if (existingUser && existingUser._id.toString() !== req.params.id) {
      // email already taken by another user
      return res.render("admin/editUser", {
        user: await userModel.findById(req.params.id),
        message: "Email already taken",
      });
    }

    // safe to update
    await userModel.findByIdAndUpdate(req.params.id, updateData);
    res.redirect("/admin/dashboard");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

//deleting user
const deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.redirect("/admin/dashboard");
};

//logout
const logout = (req, res) => {
  req.session.admin = null;
  res.redirect("/admin/login"); // go back to login
};

module.exports = {
  loadLogin,
  login,
  loadDashboard,
  deleteUser,
  editUser,
  loadRegister,
  loadEditUser,
  addUser,
  logout,
};
