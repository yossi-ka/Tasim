import express from "express";
const router = express.Router();
import { google } from "googleapis";

router.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1L9dycVngXi8twl2OVLuhJ-jPL21AD5F5FPAwYFMmk5M";

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "מס' ישראליים בלבד!A:K",
  });

  const filteredRows = await getRows.data.values?.map((row) => [
    row[0], // A
    row[1], // B
    row[6], // G
    row[10], // K
  ]);

  res.send(filteredRows);
});

export default router;
