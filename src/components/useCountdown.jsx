import { useReducer, useEffect } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isRunning: true,
      };

    case "changeMode":
      return {
        ...state,
        mode: state.mode === "work" ? "break" : "work",
      };
    case "countdown":
      return {
        ...state,
        timer: state.timer - 1,
      };

    case "break":
      return {
        ...state,
        timer: action.payload,
      };

    case "pause":
      return {
        ...state,
        isRunning: !state.isRunning,
      };

    case "reset":
      return {
        ...state,
        isRunning: false,
        timer: action.payload,
      };

    default:
      return new Error("Type not availble");
  }
}

export function useCountdown(initialValue = 1500) {
  const [{ mode, timer, isRunning }, dispatch] = useReducer(reducer, {
    mode: "work",
    timer: initialValue || 1,
    isRunning: false,
  });

  useEffect(() => {
    let time;
    if (isRunning && timer > 0) {
      time = setInterval(() => {
        dispatch({ type: "countdown" });
      }, 1000);
    }
    return () => clearInterval(time);
  }, [isRunning, timer]);

  useEffect(() => {
    if (mode === "break") dispatch({ type: "break", payload: 300 });
  }, [mode]);

  const start = () => {
    if (timer > 0) {
      dispatch({ type: "start" });
    }
  };

  const pause = () => {
    dispatch({ type: "pause" });
  };

  const reset = () => {
    dispatch({ type: "reset", payload: initialValue });
  };

  const breakTime = () => {
    dispatch({ type: "break", payload: 300 });
  };

  const changeMode = () => {
    dispatch({ type: "changeMode" });
  };
  return { breakTime, reset, pause, start, changeMode, mode, timer, isRunning };
}

export default useCountdown;
