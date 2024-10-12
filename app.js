const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("saya senang kuliah di TI");
});
app.get("/about", (req, res) => {
  res.send("tapi boong");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
