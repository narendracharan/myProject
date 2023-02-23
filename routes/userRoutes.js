const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { upload } = require("../middleware/imageStorage");
const { signupValidation } = require("../validation/userValidation");
const userAuth = require("../middleware/userAuth");

router.post(
  "/signup",
  upload.single("uploadSignedContract"),
  signupValidation,
  userControllers.userSignup
);

router.post("/login", userControllers.userLogin);

router.get("/verifytoken", userAuth, (req, res) => {
  res.status(200).json({
    status: "Success",
    meessage: "User Authenticated",
  });
});

module.exports = router;
