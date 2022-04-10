const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5tmfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
