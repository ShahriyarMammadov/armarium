import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let extensionFile = [".jpg", ".png", ".gif", ".jpeg"];
    let err = null;
    if (extensionFile.includes(path.extname(file.originalname))) {
      cb(err, "images");
    } else {
      err = new Error("Sonu .jpg, .png, .gif fayllar elave edin!");
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

export default upload;
