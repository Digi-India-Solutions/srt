const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Fixed 'require' to 'required'
  },
  image: {
    type: String,
    required: false,  // Image is now optional
  },
});

module.exports = mongoose.model("Category", categorySchema);
