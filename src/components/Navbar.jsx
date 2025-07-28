import { useState, useEffect } from "react";

export const Navbar = function ({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simulate Pomodoro active state for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 3000); // Toggle every 5 seconds for demo

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-100 ${darkMode ? "bg-gradient-to-r from-purple-900 to-blue-900" : "bg-gradient-to-r from-purple-100 to-blue-100"} shadow-md transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex-shrink-0 flex items-center">
            <h1
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"} transition-colors duration-300`}
            >
              FocusSync
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink text="Dashboard" active={true} darkMode={darkMode} />
              <NavLink text="Timer" active={false} darkMode={darkMode} />
              <NavLink text="History" active={false} darkMode={darkMode} />
              <NavLink text="Settings" active={false} darkMode={darkMode} />
            </div>
          </div>

          {/* Right side items */}
          <div className=" md:flex items-center space-x-5">
            {/* Pomodoro Status Icon */}
            <div
              className={`relative ${isActive ? (darkMode ? "text-red-400" : "text-red-500") : darkMode ? "text-gray-400" : "text-gray-500"} transition-colors duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {isActive && (
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 flex items-center ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full p-1 transition-colors duration-300`}
            >
              <div
                className={`flex justify-center items-center w-5 h-5 rounded-full transform transition-transform duration-300 ${darkMode ? "translate-x-6 bg-blue-200" : "translate-x-0 bg-yellow-300"}`}
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-yellow-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </div>
            </button>

            {/* User Greeting */}
            <div
              className={`${darkMode ? "text-white" : "text-gray-800"} font-medium transition-colors duration-300`}
            >
              Hello, Anil 👋
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Pomodoro Status Icon - Mobile */}
            <div
              className={`relative ${isActive ? (darkMode ? "text-red-400" : "text-red-500") : darkMode ? "text-gray-400" : "text-gray-500"} transition-colors duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {isActive && (
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? "text-gray-200 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"} transition-colors duration-300`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? "bg-gradient-to-r from-purple-900 to-blue-900" : "bg-gradient-to-r from-purple-100 to-blue-100"}`}
        >
          <MobileNavLink text="Dashboard" active={true} darkMode={darkMode} />
          <MobileNavLink text="Timer" active={false} darkMode={darkMode} />
          <MobileNavLink text="History" active={false} darkMode={darkMode} />
          <MobileNavLink text="Settings" active={false} darkMode={darkMode} />
        </div>
        <div
          className={`pt-4 pb-3 border-t ${darkMode ? "border-gray-700 bg-gradient-to-r from-purple-900 to-blue-900" : "border-gray-200 bg-gradient-to-r from-purple-100 to-blue-100"}`}
        >
          <div className="flex items-center justify-between px-5">
            <div
              className={`${darkMode ? "text-white" : "text-gray-800"} font-medium transition-colors duration-300`}
            >
              Hello, Anil 👋
            </div>
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-5 flex items-center ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full p-1 transition-colors duration-300`}
            >
              <div
                className={`flex justify-center items-center w-4 h-4 rounded-full transform transition-transform duration-300 ${darkMode ? "translate-x-5 bg-blue-200" : "translate-x-0 bg-yellow-300"}`}
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2 text-yellow-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ text, active, darkMode }) => {
  return (
    <a
      href="#"
      className={`relative px-1 py-2 text-sm font-medium ${
        active
          ? darkMode
            ? "text-white"
            : "text-gray-900"
          : darkMode
            ? "text-gray-300 hover:text-white"
            : "text-gray-600 hover:text-gray-900"
      } transition-colors duration-300 group`}
    >
      {text}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 ${
          active
            ? darkMode
              ? "bg-blue-400"
              : "bg-blue-600"
            : "bg-transparent group-hover:bg-gray-300"
        } transform origin-left transition-all duration-300 ease-out`}
      ></span>
    </a>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ text, active, darkMode }) => {
  return (
    <a
      href="#"
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        active
          ? darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-900"
          : darkMode
            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
      } transition-colors duration-300`}
    >
      {text}
    </a>
  );
};
