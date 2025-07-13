import { useState } from "react";
import useCountdown from "./useCountdown";

function Timer({ darkMode }) {
  const { relaxTime, reset, pause, start, changeMode, timer, mode } =
    useCountdown();

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
      <div className="">
        <span
          className={`${
            darkMode ? `text-[whitesmoke]` : `text-[black]`
          }  text-lg mb-2`}
        >
          Current Mode:
        </span>
        <span
          onClick={() => changeMode()}
          className={`${
            darkMode ? `text-[#cd5b5b]` : `text-blue-600 `
          } font-medium cursor-pointer`}
        >
          {" "}
          {mode === "work" ? "Work" : "Break"}{" "}
        </span>
      </div>
      <div
        className={`${
          darkMode ? `text-[whitesmoke]` : `text-[black]`
        } text-[40px] font-[_Arial,_sans-serif] font-bold m-3`}
      >
        {formatTime(timer)}
      </div>
      <div className="m-2">
        <button
          onClick={() => {
            start();
            setIsRunning("start");
          }}
          className={` ${darkMode ? `text-[whitesmoke]` : `text-[black]`}  ${
            isRunning === "start"
              ? `${
                  !darkMode
                    ? "bg-green-300 cursor-none "
                    : "bg-green-600 cursor-none "
                }`
              : "cursor-pointer"
          } hover:bg-gray-300 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 active:bg-green-300 px-4 ml-3 py-1 rounded border-1 border-black-900`}
        >
          ▶️ Start
        </button>
        <button
          onClick={() => {
            pause();
            setIsRunning("pause");
          }}
          className={` ${darkMode ? `text-[whitesmoke]` : `text-[black]`}  ${
            isRunning === "pause"
              ? `${
                  !darkMode
                    ? "bg-orange-300 cursor-none "
                    : "bg-orange-600 cursor-none "
                }`
              : "cursor-pointer"
          } hover:bg-gray-300 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 active:bg-orange-300 px-4 ml-3 py-1 rounded border-1 border-black-900`}
        >
          ⏯️ Pause
        </button>
        <button
          onClick={() => {
            reset();
            setIsRunning(null);
          }}
          className={` ${darkMode ? `text-[whitesmoke]` : `text-[black]`} ${
            isRunning ? "cursor-pointer" : "cursor-none"
          } px-4 py-1 ml-3 rounded border-1 border-black-900  hover:bg-gray-300 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 active:bg-red-300 `}
        >
          🔁 Reset
        </button>
      </div>
    </>
  );
}

export default Timer;
