import React from "react";

// Components
import Header from "./components/Header";

// Sections
import Home from "./sections/Home";
import Ecosystem from "./sections/Ecosystem";
import AthleteDashboard from "./sections/AthleteDashboard";
import Heritage from "./sections/Heritage";
import Innovations from "./sections/Innovations";

// Footer (intégré directement ici)
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header global */}
      <Header />

      {/* Sections */}
      <main>
        <Home />
        <Ecosystem />
        <AthleteDashboard />
        <Heritage />
        <Innovations />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Projet React prêt à être adapté, testé puis déployé sur Vercel ou Netlify.</p>
          <p>Remplace les données d'exemple de l'athlète par votre vrai exercice 2 pour finaliser le rendu.</p>
        </div>
      </footer>

    </div>
  );
}
