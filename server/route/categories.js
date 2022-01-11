const router = require("express").Router();
const controller = require("../controller/categoryController");

/**
 * @description create category
 * @method POST /create
 */
router.post("/create", controller.create);

/**
 * @description update category
 * @method PUT /{id}
 */
router.put("/:id", controller.update);

/**
 * @description delete category
 * @method Delete /{id}
 */
router.delete("/:id", controller.delete);

/**
 * @description get category
 * @method get /{id}
 */
router.get("/:id", controller.categoryById);

/**
 * @description get all category
 * @method get /
 */
router.get("/", controller.allCategory);

module.exports = router;
