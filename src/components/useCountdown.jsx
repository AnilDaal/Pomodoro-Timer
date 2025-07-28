import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isRunning: true,
      };

    case "session":
      return {
        ...state,
        session: action.payload || state.session + 1,
      };

    case "changeMode":
      return {
        ...state,
        mode: action.payload.mode,
        timer: action.payload.time,
      };
    case "countdown":
      return {
        ...state,
        timer: state.timer - 1,
      };

    case "pause":
      return {
        ...state,
        isRunning: false,
      };

    case "reset":
      return {
        ...state,
        isRunning: false,
        timer: action.payload,
      };

    default:
      return { ...state };
  }
}

export function useCountdown(initialValue = 1500) {
  const [{ mode, timer, isRunning, session }, dispatch] = useReducer(reducer, {
    mode: "work",
    timer: initialValue,
    isRunning: false,
    session: 0,
  });

  useEffect(() => {
    let time;
    if (isRunning && timer > 0) {
      time = setInterval(() => {
        dispatch({ type: "countdown" });
      }, 1000);
    }

    if (timer < 1) {
      dispatch({ type: "session" });
    }

    return () => clearInterval(time);
  }, [isRunning, timer]);

  useEffect(() => {
    if (session) localStorage.setItem("session", JSON.stringify(session));
    const localSession = JSON.parse(localStorage.getItem("session"));
    console.log(localSession);
    dispatch({ type: "session", payload: localSession });
  }, [session]);

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

  const changeMode = (mode, time) => {
    dispatch({ type: "changeMode", payload: { mode, time } });
  };
  return {
    breakTime,
    reset,
    pause,
    start,
    changeMode,
    mode,
    timer,
    isRunning,
    session,
  };
}

export default useCountdown;
