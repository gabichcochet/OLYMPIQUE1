import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

import { innovationData } from "../data/innovations";

export default function Innovations() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", ...new Set(innovationData.map((i) => i.category))];

  const filteredInnovations = useMemo(() => {
    if (selectedCategory === "Toutes") return innovationData;
    return innovationData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const radarData = filteredInnovations.map((item) => ({
    innovation: item.name.split(" ")[0],
    Efficacité: item.effectiveness,
    Acceptabilité: item.acceptability,
    Pérennité: item.durability,
  }));

  return (
    <section id="innovations" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <SectionTitle
          eyebrow="Section 4"
          title="Rapport interactif sur les innovations technologiques"
          description="Analyse filtrable des innovations selon l'efficacité, l'acceptabilité et la pérennité, accompagnée d'une visualisation radar."
        />

        {/* Filtres */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-slate-950 text-white"
                  : "border border-slate-300 bg-white text-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_1fr]">

          {/* Liste des innovations */}
          <div className="grid gap-4">
            {filteredInnovations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.category}
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                      <p className="text-xs text-slate-500">Efficacité</p>
                      <p className="mt-2 text-2xl font-black">{item.effectiveness}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                      <p className="text-xs text-slate-500">Acceptabilité</p>
                      <p className="mt-2 text-2xl font-black">{item.acceptability}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                      <p className="text-xs text-slate-500">Pérennité</p>
                      <p className="mt-2 text-2xl font-black">{item.durability}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Radar chart */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <p className="mb-4 text-lg font-bold">Visualisation d'impact</p>

            <div className="h-[28rem]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="innovation" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar
                    name="Efficacité"
                    dataKey="Efficacité"
                    fill="#1e3a8a"
                    fillOpacity={0.35}
                  />
                  <Radar
                    name="Acceptabilité"
                    dataKey="Acceptabilité"
                    fill="#dc2626"
                    fillOpacity={0.25}
                  />
                  <Radar
                    name="Pérennité"
                    dataKey="Pérennité"
                    fill="#16a34a"
                    fillOpacity={0.2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">Lecture recommandée</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Certaines technologies montrent un fort potentiel durable, comme la traduction
                instantanée ou le 3D Athlete Tracking, tandis que d'autres nécessitent un
                encadrement éthique plus strict, notamment la vidéosurveillance algorithmique.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
