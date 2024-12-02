import db from "./config.js";

export const getAllClients = () => {
  db.query("SELECT * FROM clients", (err, result) => {
    if (err) {
      console.error(err);
    } else {
      return result;
    }
  });
};
