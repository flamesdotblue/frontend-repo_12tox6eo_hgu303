import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Smart Data Workspace Pro',
    tag: 'Interactive data cleaning & visualization dashboard',
    tech: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    github: 'https://github.com/',
    live: '#',
    description:
      'A unified surface for data wrangling, exploration, and storytelling. Clean, transform, and visualize with fluid interactions.',
  },
  {
    title: 'UBS Risk Intelligence',
    tag: 'Fraud detection & analytics',
    tech: ['Python', 'Scikit-learn', 'Power BI'],
    github: 'https://github.com/',
    live: '#',
    description:
      'A risk analytics toolkit with supervised models and reporting pipelines to surface anomalies and fraud signals.',
  },
  {
    title: 'Financial Analytics Dashboard',
    tag: 'Predictive insights & visual KPIs',
    tech: ['Tableau', 'SQL', 'Python'],
    github: 'https://github.com/',
    live: '#',
    description:
      'An executive dashboard providing KPI rollups, forecasting, and scenario analysis for decision support.',
  },
  {
    title: 'Zidio P-3 AI Chatbot',
    tag: 'AI-driven conversational analytics',
    tech: ['Python', 'FastAPI', 'NLP'],
    github: 'https://github.com/',
    live: '#',
    description:
      'A conversational interface to query datasets with natural language, surfacing insights and visual summaries on demand.',
  },
];

function useBpmPulse(bpm = 86) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setT((v) => v + 1), (60_000 / bpm) | 0);
    return () => clearInterval(interval);
  }, [bpm]);
  return t;
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative z-10 w-[92%] max-w-2xl overflow-hidden rounded-2xl border border-emerald-400/30 bg-[#0b0f0d] p-6 text-white shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-emerald-300">{project.title}</h3>
            <p className="mt-1 text-sm text-white/70">{project.tag}</p>
          </div>
          <button onClick={onClose} className="rounded-md border border-white/10 px-2 py-1 text-sm hover:bg-white/5">Close</button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-3">
            <h4 className="text-sm text-emerald-300">Animated Pie</h4>
            <AnimatedPie />
          </div>
          <div className="rounded-xl border border-white/10 p-3">
            <h4 className="text-sm text-emerald-300">Live Line</h4>
            <AnimatedLine />
          </div>
        </div>

        <div className="mt-4 text-sm leading-relaxed text-white/80">{project.description}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a href={project.github} target="_blank" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 hover:border-emerald-400/40 hover:bg-emerald-500/10">
            <Github size={16} /> GitHub
          </a>
          <a href={project.live} target="_blank" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 hover:border-emerald-400/40 hover:bg-emerald-500/10">
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedPie() {
  const t = useBpmPulse(92);
  const val = (t % 10) / 10;
  const size = 120;
  const r = 52;
  const c = 2 * Math.PI * r;
  const dash = c * val;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="mx-auto mt-2">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r={r} fill="url(#g)" stroke="#164e3d" strokeWidth="1" />
      <circle cx="60" cy="60" r={r} fill="transparent" stroke="#00FF7F" strokeWidth="4" strokeDasharray={`${dash} ${c}`} transform="rotate(-90 60 60)" />
    </svg>
  );
}

function AnimatedLine() {
  const t = useBpmPulse(92);
  const pts = Array.from({ length: 24 }, (_, i) => [i * 10, 40 + Math.sin((i + t / 2) * 0.4) * 18]);
  const d = `M ${pts.map((p) => p.join(',')).join(' L ')}`;
  return (
    <svg viewBox="0 0 230 80" className="mt-2 w-full">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00FF7F" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#lg)" strokeWidth="2" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#00FF7F" />
      ))}
    </svg>
  );
}

export default function ProjectsIslands() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-black via-[#08120e] to-black py-24 text-white overflow-hidden">
      {/* Moving clouds */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-40 top-10 h-24 w-72 animate-drift rounded-full bg-gradient-to-r from-white/10 to-transparent blur-2xl" />
        <div className="absolute -left-52 top-40 h-20 w-60 animate-drift delay-300 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-2xl" />
      </div>

      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(ellipse at top, rgba(16,185,129,0.2), transparent 40%), radial-gradient(ellipse at bottom, rgba(16,185,129,0.12), transparent 40%)' }} />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          className="font-[Cinzel] text-2xl sm:text-4xl font-bold text-emerald-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Islands of Creation
        </motion.h2>
        <p className="mt-2 text-sm text-emerald-200/70">Sail between projects; each island holds a forged craft.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-[#0c1311] p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:scale-125" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-400 opacity-70" />
              <h3 className="text-lg font-semibold text-emerald-300">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.tag}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">{t}</span>
                ))}
              </div>
              <button
                onClick={() => setActive(p)}
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200 hover:bg-emerald-500/20"
              >
                Explore
              </button>
              <div className="mt-3 text-xs text-emerald-300/70">“Only those who risk going too far can find their limits.”</div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>{active && <Modal project={active} onClose={() => setActive(null)} />}</AnimatePresence>

      <style>{`
        .animate-drift { animation: drift 22s linear infinite; }
        .delay-300 { animation-delay: 6s; }
        @keyframes drift { 0% { transform: translateX(0) } 100% { transform: translateX(120vw) } }
      `}</style>
    </section>
  );
}
