import { useState } from "react";
import Timer from "./components/Timer";
import { Navbar } from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`min-h-screen flex flex-col items-center justify-center font-['Inter'] ${
          darkMode ? `bg-gray-800` : `bg-gray-100`
        } p-4`}
      >
        <div
          className={`${
            darkMode ? `bg-[#4b4f58]` : `bg-white`
          } p-6 rounded-lg shadow-2xs text-center`}
        >
          <h1
            className={`${
              darkMode ? `text-[whitesmoke]` : `text-[black]`
            } text-3xl font-bold mb-4`}
          >
            Pomodoro Timer🍅
          </h1>
          <Timer darkMode={darkMode} />

          {/* Theme toggle removed from here as it's now in the navbar */}
        </div>
      </div>
    </div>
  );
}

export default App;
