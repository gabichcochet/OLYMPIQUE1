import React from "react";

const olympicPalette = [
  "bg-blue-600",
  "bg-yellow-400",
  "bg-black",
  "bg-green-500",
  "bg-red-500",
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo + titre */}
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <div className="flex gap-1.5">
            {olympicPalette.map((item) => (
              <span key={item} className={`h-4 w-4 rounded-full ${item}`} />
            ))}
          </div>
          <span>JO Paris 2024 — Webapp</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#ecosysteme" className="hover:text-slate-900">Écosystème</a>
          <a href="#athlete" className="hover:text-slate-900">Athlète</a>
          <a href="#heritage" className="hover:text-slate-900">Héritage</a>
          <a href="#innovations" className="hover:text-slate-900">Innovations</a>
        </nav>
      </div>
    </header>
  );
}
