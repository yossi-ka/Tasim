import express from "express";
const router = express.Router();
import db from "../database/config.js";

router.get("/", async (req, res) => {
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

router.get("/:id", async (req, res) => {
  db.query(
    "SELECT * FROM rentals WHERE id = ?",
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

export default router;
