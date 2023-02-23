const { check } = require("express-validator");

exports.signupValidation = [
  check("agencyName", "agencyName is required").not().isEmpty(),
  check("ownerName", "ownerName is required").not().isEmpty(),
  check("agencyEmail", "agencyEmail is required")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check(
    "ownerContactNumber",
    "ownerContactNumber should be contains 10 digits"
  ).isLength({ max: 10, min: 10 }),
  check("officeNumber", "officeNumber should be contains 10 digits").isLength({
    max: 10,
    min: 10,
  }),
  check("officeAddress", "officeAddressis required").not().isEmpty(),
  check("agencyLocation", "agencyLocation is required").not().isEmpty(),
  check("establishedDate", "establishedDate is required").not().isEmpty(),
  check("agencyOwerview", "agencyOwerview is required").not().isEmpty(),
  check(
    "password",
    "password must greater than 8 charecter ,one lowerCase latter,one upperCase latter ,and one number,one speacial charecter"
  ).isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  }),
  check("tadbeer", "tadbeer is required").not().isEmpty(),
];
