const Category = require("../model/Category");

// * create category
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  const newCategory = new Category(req.body);

  try {
    const saveCategory = await newCategory.save();
    res.status(200).json(saveCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

// * update category
exports.update = async (req, res) => {
  const category = await Category.findById(req.params.id);
  try {
    const updatedCategory = await category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

// * delete category
exports.delete = async (req, res) => {
  const category = await Category.findById(req.params.id);
  try {
    await category.delete();
    res.status(200).json("Category has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

// * Get category
exports.categoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};

// * Get all category
exports.allCategory = async (req, res) => {
  try {
    category = await Category.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};
