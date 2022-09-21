const express = require("express");
const router = express.Router();
const Rates = require("../controller/rates.controller");

router.get("/", Rates.index);
router.post("/", Rates.addRate);
router.get("/:name", Rates.findByName);

module.exports = router;
