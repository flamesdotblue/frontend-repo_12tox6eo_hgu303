import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, Image as ImageIcon } from 'lucide-react';

export default function ContactShip() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0f0e] to-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(16,185,129,0.14), transparent 40%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.12), transparent 45%)' }} />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          className="font-[Cinzel] text-2xl sm:text-4xl font-bold text-emerald-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Thousand Data Sunny
        </motion.h2>
        <p className="mt-2 text-sm text-emerald-200/70">Set sail to connect. Choose your course.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Resume" subtitle="PDF download" icon={<FileDown />} href="#" />
          <Card title="GitHub" subtitle="Profile & repos" icon={<Github />} href="https://github.com/" />
          <Card title="LinkedIn" subtitle="Network" icon={<Linkedin />} href="https://www.linkedin.com/" />
          <Card title="Certificates" subtitle="Gallery" icon={<ImageIcon />} href="#" />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-emerald-300">Contact Form</h3>
          <p className="mt-1 text-sm text-white/70">Send a message via email client.</p>
          <form action="mailto:example@email.com" method="GET" className="mt-4 grid gap-4 sm:grid-cols-2">
            <input type="text" name="subject" placeholder="Subject" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/50" />
            <input type="text" name="body" placeholder="Message" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/50 sm:col-span-2" />
            <button type="submit" className="inline-flex w-fit items-center justify-center rounded-md border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-500/20">
              <Mail className="mr-2 h-4 w-4" /> Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Card({ title, subtitle, icon, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      className="group relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-[#0c1311] p-5 transition hover:bg-[#0f1815]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:scale-125" />
      <div className="relative z-10">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
          {icon}
        </div>
        <div className="text-lg font-semibold text-emerald-300">{title}</div>
        <div className="text-sm text-white/70">{subtitle}</div>
      </div>
    </a>
  );
}
