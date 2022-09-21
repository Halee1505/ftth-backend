const express = require("express");
const router = express.Router();
const Detail = require("../controller/detail.controller");

router.get("/", Detail.index);
router.get("/:name", Detail.findByName);

module.exports = router;
