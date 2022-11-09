const { Router } = require("express");
const { postUser } = require("../controllers/UserController");
const { check } = require("express-validator");

const router = Router();

router.post(
  "/",
  [
    check("name", "The name is required").not().isEmpty(),
    check("email", "Enter a valid mail").isEmail(),
    check("password", "Password must be a minimum of 6 characters").isLength({
      min: 6,
    }),
  ],
  postUser
);

module.exports = router;
