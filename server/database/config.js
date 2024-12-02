import mysql2 from "mysql2";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// יצירת חיבור עם משתני סביבה
export const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

// התחברות ובדיקת חיבור
connection.connect((err) => {
  if (err) {
    console.error("***שגיאת התחברות למסד הנתונים", err);
  } else {
    console.log("***התחברת בהצלחה למסד הנתונים");
  }
});

export default connection;
