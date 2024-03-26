const express = require("express");
const adminRouter = express.Router();
const {
  create_admin,
  delete_admin,
  getId_admin,
  get_admin,
  update_admin,
  verifyUser,
  dashboard,
  login,
} = require("../controller/adminController");

adminRouter.post("/create-admin", create_admin);
adminRouter.get("/get-admin", get_admin);
adminRouter.get("/getsingle-admin/:id", getId_admin);
adminRouter.put("/update-admin/:id", update_admin);
adminRouter.delete("/delete-admin/:id", delete_admin);
//Dashboad Routes
adminRouter.get("/verify", verifyUser, dashboard);
// Signin Routers
adminRouter.post("/admin-loginin", login);

module.exports = adminRouter;
