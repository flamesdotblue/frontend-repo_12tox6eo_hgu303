import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const QUOTES = [
  'Only one thing matters: becoming stronger.',
  'No data point is too small to sharpen your blade.',
  'Steel your resolve. Temper your insights.',
];

export default function HeroScene() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((q) => (q + 1) % QUOTES.length);
    }, 30000);
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

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-[Cinzel] text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ZoroVerse: The Swordsman of Data
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-emerald-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          J. Mohan Karthikeya — Data Analyst & Developer
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
            <span className="text-sm sm:text-base font-medium">Draw My Blades</span>
            <span className="relative h-5 w-5">
              <span className="absolute inset-0 rounded-full border border-emerald-400/50 transition group-hover:scale-110" />
              <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-sm" />
            </span>
          </button>
        </motion.div>

        <motion.div
          key={quote}
          className="mt-10 text-emerald-300/80 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          “{quote}”
        </motion.div>
      </div>
    </section>
  );
}
