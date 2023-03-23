import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
const upload = multer({ dest: "./uploads/" });
// import userRoutes from "./routes/users.js";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  return res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
//app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("connected");
});
