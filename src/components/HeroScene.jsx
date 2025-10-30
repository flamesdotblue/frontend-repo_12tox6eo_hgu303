import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const QUOTES = [
  'Only one thing matters: becoming stronger.',
  'No data point is too small to sharpen your blade.',
  'Steel your resolve. Temper your insights.',
];

export default function HeroScene() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((q) => (q + 1) % QUOTES.length);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Simulated lightning flash every ~8s
    const id = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 180);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const quote = useMemo(() => QUOTES[quoteIndex], [quoteIndex]);

  const handleScroll = () => {
    const el = document.getElementById('dojo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      <div className={`pointer-events-none absolute inset-0 transition ${flash ? 'bg-white/60' : 'bg-transparent'}`} />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-emerald-300/60 animate-float"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 73) % 100}%`,
              animationDuration: `${8 + (i % 6)}s`,
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center select-none">
        <motion.h1
          className="font-[Cinzel] text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ZoroVerse 2.0 — The Animated Swordsman of Data
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-emerald-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          J. Mohan Karthikeya — The Grand Line of Code
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button
            onClick={handleScroll}
            className="group inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-emerald-200 backdrop-blur-md transition hover:bg-emerald-500/20"
          >
            <SlashFX />
            <span className="text-sm sm:text-base font-medium">Enter the Grand Line</span>
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={quote}
            className="mt-10 text-emerald-300/80 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            “{quote}”
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: .6 }
          50% { transform: translateY(-20px) translateX(5px) scale(1.05); opacity: .9 }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: .6 }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
    </section>
  );
}

function SlashFX() {
  return (
    <span className="relative mr-1 inline-block h-5 w-5 overflow-visible">
      <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-emerald-300 shadow-[0_0_8px_#34d399]" />
      <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-emerald-300/90" />
    </span>
  );
}
