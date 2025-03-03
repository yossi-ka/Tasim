//  כל הקריאות לשרת שמתחילות ב-clients:

import express from "express";
const router = express.Router();
import db from "../database/config.js";

router.get("/", async (req, res) => {
  db.query("SELECT * FROM clients", (err, result) => {
    if (err) {
      console.error("Tasim - Error: ", err);
    } else {
      res.json({
        message: result,
        success: true,
      });
    }
  });
});

router.get("/:id", async (req, res) => {
  db.query(
    "SELECT * FROM clients WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("Tasim - Error: ", err);
      } else {
        res.json({
          message: result,
          success: true,
        });
      }
    }
  );
});



export default router;
