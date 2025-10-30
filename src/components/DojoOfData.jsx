import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const tabs = [
  { key: 'skills', label: 'Wado Ichimonji', subtitle: 'Technical Skills' },
  { key: 'education', label: 'Sandai Kitetsu', subtitle: 'Education & Certifications' },
  { key: 'achievements', label: 'Enma', subtitle: 'Experience & Achievements' },
];

const typeLines = {
  skills: [
    'Python • SQL • Tableau • Power BI',
    'Pandas • NumPy • Streamlit • AWS',
    'Git • Docker • React • FastAPI',
  ],
  education: [
    'KL University — B.Tech CSE (CGPA 8.65)',
    'AWS Certified Cloud Practitioner',
    'Google Analytics • Data Foundations',
  ],
  achievements: [
    'Zidio Development • Prodigy Infotech • Pregrad',
    'Hackathon Award • AICTE Excellence Certificate',
  ],
};

export default function DojoOfData() {
  const [active, setActive] = useState('skills');
  const [typed, setTyped] = useState('');
  const [lineIdx, setLineIdx] = useState(0);

  const lines = useMemo(() => typeLines[active] ?? [], [active]);

  useEffect(() => {
    setTyped('');
    setLineIdx(0);
  }, [active]);

  useEffect(() => {
    if (!lines.length) return;

    const line = lines[lineIdx % lines.length];
    let i = 0;
    setTyped('');

    const interval = setInterval(() => {
      i += 1;
      setTyped(line.slice(0, i));
      if (i >= line.length) {
        clearInterval(interval);
        setTimeout(() => setLineIdx((v) => (v + 1) % lines.length), 1400);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [lineIdx, lines]);

  return (
    <section id="dojo" className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden">
      {/* Sakura petals */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="absolute -left-10 top-1/2 h-2 w-3 rotate-12 rounded-[2px] bg-pink-300/70 blur-[.3px]"
            style={{
              top: `${(i * 37) % 100}%`,
              animation: `petal ${10 + (i % 6)}s linear ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(6,95,70,0.14),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          className="font-[Cinzel] text-2xl sm:text-4xl font-bold text-emerald-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Dojo of Destiny
        </motion.h2>
        <p className="mt-2 text-sm text-emerald-200/70">Lanterns sway, petals drift, and insights awaken.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`group rounded-xl border px-4 py-6 text-left transition backdrop-blur-md ${
                active === t.key
                  ? 'border-emerald-400/60 bg-emerald-500/10'
                  : 'border-white/10 hover:border-emerald-400/40 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-emerald-300/90">{t.label}</div>
                  <div className="text-lg font-semibold">{t.subtitle}</div>
                </div>
                <span className="ml-3 text-2xl">🗡️</span>
              </div>
              <div className="mt-2 h-px w-full bg-gradient-to-r from-emerald-400/60 to-transparent" />
              <p className="mt-2 text-xs text-white/70">Click to carve open a hologram</p>
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
              <h3 className="text-xl font-semibold text-emerald-300">
                {tabs.find((t) => t.key === active)?.subtitle}
              </h3>
              <div className="mt-3 font-mono text-sm text-white/80">
                <span className="after:ml-0.5 after:inline-block after:h-4 after:w-2 after:animate-pulse after:bg-emerald-300/80 after:align-middle">
                  {typed}
                </span>
              </div>

              {/* Orbiting code glyphs around a subtle sword silhouette */}
              <div className="pointer-events-none absolute inset-0">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute text-emerald-300/70"
                    style={{
                      left: `${50 + Math.cos((i / 10) * Math.PI * 2) * 26}%`,
                      top: `${50 + Math.sin((i / 10) * Math.PI * 2) * 16}%`,
                      animation: `orbit ${5 + (i % 4)}s linear ${i * 0.2}s infinite`,
                    }}
                  >
                    {['{ }', '</>', '()','[]', '#','∑','λ','π','Ω','μ'][i % 10]}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <a href="https://www.linkedin.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-emerald-400/40 hover:bg-emerald-500/10">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-emerald-400/40 hover:bg-emerald-500/10">
            <Github size={16} /> GitHub
          </a>
          <a href="mailto:example@email.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-emerald-400/40 hover:bg-emerald-500/10">
            <Mail size={16} /> Email
          </a>
        </div>
      </div>

      <style>{`
        @keyframes petal {
          0% { transform: translateX(0) translateY(-40vh) rotate(0deg); opacity: .0 }
          10% { opacity: .8 }
          50% { transform: translateX(60vw) translateY(20vh) rotate(120deg) }
          100% { transform: translateX(120vw) translateY(60vh) rotate(240deg); opacity: .2 }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) scale(1) }
          50% { transform: rotate(180deg) scale(1.08) }
          100% { transform: rotate(360deg) scale(1) }
        }
      `}</style>
    </section>
  );
}
