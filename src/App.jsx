import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Pomodoro Timer 🍅</h1>
          <Timer />
        </div>
      </div>
    </>
  );
}

export default App;
