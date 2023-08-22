import express, { json } from "express";
const app = express();
import cors from "cors";
import { set, connect } from "mongoose";
import morgan from "morgan";

//------------------------- Morgan ------------------------
app.use(morgan("dev"));
// --------------------------------------------------------

//------------------------- Cookie ------------------------
import cookieParser from "cookie-parser";
app.use(cookieParser());
// --------------------------------------------------------

//-------------------- Express js server Config -----------
app.use(json({ limit: "100mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// --------------------------------------------------------

//------------------------- User Routes -------------------
// import authRoutes from "./Routes/AuthRoutes";
// authRoutes(app);
// ---------------------------------------------------------

//--------------------- Express js Server ------------------
const port = 3000;
app.listen(port, () => {
  console.log("Server Worked");
});
// ---------------------------------------------------------

//-------------------- DataBase mongoDB --------------------
set("strictQuery", true);

connect(
  "mongodb+srv://ShahriyarMammadov:sehriyar123@cluster0.xjblasa.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });
// -------------------------------------------------------
