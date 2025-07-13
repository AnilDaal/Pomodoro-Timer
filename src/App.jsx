import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen flex flex-col items-center justify-center font-mono  ${
          darkMode ? `bg-gray-800` : `bg-gray-100`
        } p-4`}
      >
        <div
          className={`${
            darkMode ? `bg-[#4b4f58]` : `bg-white`
          } p-6 rounded-lg shadow-lg text-center`}
        >
          <h1
            className={`${
              darkMode ? `text-[whitesmoke]` : `text-[black]`
            } text-3xl font-bold mb-4`}
          >
            Pomodoro Timer🍅
          </h1>
          <Timer darkMode={darkMode} />
          <div
            className={`${
              darkMode ? `text-[whitesmoke]` : `text-[black]`
            }  flex flex-col items-center justify-center text-center`}
          >
            <span>Toggle Theme: {darkMode ? "Dark" : "Light"}</span>
            <span>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className={`w-12 h-6 flex items-center ${
                  darkMode ? `bg-[whitesmoke]` : `bg-[black]`
                }  rounded-full p-[2px] transition duration-300`}
              >
                <div
                  className={`w-5 h-5 ${
                    !darkMode ? `bg-[whitesmoke]` : `bg-[black]`
                  }  rounded-full shadow-md transform transition duration-400 ${
                    darkMode === true ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  {" "}
                </div>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
