import express, { Router } from "express";
const router = express.Router();

const mobil = [
  {
    merk: "BMW",
    model: "sport",
    warna: "hitam",
    tahun: "2015",
  },
  {
    merk: "Ferari",
    model: "sport",
    warna: "Merah",
    tahun: "2015",
  },
];

router.get("/", (req, res) => {
  res.send(mobil);
});

export default router;
