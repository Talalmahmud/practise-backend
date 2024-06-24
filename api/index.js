import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(3001, () => {
  console.log(`Server is running:http://localhost:${3001}`);
});
export default app;
