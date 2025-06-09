import { useState } from "react";
import dayjs from "dayjs";

const timeSlots = Array.from({ length: 12 }, (_, i) => 8 + i); // 8 AM to 8 PM

export default function App() {
  const [tasks, setTasks] = useState({});
  const [inputText, setInputText] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  const currentHour = dayjs().hour();

  const addTask = () => {
    if (!inputText || !selectedHour) return;
    setTasks((prev) => ({
      ...prev,
      [selectedHour]: [...(prev[selectedHour] || []), inputText],
    }));
    setInputText("");
    setSelectedHour("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">📅 Daily Scheduler</h1>

      {/* Task Input Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        <input
          type="time"
          className="border p-2 rounded w-40"
          onChange={(e) => setSelectedHour(parseInt(e.target.value.split(":")[0]))}
        />
        <input
          type="text"
          placeholder="Enter task..."
          className="border p-2 rounded w-64"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Time Slots Grid */}
      <div className="grid grid-cols-1 gap-4 md:max-w-2xl mx-auto">
        {timeSlots.map((hour) => {
          const formattedTime = dayjs().hour(hour).minute(0).format("h A");
          const isCurrent = hour === currentHour;

          return (
            <div
              key={hour}
              className={`p-4 border rounded-lg shadow-sm flex flex-col transition ${
                isCurrent ? "bg-yellow-100 border-yellow-500" : "bg-white"
              }`}
            >
              <div className="text-sm font-semibold mb-2 text-gray-700">
                {formattedTime}
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {(tasks[hour] || []).map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
