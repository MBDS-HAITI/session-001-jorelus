require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('../models/Student');
const Course = require('../models/Course');
const Grade = require('../models/Grade');
//const rawData = require('../../session01/src/data/data.json');

// MongoDB Atlas URI from .env
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const seed = async () => {
  await connectDB();

  try {
    console.log('🗑️ Clearing existing data...');
    await Grade.deleteMany({});
    await Student.deleteMany({});
    await Course.deleteMany({});

    // 1. Extract unique students
    console.log('👥 Seeding students...');
    const studentsMap = new Map();
    rawData.forEach((item) => {
      if (item.student && item.student.id) {
        studentsMap.set(item.student.id, {
          id: item.student.id,
          firstName: item.student.firstname || item.student.firstName,
          lastName: item.student.lastname || item.student.lastName,
        });
      }
    });
    const studentsData = Array.from(studentsMap.values());
    const insertedStudents = await Student.insertMany(studentsData);
    console.log(`✅ Inserted ${insertedStudents.length} students`);

    // 2. Extract unique courses
    console.log('📚 Seeding courses...');
    const coursesSet = new Set();
    rawData.forEach((item) => {
      if (item.course) coursesSet.add(item.course);
    });
    const coursesData = Array.from(coursesSet).map((name) => ({
      name,
      code: name.substring(0, 4).toUpperCase(),
    }));
    const insertedCourses = await Course.insertMany(coursesData);
    console.log(`✅ Inserted ${insertedCourses.length} courses`);

    // 3. Seed grades with references
    console.log('📊 Seeding grades...');
    const gradesData = rawData.map((item) => {
      const student = insertedStudents.find(s => s.id === item.student?.id);
      const course = insertedCourses.find(c => c.name === item.course);
      
      return {
        unique_id: item.unique_id,
        student: student?._id,
        course: course?._id,
        grade: item.grade,
        date: item.date ? new Date(item.date) : new Date(),
      };
    }).filter(g => g.student && g.course);

    await Grade.insertMany(gradesData);
    console.log(`✅ Inserted ${gradesData.length} grades`);

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
