const express = require("express");
const {
  admin_signup,
  admin_login,
  admin_update,
  change_password,
  admin_signout,
} = require("../Controller/AdminController");
const router = express.Router();

router.post("/signup_admin", admin_signup);
router.post("/login_admin", admin_login);
router.post("/update_admin", admin_update);
router.post("/change_password", change_password);
router.get("/signout", admin_signout);

module.exports = router;
