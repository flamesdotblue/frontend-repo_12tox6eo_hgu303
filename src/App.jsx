import HeroScene from './components/HeroScene';
import DojoOfData from './components/DojoOfData';
import ProjectsIslands from './components/ProjectsIslands';
import ContactShip from './components/ContactShip';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <HeaderNav />
      <HeroScene />
      <DojoOfData />
      <ProjectsIslands />
      <ContactShip />
      <Footer />
    </div>
  );
}

function HeaderNav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-1/2 z-40 -translate-x-1/2">
      <nav className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-3 py-2 backdrop-blur-md">
        {[
          { id: 'home', label: 'Home' },
          { id: 'dojo', label: 'Skills' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="rounded-full px-3 py-1.5 text-xs text-emerald-200 hover:bg-emerald-500/10"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-xs text-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          © {new Date().getFullYear()} J. Mohan Karthikeya — ZoroVerse: The Swordsman of Data. Crafted with React, Tailwind, Framer Motion, and Spline.
        </p>
      </div>
    </footer>
  );
}
