const { Router } = require("express");
const { userAuthentication } = require("../controllers/AuthController");
const { check } = require("express-validator");

const router = Router();

router.post(
  "/",
  [
    check("email", "Enter a valid mail").isEmail(),
    check("password", "Password must be a minimum of 6 characters").isLength({
      min: 6,
    }),
  ],
  userAuthentication
);

module.exports = router;
