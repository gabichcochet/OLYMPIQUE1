import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Medal,
  Building2,
  Radio,
  MapPinned,
  Trophy,
  Activity,
  Bike,
  Briefcase,
  Shield,
  Languages,
  ScanLine,
  Leaf,
  ChevronRight,
} from "lucide-react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const ecosystemNodes = [
  {
    title: "CIO",
    icon: Medal,
    color: "from-blue-600 to-cyan-500",
    description:
      "Pilote la gouvernance olympique, fixe le cadre, supervise l'organisation et veille au respect des valeurs olympiques.",
    details: ["Gouvernance", "Vision stratégique", "Coordination internationale"],
  },
  {
    title: "Athlètes",
    icon: Trophy,
    color: "from-red-500 to-orange-400",
    description:
      "Acteurs centraux des Jeux, ils incarnent la performance, la médiatisation et l'impact humain de l'événement.",
    details: ["Performance", "Inspiration", "Engagement"],
  },
  {
    title: "Sponsors",
    icon: Building2,
    color: "from-yellow-500 to-amber-400",
    description:
      "Ils soutiennent le financement, l'innovation et la visibilité des Jeux à travers des partenariats stratégiques.",
    details: ["Financement", "Image de marque", "Technologies"],
  },
  {
    title: "Villes hôtes",
    icon: MapPinned,
    color: "from-emerald-500 to-green-400",
    description:
      "Elles accueillent les infrastructures, organisent les flux et portent l'héritage territorial post-Jeux.",
    details: ["Infrastructures", "Mobilité", "Aménagement"],
  },
  {
    title: "Médias",
    icon: Radio,
    color: "from-violet-500 to-fuchsia-500",
    description:
      "Ils diffusent l'événement, racontent les performances et amplifient l'expérience des publics du monde entier.",
    details: ["Diffusion", "Narration", "Audience mondiale"],
  },
];

const athleteData = [
  { event: "100m", score: 9.84, benchmark: 9.79, consistency: 92 },
  { event: "200m", score: 19.78, benchmark: 19.62, consistency: 88 },
  { event: "Relais", score: 37.9, benchmark: 37.5, consistency: 90 },
];

const athleteTrend = [
  { period: "S1", performance: 78 },
  { period: "S2", performance: 81 },
  { period: "S3", performance: 85 },
  { period: "S4", performance: 89 },
  { period: "S5", performance: 92 },
];

const impactItems = [
  {
    title: "Logements reconvertis",
    value: "2 800",
    note: "Les logements du Village des Athlètes doivent être réutilisés pour des familles, étudiants et seniors.",
    icon: Building2,
  },
  {
    title: "Logements sociaux",
    value: "25 à 40 %",
    note: "Part annoncée selon les communes, avec un enjeu fort de mixité sociale.",
    icon: Medal,
  },
  {
    title: "Pistes cyclables",
    value: "120 km",
    note: "Aménagements pensés pour fluidifier la mobilité et reconnecter certains territoires.",
    icon: Bike,
  },
  {
    title: "Emploi local",
    value: "enjeu durable",
    note: "Transformation souhaitée des emplois créés pendant les Jeux en opportunités plus stables.",
    icon: Briefcase,
  },
];

const innovationData = [
  {
    name: "Vidéosurveillance algorithmique",
    category: "Sécurité",
    effectiveness: 82,
    acceptability: 42,
    durability: 50,
    icon: Shield,
    summary:
      "Peut améliorer la prévention, mais soulève des questions de libertés publiques et de gouvernance.",
  },
  {
    name: "3D Athlete Tracking",
    category: "Sport",
    effectiveness: 91,
    acceptability: 74,
    durability: 84,
    icon: ScanLine,
    summary:
      "Fort potentiel pour l'entraînement de haut niveau, la biomécanique et la prévention des blessures.",
  },
  {
    name: "Traduction instantanée",
    category: "Spectateurs",
    effectiveness: 86,
    acceptability: 89,
    durability: 80,
    icon: Languages,
    summary:
      "Très utile pour l'accessibilité linguistique dans les grands événements, le tourisme et les transports.",
  },
  {
    name: "Monitoring énergétique",
    category: "Durabilité",
    effectiveness: 84,
    acceptability: 83,
    durability: 88,
    icon: Leaf,
    summary:
      "Prometteur pour pérenniser des usages écoresponsables après les Jeux.",
  },
];

const olympicPalette = [
  "bg-blue-600",
  "bg-yellow-400",
  "bg-black",
  "bg-green-500",
  "bg-red-500",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function StatCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
        <Icon className="h-6 w-6 text-slate-700" />
      </div>
      <p className="text-sm text-slate-500">{item.title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
    </div>
  );
}

function FlipCard({ title, colorClass, items }) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`flip-card ${colorClass}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <h3>{title}</h3>
          <p>Cliquer pour afficher les informations</p>
        </div>

        <div className="flip-card-back">
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [selectedNode, setSelectedNode] = useState(ecosystemNodes[0]);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", ...new Set(innovationData.map((item) => item.category))];

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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-white/20 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <div className="flex gap-1.5">
              {olympicPalette.map((item) => (
                <span key={item} className={`h-4 w-4 rounded-full ${item}`} />
              ))}
            </div>
            <span>JO Paris 2024 — Webapp</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#/ecosysteme" className="hover:text-slate-900">Écosystème</a>
            <a href="#/athlete" className="hover:text-slate-900">Athlète</a>
            <a href="#/heritage" className="hover:text-slate-900">Héritage</a>
            <a href="#/innovations" className="hover:text-slate-900">Innovations</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.12),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
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
                  Cette webapp transpose les quatre exercices du projet en une expérience React moderne : navigation claire, cartes interactives, dashboard athlète, récit immersif et analyse des innovations.
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

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200"
            >
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-900 to-blue-600 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-blue-100">Structure attendue</p>
                <div className="mt-6 grid gap-3">
                  {["Accueil & navigation", "Écosystème JO interactif", "Dashboard athlète", "Récit sur l'héritage", "Rapport innovations"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
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

<section id="ecosysteme">
  <h2 style={{ textAlign: "center" }}>JO Paris 2024 – Écosystème</h2>

  <div className="ecosystem">
    <FlipCard
      title="1. Gouvernance"
      colorClass="blue"
      items={[
        "CIO : supervision internationale, financement global, définition des règles olympiques",
        "CNOSF : soutien aux athlètes français, organisation des sélections nationales",
        "COJO Paris 2024 : coordination des sites et infrastructures, gestion opérationnelle",
        "Solideo : construction et livraison des infrastructures, suivi des chantiers",
        "Partenaires locaux : collectivités territoriales et sponsors officiels",
      ]}
    />

    <FlipCard
      title="2. Sites olympiques"
      colorClass="green"
      items={[
        "Paris intra-muros : Stade de France, Centre Aquatique, Roland-Garros, etc.",
        "Seine-Saint-Denis : Village Olympique, arénas, stades et complexes sportifs",
        "Cartographie synthétique par discipline sportive",
      ]}
    />

    <div className="center">
      <h2>JO Paris 2024</h2>
      <p>Écosystème</p>
    </div>

    <FlipCard
      title="3. Budget et financement"
      colorClass="orange"
      items={[
        "Coût global : 11 milliards €",
        "Répartition : infrastructures (50 %)",
        "Sécurité et logistique : 20 %",
        "Organisation et marketing : 15 %",
        "Sources : État français, sponsors privés, CIO, billetterie",
      ]}
    />

    <FlipCard
      title="4. Héritage durable"
      colorClass="yellow"
      items={[
        "Logements : Village Olympique transformé en résidences pour habitants",
        "Transports : modernisation du métro, tramway, nouvelles lignes et stations",
        "Équipements sportifs : nouvelles arénas, piscines et terrains accessibles",
        "Initiatives écologiques : énergie verte, matériaux recyclés, mobilité durable",
      ]}
    />
  </div>
</section>

        <section id="athlete" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
              eyebrow="Section 2"
              title="Dashboard de performance d'un athlète"
              description="Le brief demande un tableau analytique transformé en dashboard interactif avec graphiques, animation et possibilité de tri ou de filtre."
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Profil d'exemple</p>
                <h3 className="mt-3 text-3xl font-black">Athlète olympique</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Cette section est prête pour accueillir les données réelles de votre exercice 2. J'ai préparé une structure React déjà fonctionnelle, avec un encart bio, des métriques clés et deux graphiques.
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

              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="mb-4 text-lg font-bold">Comparaison par épreuve</p>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={athleteData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="event" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="consistency" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="mb-4 text-lg font-bold">Progression sur 5 périodes</p>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={athleteTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="period" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="performance" strokeWidth={3} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="heritage" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Section 3"
            title="Récit immersif sur l'héritage olympique"
            description="Le témoignage d'habitante de Saint-Denis évoque les logements reconvertis, les équipements publics, les mobilités, l'emploi et les risques de gentrification."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              {impactItems.map((item) => (
                <StatCard key={item.title} item={item} />
              ))}
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-2xl shadow-slate-300">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Voix d'habitante</p>
              <h3 className="mt-3 text-3xl font-black">Nadia, 38 ans, Saint-Denis</h3>
              <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
                <p>
                  « Les JO ont apporté des investissements visibles : logements, écoles, crèches, gymnases, espaces verts et nouvelles connexions de mobilité. »
                </p>
                <p>
                  « Mais je reste vigilante : qui habitera vraiment ces nouveaux logements, et qui profitera réellement de cet héritage ? »
                </p>
                <p>
                  « L'olympisme social ne doit pas rester un slogan. Il faut une gouvernance transparente, un suivi de l'emploi local et une vraie accessibilité des équipements. »
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Opportunités</p>
                  <p className="mt-2 text-sm text-slate-200">Logements, services publics, sport, mobilité, attractivité territoriale.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Points de vigilance</p>
                  <p className="mt-2 text-sm text-slate-200">Mixité sociale, accessibilité, gestion future, coûts, effets d'exclusion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="innovations" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
              eyebrow="Section 4"
              title="Rapport interactif sur les innovations technologiques"
              description="Votre rapport distingue plusieurs innovations et les évalue selon l'efficacité, l'acceptabilité et la pérennité. J'ai repris cette logique dans une interface filtrable avec radar chart."
            />

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
              <div className="grid gap-4">
                {filteredInnovations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl bg-white p-3 shadow-sm">
                            <Icon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.category}</p>
                            <h3 className="mt-1 text-xl font-bold text-slate-900">{item.name}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                          </div>
                        </div>
                      </div>
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

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="mb-4 text-lg font-bold">Visualisation d'impact</p>
                <div className="h-[28rem]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="innovation" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar name="Efficacité" dataKey="Efficacité" fillOpacity={0.35} />
                      <Radar name="Acceptabilité" dataKey="Acceptabilité" fillOpacity={0.2} />
                      <Radar name="Pérennité" dataKey="Pérennité" fillOpacity={0.18} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800">Lecture recommandée</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Votre analyse montre que certaines technologies ont un fort potentiel durable, comme la traduction instantanée ou le 3D Athlete Tracking, tandis que d'autres nécessitent un encadrement éthique plus strict, notamment la vidéosurveillance algorithmique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Projet React prêt à être adapté, testé puis déployé sur Vercel ou Netlify.</p>
          <p>Remplace les données d'exemple de l'athlète par votre vrai exercice 2 pour finaliser le rendu.</p>
        </div>
      </footer>
    </div>
  );
}
