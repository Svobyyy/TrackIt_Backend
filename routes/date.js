const express = require("express");

const router = express.Router();

const dateController = require("../controllers/date");

router.get("/date/:date", dateController.getDate);

router.post("/date/:date", dateController.addProductToDate);

router.delete("/date/:id/:when", dateController.DeleteProductFromDate)

module.exports = router;
