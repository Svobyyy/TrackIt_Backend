const express = require("express");

const router = express.Router();

const productController = require("../controllers/product");

router.get("/product/:id", productController.findProduct);

router.get("/products/:name", productController.findProducts);

router.post("/product", productController.addProduct);

router.delete("/product/:id", productController.deleteProduct);

router.put("/product/:id", productController.updateProduct);







module.exports = router;
