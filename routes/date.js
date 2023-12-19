const express = require("express");

const router = express.Router();

const dateController = require("../controllers/date");

router.post("/date", dateController.addDate);







module.exports = router;
