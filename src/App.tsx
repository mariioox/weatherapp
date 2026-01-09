import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WeatherHome from "./pages/WeatherHome";

function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
