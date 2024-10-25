import express, { Router } from "express";
const router = express.Router();

const hewan = [
  {
    nama_hewan: "Kucing",
    jenis: "Anggora",
    jenis_kelamin: "laki-laki",
    habitat: "Darat",
  },
  {
    nama_hewan: "Singa",
    jenis: "Masai",
    jenis_kelamin: "laki-laki",
    habitat: "Afrika Timur",
  },
  {
    nama_hewan: "Beruang",
    jenis: "Beruang Kutub",
    jenis_kelamin: "laki-laki",
    habitat: "Arktik ",
  },
  {
    nama_hewan: "Harimau",
    jenis: "Siberia",
    jenis_kelamin: "Perempuan",
    habitat: "Rusia ",
  },
];

router.get("/", (req, res) => {
  res.send(hewan);
});

export default router;
