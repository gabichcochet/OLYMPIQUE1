import React, { useState } from "react";

export default function FlipCard({ title, colorClass, items }) {
  const [flipped, setFlipped] = useState(false);

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
          className={`absolute inset-0 rounded-2xl bg-${colorClass}-500 text-white flex flex-col items-center justify-center p-4 backface-hidden`}
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
