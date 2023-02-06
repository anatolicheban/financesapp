import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/UI/Wrapper";
import Categories from "./pages/Categories";
import Exchange from "./pages/Exchange";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="add" element={<Add />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
