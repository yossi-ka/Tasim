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

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range:"מס' ישראליים בלבד",
  })

  res.send(getRows.data);
});

export default router;
