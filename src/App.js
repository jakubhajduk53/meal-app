import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import AreaPage from "./pages/AreaPage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/area" element={<AreaPage />} />
      </Routes>
    </div>
  );
}

export default App;
