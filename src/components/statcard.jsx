import React from "react";

export default function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      
      {/* Icône */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
        <Icon className="h-6 w-6 text-slate-700" />
      </div>

      {/* Titre */}
      <p className="text-sm text-slate-500">{item.title}</p>

      {/* Valeur */}
      <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>

      {/* Note / description */}
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
    </div>
  );
}
