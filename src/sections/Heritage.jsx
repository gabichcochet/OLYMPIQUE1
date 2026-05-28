import React from "react";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import { impactItems } from "../data/heritage";

export default function Heritage() {
  return (
    <section id="heritage" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

      <SectionTitle
        eyebrow="Section 3"
        title="Récit immersif sur l'héritage olympique"
        description="Témoignage d'habitante de Saint-Denis : logements reconvertis, équipements publics, mobilités, emploi et risques de gentrification."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

        {/* Cartes statistiques */}
        <div className="space-y-6">
          {impactItems.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </div>

        {/* Bloc narratif */}
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-2xl shadow-slate-300">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Voix d'habitante
          </p>

          <h3 className="mt-3 text-3xl font-black">Nadia, 38 ans, Saint-Denis</h3>

          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
            <p>
              « Les JO ont apporté des investissements visibles : logements, écoles, crèches,
              gymnases, espaces verts et nouvelles connexions de mobilité. »
            </p>

            <p>
              « Mais je reste vigilante : qui habitera vraiment ces nouveaux logements,
              et qui profitera réellement de cet héritage ? »
            </p>

            <p>
              « L'olympisme social ne doit pas rester un slogan. Il faut une gouvernance
              transparente, un suivi de l'emploi local et une vraie accessibilité des équipements. »
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Opportunités
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Logements, services publics, sport, mobilité, attractivité territoriale.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Points de vigilance
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Mixité sociale, accessibilité, gestion future, coûts, effets d'exclusion.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
