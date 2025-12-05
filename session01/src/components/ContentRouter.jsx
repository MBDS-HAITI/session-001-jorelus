import { Routes, Route } from "react-router-dom";
import Grades from "./pages/Grades.jsx";
import Students from "./pages/Students.jsx";
import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";
import MainContent from "./MainContent.jsx";

export default function ContentRouter() {
  return (
    <main className="Main">
      <div className="content-fade">
        <div className="Container">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}