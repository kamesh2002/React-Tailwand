import React from "react";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Responsive Navbar App</h1>
      </main>
    </div>
  );
}
