const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Render!" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
