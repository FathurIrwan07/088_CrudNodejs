import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/mobil.js";
import userRoute from "./routes/user.js";
import hewanRoute from "./routes/hewan.js";

const app = express();
const port = 3000;

app.use("/user", userRoute);
app.use("/mobil", mobilRoute);
app.use("/hewan", hewanRoute);
app.get("/", (req, res) => {
  console.log(["GET ROUTE"]);
  res.send("Selamat datang Prajurit");
});

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`server berjalan di port : http://localhost:${port}`)
);
