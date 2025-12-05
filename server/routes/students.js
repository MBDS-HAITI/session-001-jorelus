const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Function to normalize data
const normalize = (student) => {
  if (!student) return null;
  const obj = student.toObject ? student.toObject() : student;
  return {
    ...obj,
    firstName: obj.firstName || obj.firstname,
    lastName: obj.lastName || obj.lastname,
  };
};

// GET all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ id: 1 });
    res.json(students.map(normalize));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(normalize(student));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  try {
    const savedStudent = await student.save();
    res.status(201).json(normalize(savedStudent));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update student
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(normalize(student));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE student
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
