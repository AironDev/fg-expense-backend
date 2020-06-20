const mongoose = require("mongoose");
const { Schema } = mongoose;

const MDASchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    twitter_handle: {
      type: String,
      required: true,
    },
    head: {
      type: String,
    },
    head_handle: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mdas", MDASchema);
