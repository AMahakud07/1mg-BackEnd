const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userData = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
userData.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  let hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});
userData.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userData);

module.exports = User;
