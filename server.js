const express = require("express");
const app = express();

const multer = require("multer");

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const PORT = process.env.PORT || 8080;

const connectDB = require("./server/database/connection");
// * mongodb connection;
connectDB();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "assets/images");
  },
  filename: (req, file, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded.");
});

const authRoute = require("./server/route/auth");
const userRoute = require("./server/route/users");
const postRoute = require("./server/route/posts");
const categoryRoute = require("./server/route/categories");

app.use(express.json());

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/assets/images")));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
