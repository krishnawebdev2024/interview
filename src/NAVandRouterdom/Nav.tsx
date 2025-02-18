import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">MyWebsite</div>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="text-white lg:hidden block">
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Links - Desktop */}
        <div className="hidden lg:flex space-x-6 text-white">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Responsive */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-600 p-4 text-white">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/about" className="block py-2">
            About
          </Link>
          <Link to="/services" className="block py-2">
            Services
          </Link>
          <Link to="/contact" className="block py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
