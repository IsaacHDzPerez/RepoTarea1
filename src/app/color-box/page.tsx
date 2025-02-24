"use client";

import { useState } from "react";

export default function ColorBoxPage() {
  const [color, setColor] = useState("bg-gray-500");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h2 className="text-2xl font-bold">Cambia el color del rectángulo</h2>
      <div className={`w-64 h-64 ${color} transition-all duration-300 rounded-lg shadow-md`} />
      <div className="flex gap-4">
        <button onClick={() => setColor("bg-red-500")} className="bg-red-500 text-white px-4 py-2 rounded">Rojo</button>
        <button onClick={() => setColor("bg-blue-500")} className="bg-blue-500 text-white px-4 py-2 rounded">Azul</button>
        <button onClick={() => setColor("bg-green-500")} className="bg-green-500 text-white px-4 py-2 rounded">Verde</button>
        <button onClick={() => setColor("bg-yellow-500")} className="bg-yellow-500 text-white px-4 py-2 rounded">Amarillo</button>
      </div>
    </div>
  );
}
