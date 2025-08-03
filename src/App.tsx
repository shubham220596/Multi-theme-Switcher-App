import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <>
    <ThemeProvider>
      <Router>
          <div className="min-h-screen transition-all duration-300">
            <Header />
            <div className="p-4 mt-16">
              <Routes>
                <Route path="" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
              </Routes>
            </div>
          </div>
      </Router>
    </ThemeProvider>
    </>
   
  )
}