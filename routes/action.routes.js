const express = require("express");
const router = express.Router();
const Action = require("../controller/action.controller");

router.get("/product-type/:name", Action.getProductType);

module.exports = router;
