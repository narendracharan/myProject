const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  agencyName: {
    type: String,
    require: true,
  },
  ownerName: {
    type: String,
    require: true,
  },
  agencyEmail: {
    type: String,
    require: true,
  },
  ownerContactNumber: {
    type: String,
    require: true,
  },
  officeNumber: {
    type: String,
    require: true,
  },
  officeAddress: {
    type: String,
    require: true,
  },
  agencyLocation: {
    type: String,
    require: true,
  },
  establishedDate: {
    type: Date,
    require: true,
  },
  agencyOwerview: {
    type: String,
    require: true,
  },
  uploadSignedContract: {
    type: String,
    require: true,
  },
  tradeLicenseCopy: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  tadbeer: {
    type: Boolean,
    require: true,
  },
});
schema.set("timestamps", true);
module.exports = mongoose.model("user", schema);
