const express = require("express");
const router = express.Router();
const Chat = require("../controller/chat.controller");

router.get("/", Chat.index);
router.get("/getUserList", Chat.getUserList);
router.get("/:id", Chat.findByUser);
router.post("/", Chat.addMessage);

module.exports = router;
