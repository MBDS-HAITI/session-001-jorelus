const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', StudentSchema);
