import { Routes, Route, Navigate } from "react-router-dom";
import { Quiz, Welcome, Result, Courses, Login } from "../pages";

export default function AppRouter() {
  let auth = true;

  return auth ? (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Navigate to="/welcome" replace={true} />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/welcome" replace={true} />} />
    </Routes>
  );
}
