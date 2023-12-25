const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res.status(201).json("Added to a database");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.findProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    if (product.length !== 0) {
      res.status(200).json(product);
    } else {
      res.status(404).json(product);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.findProducts = async (req, res) => {
  try {
    const product = await Product.find({ name: { $regex: req.params.name } });

    if (product.length !== 0) {
      res.status(200).json(product);
    } else {
      res.status(404).json(product);
    }
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

exports.updateProduct = async (req, res) => {
  try {
    await Product.replaceOne({ _id: req.params.id }, req.body);
    res.status(200).json("updated");
  } catch (e) {
    res.status(500).json(e);
  }
};
