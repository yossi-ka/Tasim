import express from "express";
const router = express.Router();
import db from "../database/config.js";

router.get("/active", async (req, res) => {
  db.query(
    "SELECT * FROM rentals WHERE returned <> 1 OR status_payment <> 1",
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

router.get("/archive", async (req, res) => {
  db.query(
    "SELECT * FROM rentals WHERE returned = 1 AND status_payment = 1",
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

// router.get("/:id", async (req, res) => {
//   db.query(
//     "SELECT * FROM rentals WHERE id = ?",
//     [req.params.id],
//     (err, result) => {
//       if (err) {
//         console.error("Tasim - Error: ", err);
//       } else {
//         res.json({
//           message: result,
//           success: true,
//         });
//       }
//     }
//   );
// });

router.post("/add", async (req, res) => {
  console.log(req.body);

  const {
    customer_name,
    device_id,
    country,
    from_date,
    to_date,
    price,
    status_payment,
    agent_id,
    returned,
    notes,
  } = req.body;

  db.query(
    `INSERT INTO rentals (customer_name, device_id, country, from_date, to_date, price, status_payment, agent_id, returned, notes) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      customer_name,
      Number(device_id),
      country,
      from_date,
      to_date,
      Number(price),
      Number(status_payment),
      agent_id || null,
      Number(returned),
      notes || null,
    ],

    (err, result) => {
      if (err) {
        console.error("Tasim - Error: ", err);
      } else {
        res.json({
          message: "הלקוח נוסף בהצלחה",
          success: true,
        });
      }
    }
  );
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  let updateRent = req.body;

  // החלפת מחרוזות ריקות ב-NULL לערכים מספריים
  Object.keys(updateRent).forEach((key) => {
    if (updateRent[key] === "") {
      updateRent[key] = null; // מחליף ערכים ריקים ב-NULL
    }
  });

  // יצירת שאילתת UPDATE דינאמית
  const fields = Object.keys(updateRent)
    .map((key) => `${key} = ?`)
    .join(", ");
  const values = Object.values(updateRent);

  const sql = `UPDATE rentals SET ${fields} WHERE id = ?`;

  db.query(sql, [...values, id], (err, result) => {
    if (err) {
      console.error("שגיאה בעדכון:", err);
      return res.status(500).json({ message: "שגיאה בעדכון הנתונים" });
    }

    res.json({ message: "השכרה עודכנה בהצלחה", success: true });
  });
});

router.delete("/delete/:id", async (req, res) => {
  db.query(
    "DELETE FROM rentals WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("Tasim - Error: ", err);
        return res
          .status(500)
          .json({ message: "שגיאה במחיקה", success: false });
      }

      // מציאת ה-ID האחרון הקיים
      db.query("SELECT MAX(id) AS lastID FROM rentals", (err, result) => {
        if (err) {
          console.error("Tasim - Error in fetching last ID: ", err);
          return res
            .status(500)
            .json({ message: "שגיאה בשליפת ID אחרון", success: false });
        }

        const lastID = result[0].lastID || 0; // אם אין רשומות, קובע ל-0
        const nextID = lastID + 1;

        // עדכון AUTO_INCREMENT
        db.query(`ALTER TABLE rentals AUTO_INCREMENT = ?`, [nextID], (err) => {
          if (err) {
            console.error("Tasim - Error in setting AUTO_INCREMENT: ", err);
            return res
              .status(500)
              .json({ message: "שגיאה בעדכון AUTO_INCREMENT", success: false });
          }

          res.json({
            message: "הלקוח נמחק בהצלחה, ו-AUTO_INCREMENT עודכן",
            success: true,
          });
        });
      });
    }
  );
});

router.get("/rcuk-rentals", async (req, res) => {
  db.query("SELECT * FROM rcuk_rentals", async (err, result) => {
    if (err) {
      console.error("Tasim - Error: ", err);
      return res
        .status(500)
        .json({ message: "שגיאה בשליפת הנתונים", success: false });
    }

    const dataRcukIds = result?.map((rent) => rent.rcuk_id);

    try {
      const data = await Promise.all(
        dataRcukIds?.map((id) =>
          fetch(`https://myaccount.rcuk.com/api/get-rental?rental_id=${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "api-key": process.env.RCUK_API_KEY,
            },
          })
            .then((response) => response.json())
            .then((data) => data.rentals[0])
        )
      );

      res.json({
        message: data,
        success: true,
      });
    } catch (fetchError) {
      console.error("שגיאה בשליפת נתוני השכרות מ-RCUK:", fetchError);
      res
        .status(500)
        .json({ message: "שגיאה בשליפת נתוני השכרות", success: false });
    }
  });
});

export default router;
