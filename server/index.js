import express, { json } from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import bodyParser from "body-parser";

//------------------------- Morgan ------------------------
app.use(morgan("dev"));
// --------------------------------------------------------

//-------------------------- .env -------------------------
config();
// --------------------------------------------------------

//------------------------- Cookie ------------------------
import cookieParser from "cookie-parser";
app.use(cookieParser());
// --------------------------------------------------------

//-------------------- Express js server Config -----------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// --------------------------------------------------------

//------------------------- User Routes -------------------
// app.use("/auth", authRouter);
// ---------------------------------------------------------

//--------------------- Express js Server ------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
});
// ---------------------------------------------------------

//-------------------- DataBase mongoDB --------------------
import { connectionDB } from "./config/DB.js";
connectionDB();
// ---------------------------------------------------------
