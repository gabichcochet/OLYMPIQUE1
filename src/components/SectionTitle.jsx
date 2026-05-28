import React from "react";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      <p className="text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
