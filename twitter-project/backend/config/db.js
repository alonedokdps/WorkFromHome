const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    conn = await mongoose.connect(process.env.DB_URL);
    console.log("DB connected successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = {connectDB};
