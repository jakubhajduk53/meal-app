import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import AreaPage from "./pages/AreaPage";
import { Header } from "./components/";
import AreaItemsPage from "./pages/AreaItemsPage";
import AreasListPage from "./pages/AreasListPage";
import CategoryItemsPage from "./pages/CategoryItemsPage";
import CategoryListPage from "./pages/CategoryListPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="category" element={<CategoryPage />}>
          <Route path="list" element={<CategoryListPage />} />
          <Route path="items" element={<CategoryItemsPage />} />
        </Route>
        <Route path="area" element={<AreaPage />}>
          <Route path="list" element={<AreasListPage />} />
          <Route path="items" element={<AreaItemsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
