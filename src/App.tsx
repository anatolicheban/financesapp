import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/UI/Wrapper";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
