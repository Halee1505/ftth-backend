const express = require("express");
const router = express.Router();
const Product = require("../controller/product.controller");

router.get("/", Product.index);
router.get("/:type", Product.findByType);
router.get("/name/:name", Product.findByName);

module.exports = router;
