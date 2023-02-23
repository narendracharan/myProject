const multer = require("multer");
const path = require("path");

const imgconfig = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, path.join(__dirname, "..", "/uploads/"));
  },
  filename: (req, file, callback) => {
    const exe = file.originalname.substring(file.originalname.indexOf("."));
    callback(null, `image_${Date.now()}.${file.originalname}`);
  },
});

const multerfilter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only image allowd", false));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: multerfilter,
});

module.exports = {
  upload,
};
