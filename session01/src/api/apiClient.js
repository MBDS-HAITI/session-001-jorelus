// API client to communicate with backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8010/api';

const apiClient = {
  // Grades
  getGrades: async () => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/grades`);
      if (!response.ok) throw new Error('Error fetching grades');
      return await response.json();
    } catch (error) {
      console.error('Error getGrades:', error);
      return [];
    }
  },

  getGradeById: async (id) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/grades/${id}`);
      if (!response.ok) throw new Error('Error fetching grade');
      return await response.json();
    } catch (error) {
      console.error('Error getGradeById:', error);
      return null;
    }
  },

  createGrade: async (grade) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/grades`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grade),
      });
      if (!response.ok) throw new Error('Error creating grade');
      return await response.json();
    } catch (error) {
      console.error('Error createGrade:', error);
      return null;
    }
  },

  updateGrade: async (id, grade) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/grades/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grade),
      });
      if (!response.ok) throw new Error('Error updating grade');
      return await response.json();
    } catch (error) {
      console.error('Error updateGrade:', error);
      return null;
    }
  },

  deleteGrade: async (id) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/grades/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error deleting grade');
      return await response.json();
    } catch (error) {
      console.error('Error deleteGrade:', error);
      return null;
    }
  },

  // Students
  getStudents: async () => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/students`);
      if (!response.ok) throw new Error('Error fetching students');
      return await response.json();
    } catch (error) {
      console.error('Error getStudents:', error);
      return [];
    }
  },

  getStudentById: async (id) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/students/${id}`);
      if (!response.ok) throw new Error('Error fetching student');
      return await response.json();
    } catch (error) {
      console.error('Error getStudentById:', error);
      return null;
    }
  },

  createStudent: async (student) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
      if (!response.ok) throw new Error('Error creating student');
      return await response.json();
    } catch (error) {
      console.error('Error createStudent:', error);
      return null;
    }
  },

  updateStudent: async (id, student) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
      if (!response.ok) throw new Error('Error updating student');
      return await response.json();
    } catch (error) {
      console.error('Error updateStudent:', error);
      return null;
    }
  },

  deleteStudent: async (id) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/students/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error deleting student');
      return await response.json();
    } catch (error) {
      console.error('Error deleteStudent:', error);
      return null;
    }
  },

  // Courses
  getCourses: async () => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/courses`);
      if (!response.ok) throw new Error('Error fetching courses');
      return await response.json();
    } catch (error) {
      console.error('Error getCourses:', error);
      return [];
    }
  },

  getCourseById: async (id) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/courses/${id}`);
      if (!response.ok) throw new Error('Error fetching course');
      return await response.json();
    } catch (error) {
      console.error('Error getCourseById:', error);
      return null;
    }
  },

  createCourse: async (course) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course),
      });
      if (!response.ok) throw new Error('Error creating course');
      return await response.json();
    } catch (error) {
      console.error('Error createCourse:', error);
      return null;
    }
  },

  updateCourse: async (id, course) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/courses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course),
      });
      if (!response.ok) throw new Error('Error updating course');
      return await response.json();
    } catch (error) {
      console.error('Error updateCourse:', error);
      return null;
    }
  },

  deleteCourse: async (id) => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/courses/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error deleting course');
      return await response.json();
    } catch (error) {
      console.error('Error deleteCourse:', error);
      return null;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await 
      fetch(`${API_BASE_URL}/health`);
      return response.ok;
    } catch {
      return false;
    }
  },
};

export default apiClient;
