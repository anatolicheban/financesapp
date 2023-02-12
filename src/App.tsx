import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/UI/Wrapper";
import Categories from "./pages/Categories";
import Exchange from "./pages/Exchange";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("darkMode", true);
  useEffect(() => {
    const bodyClasslist = document.body.classList;
    if (isDarkMode) {
      bodyClasslist.remove("light");
    } else {
      bodyClasslist.add("light");
    }
  }, [isDarkMode]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Wrapper />}>
        <Route element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="add" element={<Add />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="settings"
            element={<Settings isDarkMode={isDarkMode} onChangeMode={setIsDarkMode} />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
