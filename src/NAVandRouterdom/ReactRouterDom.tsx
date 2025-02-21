import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components
import Navbar from "./Navbar"; // Import the Navbar component
import Home from "./pages/Home"; // Import individual page components
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap everything with Router */}
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        {/* Define Routes for different paths */}
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/services" element={<Services />} />{" "}
        {/* Services page route */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Contact page route */}
      </Routes>
    </Router>
  );
};

export default App;
