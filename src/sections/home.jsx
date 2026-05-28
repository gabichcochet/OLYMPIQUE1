import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { ChevronRight } from "lucide-react";

const olympicPalette = [
  "bg-blue-600",
  "bg-yellow-400",
  "bg-black",
  "bg-green-500",
  "bg-red-500",
];

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.12),_transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">

        {/* LEFT SIDE — Text + CTA */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
          >
            Projet Vibe Coding
          </motion.div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Explorer l'écosystème, les performances, l'héritage et les innovations des JO Paris 2024.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Cette webapp transpose les quatre exercices du projet en une expérience React moderne :
              navigation claire, cartes interactives, dashboard athlète, récit immersif et analyse des innovations.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#ecosysteme"
              className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
            >
              Voir la démo
            </a>

            <a
              href="#innovations"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Aller aux innovations
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200"
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-900 to-blue-600 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-100">Structure attendue</p>

            <div className="mt-6 grid gap-3">
              {[
                "Accueil & navigation",
                "Écosystème JO interactif",
                "Dashboard athlète",
                "Récit sur l'héritage",
                "Rapport innovations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <span className="text-sm font-medium">{item}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.5rem] bg-blue-50 p-5">
              <p className="text-sm text-slate-500">UX visée</p>
              <p className="mt-2 text-2xl font-bold">Simple, claire, responsive</p>
            </div>

            <div className="rounded-[1.5rem] bg-red-50 p-5">
              <p className="text-sm text-slate-500">Interactivité</p>
              <p className="mt-2 text-2xl font-bold">Filtres, hover, graphiques</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
