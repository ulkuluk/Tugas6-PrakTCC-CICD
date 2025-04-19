import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const Catatan = db.define(
  "catatan", // Nama Tabel
  {
    Judul: Sequelize.STRING,
    Isi: Sequelize.STRING,
    Tanggal: Sequelize.STRING,
  }
);

db.sync().then(() => console.log("Database synced"));

export default Catatan;
