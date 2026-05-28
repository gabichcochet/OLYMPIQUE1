import React, { useState } from "react";

const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  indigo: "bg-indigo-500",
  orange: "bg-orange-500",
};

export default function FlipCard({ title, colorClass, items }) {
  const [flipped, setFlipped] = useState(false);
  const bgColor = colorMap[colorClass] || "bg-blue-500";

  return (
    <div
      className="relative h-48 w-64 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 rounded-2xl ${bgColor} text-white flex flex-col items-center justify-center p-4 backface-hidden`}
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm opacity-80">Cliquer pour afficher les informations</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl bg-white text-slate-900 p-4 rotate-y-180 backface-hidden shadow-lg">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <ul className="list-disc pl-4 space-y-1 text-sm">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
