const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema(
  {
    unique_id: { type: Number, unique: true, required: true },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    grade: Number,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Grade', GradeSchema);
