import express from "express";
import {
  getCatatan,
  getCatatanById,
  createCatatan,
  updateCatatan,
  deleteCatatan,
} from "../controllers/CatatanController.js";

const router = express.Router();

router.get("/catatan", getCatatan);
router.get("/catatan/:id", getCatatanById);
router.post("/add-catatan", createCatatan);
router.put("/edit-catatan/:id", updateCatatan);
router.delete("/delete-catatan/:id", deleteCatatan);

export default router;
