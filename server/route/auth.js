const router = require("express").Router();
const controller = require("../controller/authController");

/**
 * @description register
 * @method POST /register
 */
router.post("/register", controller.register);

/**
 * @description login
 * @method POST /login
 */
router.post("/login", controller.login);

module.exports = router;
