import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectGallery from "./components/ProjectGallery";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projectgallery" element={<ProjectGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
