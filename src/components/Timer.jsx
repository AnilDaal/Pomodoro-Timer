import { useState } from "react";
import useCountdown from "./useCountdown";

function Timer() {
  const { relaxTime, reset, pause, start, changeMode, timer, mode, isRunning } =
    useCountdown();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {" "}
      <div className="">
        <span className="text-lg mb-2">Current Mode:</span>
        <span
          onClick={() => changeMode()}
          className="text-blue-600 font-medium cursor-pointer"
        >
          {" "}
          {mode === "work" ? "Work" : "Break"}{" "}
        </span>
      </div>
      <div>{timer}</div>
      <div>
        <button
          onClick={start}
          className=" text-black px-4 ml-3 py-1 rounded border-1 border-black-900"
        >
          ▶ Start
        </button>
        <button
          onClick={pause}
          className=" text-black px-4 py-1 ml-3 rounded border-1 border-black-900"
        >
          ⏸ Pause
        </button>
        <button
          onClick={reset}
          className=" text-black px-4 py-1 ml-3 rounded border-1 border-black-900"
        >
          🔁 Reset
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <span>Toggle Theme</span>
        <span>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-[2px] transition duration-300"
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${
                darkMode === true ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </span>
      </div>
    </>
  );
}

export default Timer;
