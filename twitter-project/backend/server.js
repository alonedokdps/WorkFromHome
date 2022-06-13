const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const {connectDB} = require("./config/db.js");
const PORT = process.env.APP_PORT;
//Cors
connectDB();
app.use(cors());
//body parser
app.use(express.json());
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      posts: [
        {
          message: "thanh cong",
          date: Date(),
        },
      ],
    },
  });
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
