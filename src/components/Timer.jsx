import { act, useState } from "react";
import useCountdown from "./useCountdown";
import Button from "../ui/Button";

function Timer({ darkMode }) {
  const { reset, pause, start, changeMode, timer, mode, session } =
    useCountdown();
  const [active, setActive] = useState("Pomodoro");
  const [isRunning, setIsRunning] = useState(null);

  function formatTime(timer) {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <>
      {" "}
      <div className=" grid grid-cols-3">
        <Button
          name={"Pomodoro"}
          active={active === "Pomodoro"}
          setActive={() => setActive("Pomodoro")}
          handleModeChange={() => changeMode("Pomodoro", 1500)}
        />
        <Button
          name={"Short Break"}
          active={active === "Short Break"}
          setActive={() => setActive("Short Break")}
          handleModeChange={() => changeMode("Short Break", 300)}
        />
        <Button
          name={"Long Break"}
          active={active === "Long Break"}
          setActive={() => setActive("Long Break")}
          handleModeChange={() => changeMode("Long Break", 600)}
        />
      </div>
      <div
        className={`${
          darkMode ? `text-[whitesmoke]` : `text-[black]`
        } text-[160px] font-['Inter'] font-bold m-3 w-[5ch] overflow-hidden leading-none`}
      >
        {formatTime(timer)}
      </div>
      <div className="flex justify-center space-x-4 my-6">
        <button
          onClick={() => {
            start();
            setIsRunning("start");
          }}
          className={`flex items-center justify-center font-['Inter'] font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-300 ${
            darkMode
              ? isRunning === "start"
                ? "bg-green-600 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-green-700"
              : isRunning === "start"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-800 hover:bg-green-100 hover:text-green-800"
          } transform hover:scale-105 hover:shadow-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          Start
        </button>
        <button
          onClick={() => {
            pause();
            setIsRunning("pause");
          }}
          className={`flex justify-center items-center font-['Inter'] font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-300 ${
            darkMode
              ? isRunning === "pause"
                ? "bg-yellow-600 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-yellow-700"
              : isRunning === "pause"
                ? "bg-yellow-500 text-white"
                : "bg-white text-gray-800 hover:bg-yellow-100 hover:text-yellow-800"
          } transform hover:scale-105 hover:shadow-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Pause
        </button>
        <button
          onClick={() => {
            reset(active);
            setIsRunning(null);
          }}
          className={`flex items-center justify-center font-['Inter'] font-medium px-6 py-3 rounded-lg shadow-sm transition-all duration-300 ${
            darkMode
              ? "bg-gray-700 text-gray-200 hover:bg-red-700 hover:text-white"
              : "bg-white text-gray-800 hover:bg-red-100 hover:text-red-800"
          } transform hover:scale-105 hover:shadow-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Reset
        </button>
      </div>
      <div
        className={`mt-6 mb-2 font-['Inter'] font-medium text-lg flex items-center justify-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
        <span>Sessions Completed: </span>
        <span
          className={`ml-2 px-3 py-1 rounded-full ${darkMode ? "bg-blue-900 text-white" : "bg-blue-100 text-blue-800"}`}
        >
          {session}
        </span>
      </div>
    </>
  );
}

export default Timer;
