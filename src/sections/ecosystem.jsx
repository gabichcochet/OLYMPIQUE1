import React from "react";
import FlipCard from "../components/FlipCard";
import SectionTitle from "../components/SectionTitle";
import { ecosystemData } from "../data/ecosystem";

export default function Ecosystem() {
  return (
    <section id="ecosysteme" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionTitle
          eyebrow="Section 1"
          title="Infographie interactive de l'écosystème des JO Paris 2024"
          description="Transposition du schéma d’écosystème en cartes interactives : gouvernance, sites, budget et héritage."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">

          {ecosystemData.map((card) => (
            <FlipCard
              key={card.title}
              title={card.title}
              colorClass={card.color}
              items={card.items}
            />
          ))}

        </div>

        {/* Centre visuel */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-black text-slate-900">JO Paris 2024</h2>
          <p className="text-slate-600 mt-2">Écosystème</p>
        </div>

      </div>
    </section>
  );
}
