const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const { name, protein, fiber, fat, carbohydrates } = req.body;

    const newProduct = new Product({
      name: name,
      protein: protein,
      fiber: fiber,
      carbohydrates: carbohydrates,
      fat: fat,
    });

    await newProduct.save();

    res.status(201).json("Added to a database");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.findProduct = async (req, res) => {
  try {
    
    const product = await Product.findOne({_id: req.params.id})

    if (product.length !== 0) {
      res.status(200).json(product);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.findProducts = async (req, res) => {
  try {
    const product = await Product.find({ name: { $regex: req.params.id } });

    if (product.length !== 0) {
      res.status(200).json(product);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    res.status(200).json("updated");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json("deleted from database");
  } catch (e) {
    res.status(500).json(e);
  }
};
