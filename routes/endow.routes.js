const express = require("express");
const router = express.Router();
const Endow = require("../controller/endow.controller");

router.get("/", Endow.index);
router.post("/", Endow.addRate);
router.get("/:name", Endow.findByName);

module.exports = router;
