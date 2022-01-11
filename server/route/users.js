const router = require("express").Router();
const controller = require("../controller/authController");

/**
 * @description update user
 * @method PUT /{id}
 */
router.put("/:id", controller.update);

/**
 * @description delete user
 * @method DELETE /{id}
 */
router.delete("/:id", controller.delete);

/**
 * @description get user
 * @method get /{id}
 */
router.get("/:id", controller.userById);

module.exports = router;
