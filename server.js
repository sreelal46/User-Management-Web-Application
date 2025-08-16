//requires
const path = require("path");
const express = require("express");
const app = express();
const session = require("express-session");
const noCache = require("nocache");

const hbs = require("hbs");

hbs.registerHelper("inc", function (value) {
  return parseInt(value) + 1;
});

//view engine setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//static files
app.use(express.static("public"));

//router export
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const connectDB = require("./db/connectDB");

// config dotenv and calling
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middileware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 40 },
  })
);
app.use(noCache());

//langing page
app.get("/", (req, res) => {
  res.render("landingPage");
});

//user router
app.use("/user", userRouter);

//admin router
app.use("/admin", adminRouter);

//calling Database
connectDB();

// server
app.listen(8000, () => {
  console.log("============================");
  console.log(`server http://localhost:${PORT}`);
  console.log("============================");
});
