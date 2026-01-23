import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import WeatherHome from "./pages/WeatherHome";

function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<WeatherHome />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
