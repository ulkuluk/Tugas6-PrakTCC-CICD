import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugasharian2_praktcc", "root", "", {
  host: "35.226.130.234",
  dialect: "mysql",
});

export default db;
