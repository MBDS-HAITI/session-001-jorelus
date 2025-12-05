const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    code: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', CourseSchema);
