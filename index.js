import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import infoRoute from '../server/Routers/infoRoute.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", infoRoute);

app.get("/", (req, res) => {
  res.status(200).send("hi welcome car service project");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port");
});
