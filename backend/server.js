import express from 'express';
import env from 'dotenv'
import cors from 'cors';
import authRoute from "./router/authRoute.js";

env.config();

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors({ origin: "http://localhost:5173", credentials: true, }))
app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`** SERVER IS LISTENING ON ${PORT} **`)
});
