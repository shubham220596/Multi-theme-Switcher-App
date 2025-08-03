import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HeaderOrSidebar from "./components/Header";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function Layout() {
  const { theme } = useTheme();
  const isSidebar = theme === "theme2";

  return (
    <div className="min-h-screen transition-all duration-300 flex">
      <HeaderOrSidebar />
      <main
        className={`flex-1 transition-all duration-300 p-4
          ${isSidebar ? "ml-56 mt-4" : "mt-16"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}
