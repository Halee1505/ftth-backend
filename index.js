require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const axios = require("axios");
const { Server } = require("socket.io");
const corsOptions = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "http://localhost:3000",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const productRouter = require("./routes/product.routes");
app.use("/product", productRouter);
const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);
const orderRouter = require("./routes/orders.routes");
app.use("/order", orderRouter);
const detailRouter = require("./routes/detail.routes");
app.use("/detail", detailRouter);
const ratesRouter = require("./routes/rates.routes");
app.use("/rates", ratesRouter);
const endowRouter = require("./routes/endow.routes");
app.use("/endow", endowRouter);
const actionRouter = require("./routes/action.routes");
app.use("/action", actionRouter);
const chatRouter = require("./routes/chat.routes");
app.use("/chat", chatRouter);

io.on("connection", (socket) => {
  socket.on("newRegister", (data) => {
    console.log(data);
    socket.broadcast.emit("receiveRegister", data);
  });
  socket.on("new-message", (data) => {
    axios.get(`http://localhost:1505/chat/${data}`).then((res) => {
      io.emit(data, res.data);
    });
  });
});
