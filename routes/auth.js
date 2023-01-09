/*
User Routes / Auth
host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { inputsValidation } = require("../middlewares/inputs-validator");

const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { validateJWT } = require("../middlewares/token-validator");

const router = Router();

router.post(
  "/new",
  [
    check("name", "name required").not().isEmpty(),
    check("email", "email required").isEmail(),
    check("password", "password must have 6 characters").isLength({ min: 6 }),
    inputsValidation,
  ],

  createUser
);

router.post(
  "/",
  [
    check("email", "email required").isEmail(),
    check("password", "password must have 6 characters").isLength({ min: 6 }),
    inputsValidation,
  ],
  loginUser
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
