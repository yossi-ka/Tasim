import express from "express";
import cors from "cors";

import clientRoutes from "./server-routing/clients.js";
import rentalsRoutes from "./server-routing/rentals.js";
import ILNumbersRoutes from "./server-routing/il-numbers.js";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/rentals", rentalsRoutes);
app.use("/il-numbers", ILNumbersRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
