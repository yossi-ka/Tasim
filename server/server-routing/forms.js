//   Contact, Order-Form, and other services

import express from "express";
const router = express.Router();
import db from "../database/config.js";

// Route to handle form submission
router.post("/submit", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "כל השדות נדרשים, אנא מלא את הטופס במלואו.",
    });
  }
  if (subject.length > 20 || message.length > 150) {
    return res.status(400).json({
      success: false,
      message:
        "נושא ההודעה לא יכול להיות ארוך מ-20 תווים וההודעה לא יכולה להיות ארוכה מ-150 תווים.",
    });
  }

  const sql = `
    INSERT INTO contact (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("Tasim - Error: ", err);
      res.status(500).json({
        success: false,
        message: "שגיאה בשליחת הטופס, נסו שוב.",
        error: err,
      });
    } else {
      res.json({
        success: true,
        message: "הטופס נשלח בהצלחה, תודה על פנייתך!",
      });
    }
  });
});

export default router;
