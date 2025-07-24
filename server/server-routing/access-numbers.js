//  כל הקריאות לשרת שמתחילות ב-access-numbers יגיעו לקובץ הזה
import express from "express";
const router = express.Router();
import db from "../database/config.js";

// Get all access numbers
router.get("/", async (req, res) => {
  db.query("SELECT * FROM access_numbers", (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Error fetching access numbers",
      });
    } else {
      res.status(200).json({
        success: true,
        message: result,
      });
    }
  });
});

export default router;
