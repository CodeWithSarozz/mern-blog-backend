const router = require("express").Router();
const controller = require("../controller/postController");

/**
 * @description create post
 * @method POST /create
 */
router.post("/create", controller.create);

/**
 * @description update post
 * @method PUT /{id}
 */
router.put("/:id", controller.update);

/**
 * @description delete post
 * @method Delete /{id}
 */
router.delete("/:id", controller.delete);

/**
 * @description get post
 * @method get /{id}
 */
router.get("/:id", controller.postById);

/**
 * @description get all post
 * @method get /
 */
router.get("/", controller.allPost);

module.exports = router;
