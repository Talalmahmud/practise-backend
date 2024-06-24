import express from "express";
import userRoute from "./routes/user.js";
const app = express();

app.use("/api/v1", userRoute);
app.get("*", (req, res, err) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(3001, () => {
  console.log(`Server is running:http://localhost:${3001}`);
});
export default app;
