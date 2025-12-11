import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";

function AppRoute() {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Logout route */}
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default AppRoute;
