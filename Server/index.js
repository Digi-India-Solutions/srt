const express = require("express");
const connectDB = require("./src/mongodb/mongodbConnect.js");
require("dotenv").config();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("./src/utils/cloudinary.js");
const app = express();
const categoryRouter = require("./src/Router/categoryRouter.js");
const productRouter = require("./src/Router/productRouter.js");

app.use(express.json());
app.use(express.static("./public"));
app.use(
  cors({
    origin: [
      "http://localhost:3002",
      "http://localhost:3000",
      "http://localhost:3001",
      "https://admin.shrirattantraders.com",
      "https://shrirattantraders.com",
      "https://www.shrirattantraders.com",
      "http://shrirattantraders.com",
      "http://www.shrirattantraders.com",
      "https://bookmygirl.in",
      "https://www.bookmygirl.in",
    ],
    credentials: true,
    methods: "GET,POST,DELETE,PATCH",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.options("*", cors());

app.use(fileUpload({ useTempFiles: true }));

app.get("/", (req, res) => {
  res.send("API WORKING FINE");
});
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

connectDB(process.env.URL);
app.listen(process.env.PORT, () => {
  console.log("connected to PORT", process.env.PORT);
});
