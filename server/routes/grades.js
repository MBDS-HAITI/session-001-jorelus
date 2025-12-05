const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');

// Function to normalize data
const normalize = (grade) => {
  if (!grade) return null;
  const obj = grade.toObject ? grade.toObject() : grade;
  return {
    ...obj,
    student: obj.student ? {
      ...obj.student,
      firstName: obj.student.firstName || obj.student.firstname,
      lastName: obj.student.lastName || obj.student.lastname,
    } : null,
  };
};

// GET all grades
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find()
      .populate('student')
      .populate('course')
      .sort({ unique_id: 1 });
    res.json(grades.map(normalize));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single grade
router.get('/:id', async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id)
      .populate('student')
      .populate('course');
    if (!grade) return res.status(404).json({ message: 'Grade not found' });
    res.json(normalize(grade));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new grade
router.post('/', async (req, res) => {
  const grade = new Grade(req.body);
  try {
    const savedGrade = await grade.save();
    await savedGrade.populate('student').populate('course');
    res.status(201).json(normalize(savedGrade));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update grade
router.put('/:id', async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('student')
      .populate('course');
    res.json(normalize(grade));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE grade
router.delete('/:id', async (req, res) => {
  try {
    await Grade.findByIdAndDelete(req.params.id);
    res.json({ message: 'Grade deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
