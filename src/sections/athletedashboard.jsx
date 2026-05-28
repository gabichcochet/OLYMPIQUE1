import React from "react";
import SectionTitle from "../components/SectionTitle";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

import { athleteData, athleteTrend } from "../data/athlete";

export default function AthleteDashboard() {
  return (
    <section id="athlete" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <SectionTitle
          eyebrow="Section 2"
          title="Dashboard de performance d'un athlète"
          description="Transposition du tableau analytique en dashboard interactif avec graphiques, animation et possibilité de tri ou de filtre."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">

          {/* Bloc bio / résumé */}
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Profil d'exemple
            </p>

            <h3 className="mt-3 text-3xl font-black">Athlète olympique</h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Cette section est prête pour accueillir les données réelles de votre exercice 2.
              Elle inclut un encart bio, des métriques clés et deux graphiques interactifs.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-400">Discipline</p>
                <p className="mt-2 text-lg font-bold">Sprint</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-400">Objectif</p>
                <p className="mt-2 text-lg font-bold">Finale</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-slate-400">Forme</p>
                <p className="mt-2 text-lg font-bold">92%</p>
              </div>
            </div>
          </div>

          {/* Graphiques */}
          <div className="grid gap-6">

            {/* Bar chart */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="mb-4 text-lg font-bold">Comparaison par épreuve</p>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={athleteData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="event" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="consistency" radius={[8, 8, 0, 0]} fill="#1e293b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Line chart */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="mb-4 text-lg font-bold">Progression sur 5 périodes</p>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={athleteTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="performance"
                      stroke="#1e40af"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
