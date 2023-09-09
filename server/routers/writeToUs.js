import { Router } from "express";
import { addWriteToUs, allWriteToUs } from "../controllers/writeToUs.js";
const writetoUS = Router();

// ADD BLOG
writetoUS.post("/addWriteToUs", addWriteToUs);

writetoUS.get("/allWriteToUs", allWriteToUs);

export default writetoUS;
