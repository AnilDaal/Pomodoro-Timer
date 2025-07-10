// App.jsx
import React, { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

function App() {
  const [sessionCount, setSessionCount] = useState(
    parseInt(localStorage.getItem("sessionCount")) || 0
  );

  const incrementSession = () => {
    setSessionCount((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("sessionCount", newCount);
      return newCount;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer 🍅</h1>
      <Timer onSessionComplete={incrementSession} />
      <Counter count={sessionCount} />
    </div>
  );
}

export default App;


// components/Timer.jsx
import React, { useState, useEffect, useRef } from "react";

const Timer = ({ onSessionComplete }) => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            onSessionComplete();
            return 25 * 60; // Reset timer
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="text-center mb-6">
      <div className="text-5xl font-mono mb-4">{formatTime(secondsLeft)}</div>
      <div className="space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setSecondsLeft(25 * 60);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;


// components/Counter.jsx
import React from "react";

const Counter = ({ count }) => {
  return (
    <div className="text-xl text-gray-700 mt-4">
      ✅ Pomodoro Sessions Completed: <strong>{count}</strong>
    </div>
  );
};

export default Counter;


// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: sans-serif;
}