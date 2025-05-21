import React, { useState } from "react";

function App() {
  const [grievances, setGrievances] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    anger: 5,
    love: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGrievances([...grievances, form]);
    setForm({ title: "", description: "", anger: 5, love: 5 });
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-pink-600">💔 Grievance Portal</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Complaint Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="What did they do this time? 😤"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div>
          <label className="block text-sm font-medium">🔥 Anger Level: {form.anger}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={form.anger}
            onChange={(e) => setForm({ ...form, anger: e.target.value })}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">❤️ Love Meter: {form.love}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={form.love}
            onChange={(e) => setForm({ ...form, love: e.target.value })}
            className="w-full"
          />
        </div>
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded w-full">
          📩 Submit Grievance
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">📝 Grievance Log</h2>
        {grievances.length === 0 ? (
          <p>No complaints yet. Shocking. 😇</p>
        ) : (
          grievances.map((g, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-lg mb-4 bg-white shadow">
              <p className="font-semibold text-lg">🔖 {g.title}</p>
              <p>{g.description}</p>
              <p>🔥 Anger: {g.anger} / ❤️ Love: {g.love}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;