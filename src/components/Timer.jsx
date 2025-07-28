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
        } text-[160px] font-[ButcountGridSingle-Black] font-bold m-3`}
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
                    ? "bg-green-300 cursor-pointer "
                    : "bg-green-600 cursor-pointer "
                }`
              : "cursor-pointer"
          } hover:bg-green-400 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 active:bg-green-300 px-4 ml-3 py-1 rounded border-1 border-black-900`}
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
                    ? "bg-orange-300 cursor-pointer "
                    : "bg-orange-600 cursor-pointer "
                }`
              : "cursor-pointer"
          } hover:bg-orange-400 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 active:bg-orange-300 px-4 ml-3 py-1 rounded border-1 border-black-900`}
        >
          ⏯️ Pause
        </button>
        <button
          onClick={() => {
            reset();
            setIsRunning(null);
          }}
          className={` ${darkMode ? `text-[whitesmoke]` : `text-[black]`} cursor-pointer px-4 py-1 ml-3 rounded border-1 border-black-900  hover:bg-gray-300 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 active:bg-red-300 `}
        >
          🔁 Reset
        </button>
      </div>
      <div className="m-3 font-bold text-[17px]">Session Count:{session}</div>
    </>
  );
}

export default Timer;
