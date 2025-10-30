import { useState } from 'react';
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

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative z-10 w-[92%] max-w-2xl rounded-2xl border border-emerald-400/30 bg-[#0b0f0d] p-6 text-white shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-emerald-300">{project.title}</h3>
            <p className="mt-1 text-sm text-white/70">{project.tag}</p>
          </div>
          <button onClick={onClose} className="rounded-md border border-white/10 px-2 py-1 text-sm hover:bg-white/5">Close</button>
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

export default function ProjectsIslands() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-black via-[#08120e] to-black py-20 text-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(ellipse at top, rgba(16,185,129,0.2), transparent 40%), radial-gradient(ellipse at bottom, rgba(16,185,129,0.12), transparent 40%)' }} />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          className="font-[Cinzel] text-2xl sm:text-4xl font-bold text-emerald-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Islands of Creation
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
    </section>
  );
}
