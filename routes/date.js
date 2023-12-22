const express = require("express");

const router = express.Router();

const dateController = require("../controllers/date");

router.get("/date/:date", dateController.getDate);

router.post("/date", dateController.addDate);

router.get("/date", dateController.addProductToDate);







module.exports = router;
