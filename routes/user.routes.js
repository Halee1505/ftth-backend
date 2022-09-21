const express = require("express");
const router = express.Router();
const Product = require("../controller/user.controller");

router.get("/", Product.index);
router.get("/:id", Product.getCurrentUser);
router.post("/", Product.create);
router.delete("/:id", Product.delete);
router.post("/login", Product.checkLogin);

module.exports = router;
