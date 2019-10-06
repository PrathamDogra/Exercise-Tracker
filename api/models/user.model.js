const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      unique: true,
      type: String,
      required: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
