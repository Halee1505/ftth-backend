const express = require("express");
const router = express.Router();
const Orders = require("../controller/orders.controller");

router.get("/", Orders.index);
router.get("/user/:id", Orders.findByUser);
router.get("/:id", Orders.findById);
router.post("/", Orders.create);
router.put("/changeStatus", Orders.changeStatus);
router.delete("/:id", Orders.deleteOrder);

module.exports = router;
