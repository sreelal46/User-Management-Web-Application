const express = require("express");
const router = express.Router();
const { checkSession, isLogin } = require("../middleware/sessionUser");
const userController = require("../controller/userController");

//login page loading and login verification
router.get("/login", isLogin, userController.loadLogin);
router.post("/login", userController.login);

//loading homepage
router.get("/home", checkSession, userController.loadHome);

//register new user and validateing
router.get("/register", userController.loadRegister);
router.post("/register", userController.registerUser);

// logout
router.get("/logout", checkSession, userController.logout);

module.exports = router;
