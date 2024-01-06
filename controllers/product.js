const Product = require("../models/product");

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

exports.findBarCode = async (req, res) => {
  try {
    const product = await Product.findOne({ barcode: req.params.barcode });
    if (product.length !== 0) {
      res.status(200).json(product);
    } else {
      res.status(404).json(null);
    }
  } catch (e) {
    res.status(500).json(null);
  }
};

exports.addProduct = async (req, res) => {
  const {
    addProduct: { name, protein, fiber, carbohydrates, fat, barcode },
  } = req.body;

  const product = {
    name: name.trim(),
    protein: parseInt(protein),
    fiber: parseInt(fiber),
    fat: parseInt(fat),
    carbohydrates: parseInt(carbohydrates),
  };

  if (barcode !== "" && parseInt(barcode) !== NaN) {
    product.barcode = parseInt(barcode);
  }

  try {
    const newProduct = new Product(product);

    await newProduct.save();

    res.status(201).json("Added to a database");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    await Product.deleteOne({ _id: req.params.id });

    res.status(200).json("deleted from database");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.updateProduct = async (req, res) => {

  const {
    addProduct: { name, protein, fiber, carbohydrates, fat, barcode },
  } = req.body;

  const product = {
    name: name.trim(),
    protein: parseInt(protein),
    fiber: parseInt(fiber),
    fat: parseInt(fat),
    carbohydrates: parseInt(carbohydrates),
  };

  if (barcode !== "" && parseInt(barcode) !== NaN) {
    product.barcode = parseInt(barcode);
  }

  try {
    await Product.replaceOne({ _id: req.params.id }, product);
    res.status(200).json("updated");
  } catch (e) {
    res.status(500).json(e);
  }
};

