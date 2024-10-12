import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server berjalan di port : http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("saya senang kuliah di TI");
});
app.get("/about", (req, res) => {
  res.send("tapi boong");
});
