import "dotenv/config";

import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, function() {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});