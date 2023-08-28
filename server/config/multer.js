import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let extensionFile = [".jpg", ".png", ".gif"];
    let err = null;
    if (extensionFile.includes(path.extname(file.originalname))) {
      cb(err, "images");
    } else {
      err = new Error("Sonu .jpg, .png, .gif fayllar elave edin!");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.replaceAll(" ", "_"));
  },
});

const upload = multer({ storage, limits: { fileSize: 1000000 } });

export default upload;
