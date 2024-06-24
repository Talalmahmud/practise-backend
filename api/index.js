import express from "express";
import userRoute from "./routes/user.js";
import cors from "cors";
const app = express();

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRoute);
app.get("*", (req, res, err) => {
  res.status(200).json({ message: err });
});

app.listen(3001, () => {
  console.log(`Server is running:http://localhost:${3001}`);
});
export default app;
