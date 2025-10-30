import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const tabs = [
  { key: 'skills', label: 'Wado Ichimonji', subtitle: 'Technical Skills' },
  { key: 'education', label: 'Sandai Kitetsu', subtitle: 'Education & Certifications' },
  { key: 'achievements', label: 'Enma', subtitle: 'Internships & Achievements' },
];

export default function DojoOfData() {
  const [active, setActive] = useState('skills');

  return (
    <section id="dojo" className="relative bg-[#0A0A0A] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(6,95,70,0.14),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          className="font-[Cinzel] text-2xl sm:text-4xl font-bold text-emerald-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Dojo of Data
        </motion.h2>
        <p className="mt-2 text-sm text-emerald-200/70">Cherry blossoms drift as glowing code particles whisper insights.</p>

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
              <p className="mt-2 text-xs text-white/70">Tap to reveal</p>
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            {active === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-emerald-300">Technical Skills</h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {['Python', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'NumPy', 'Streamlit', 'AWS', 'Git', 'Docker', 'React', 'FastAPI'].map((s) => (
                    <div key={s} className="rounded-lg border border-emerald-400/30 bg-emerald-500/5 px-3 py-2 text-sm text-emerald-200">
                      {s}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
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
              </motion.div>
            )}

            {active === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-emerald-300">Education & Certifications</h3>
                <ul className="mt-3 list-disc pl-6 text-sm text-white/80">
                  <li>KL University — B.Tech, Computer Science & Engineering</li>
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>Google Analytics Certification</li>
                  <li>Data Foundations (Coursera/Specializations)</li>
                </ul>
                <div className="mt-4 text-xs text-emerald-200/80">Forged in study, tempered by curiosity.</div>
              </motion.div>
            )}

            {active === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-emerald-300">Internships & Achievements</h3>
                <ul className="mt-3 list-disc pl-6 text-sm text-white/80">
                  <li>Zidio Development — Data/AI projects</li>
                  <li>Prodigy Infotech — Analytics Internship</li>
                  <li>Pregrad — Data projects</li>
                  <li>AICTE Excellence Award — Recognition for innovation</li>
                  <li>Hackathon Shortlist — Rapid prototyping & storytelling with data</li>
                </ul>
                <div className="mt-4 text-xs text-emerald-200/80">Honor the blade. Honor the craft.</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
