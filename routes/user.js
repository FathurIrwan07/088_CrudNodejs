import express, { Router } from "express";
const router = express.Router();

const user = [
  {
    nama: "Fathur",
    umur: "21",
    alamat: "Ternate",
    jk: "laki-laki",
  },
  {
    nama: "Falah",
    umur: "20",
    alamat: "kendari",
    jk: "lai-laki",
  },
];

router.get("/", (req, res) => {
  res.send(user);
});

export default router;
