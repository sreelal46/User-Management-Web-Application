const express = require("express");
const router = express.Router();
const { checkSession, isLogin } = require("../middleware/sessionAdmin");
const {
  loadLogin,
  login,
  loadDashboard,
  deleteUser,
  editUser,
  loadRegister,
  loadEditUser,
  addUser,
  logout,
} = require("../controller/adminController");

//login page loading and login verification
router.get("/login", isLogin, loadLogin);
router.post("/login", login);

//loading dashboadr
router.get("/dashboard", checkSession, loadDashboard);

//geting editing user and submiting
// router.post("/edit/:id", editUser);
router.get("/edit/:id", loadEditUser);
router.post("/edit/:id", editUser);

//deleting user
router.get("/delete/:id", deleteUser);

//add new user and validateing
router.get("/addUser", loadRegister);
router.post("/addUser", checkSession, addUser);

// logout
router.get("/logout", checkSession, logout);

module.exports = router;
