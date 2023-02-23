const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
require("./models/config");
app.use(morgan("dev"));
app.use(bodyparser.json());
const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running port no:${process.env.PORT}`);
});
