'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';

const navItems = [
  { label: 'Manifest', href: '#manifest' },
  { label: 'Playground', href: '#playground' },
  { label: 'Palette', href: '#palette' },
  { label: 'Signals', href: '#signals' }
];

const experimentCards = [
  {
    title: 'hyperlinked synesthesia',
    blurb: 'Audio-reactive visuals rendered as pixelated storms stitched with magenta lightning.',
    hue: 'from-bubble via-plasma to-acid'
  },
  {
    title: 'claymation logic',
    blurb: 'Organic UI blocks mashed with pragmatic grids to distort the myth of order.',
    hue: 'from-acid via-bubble to-blaze'
  },
  {
    title: 'kinetic zine',
    blurb: 'Scroll-summoned typography that mutates as curiosity ascends the viewport.',
    hue: 'from-plasma via-bubble to-acid'
  }
];

const spectrum = [
  { name: 'ink', hex: '#050505' },
  { name: 'bubble', hex: '#ff71ef' },
  { name: 'plasma', hex: '#00f5d4' },
  { name: 'acid', hex: '#dfff00' },
  { name: 'blaze', hex: '#ff5400' }
];

const manifesto = [
  'embrace imperfections as deliberate signatures.',
  'treat whitespace like a controlled detonation.',
  'orchestrate chaos with a metronome of intent.',
  'design for curiosity, reverence for the glitch.',
  'forget the grid, reconstruct it from memory.'
];

export default function Page() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const gradientId = useMemo(() => `scribble-${Math.random().toString(36).slice(2)}`, []);

  return (
    <main className="relative isolate overflow-hidden">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-acid via-bubble to-plasma"
      />

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[36%] bg-gradient-to-r from-bubble/40 via-plasma/45 to-acid/35 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-plasma/30 via-acid/20 to-blaze/30 blur-[100px]" />
        <div className="absolute left-[-15%] top-[-20%] h-[520px] w-[520px] animate-float rounded-full border border-acid/20 bg-ink/40 [mask-image:radial-gradient(circle,black_40%,transparent_70%)]" />
      </div>

      <header className="relative z-10 mx-auto flex min-h-screen flex-col gap-12 px-6 pb-16 pt-12 sm:px-10 lg:px-20">
        <nav className="flex items-center justify-between rounded-full border border-acid/20 bg-ink/70 px-6 py-4 text-xs uppercase tracking-[0.4em] text-acid shadow-neon backdrop-blur">
          <span>dorksense</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-bubble">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <section className="grid-stripe relative isolate grid flex-1 place-items-center gap-12 overflow-hidden rounded-3xl border border-acid/20 bg-ink/80 px-8 py-16 text-ink shadow-[0_0_120px_rgba(223,255,0,0.1)] sm:px-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="absolute inset-0 -z-10">
            <div className="mask-fade absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bubble/20 to-transparent" />
            <div className="mask-fade absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plasma/10 to-transparent" />
          </div>
          <div className="flex flex-col gap-12">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl font-bold uppercase leading-[0.95] text-acid sm:text-7xl lg:text-8xl"
            >
              a neobrutalist
              <br />
              sensory console
            </motion.h1>

            <motion.p
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
              className="max-w-xl text-bubble/90 sm:text-lg lg:text-xl"
            >
              dorksense orchestrates a collision of saturated color, unapologetic geometry, and sensory
              storytelling. Scroll to awaken animations sculpted to the rhythm of your curiosity.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.4em] text-ink sm:text-sm">
              <Link
                href="#manifest"
                className="group relative inline-flex overflow-hidden rounded-full border border-acid/40 bg-acid px-6 py-3 text-ink shadow-acid transition hover:shadow-[0_0_45px_rgba(223,255,0,0.5)]"
              >
                ignite
                <span className="absolute inset-0 translate-x-full bg-ink/10 transition group-hover:translate-x-0" />
              </Link>
              <Link
                href="#playground"
                className="inline-flex items-center gap-2 rounded-full border border-bubble/40 px-6 py-3 text-bubble transition hover:border-bubble hover:text-acid"
              >
                <span>enter the playground</span>
                <span aria-hidden className="text-lg">
                  ⇀
                </span>
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="relative grid place-items-center"
          >
            <div className="relative aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-[36px] border border-bubble/40 bg-gradient-to-br from-ink via-ink/60 to-ink/90 shadow-neon" />
              <div className="absolute inset-[12%] rotate-6 rounded-3xl border border-plasma/40 bg-gradient-to-r from-plasma/10 via-acid/10 to-bubble/10 shadow-plasma" />
              <svg
                className="scribble absolute inset-[22%]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ff71ef" />
                    <stop offset="50%" stopColor="#00f5d4" />
                    <stop offset="100%" stopColor="#dfff00" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M24 100C24 58 55 24 96 24C137 24 176 63 176 104C176 145 133 178 92 178C51 178 24 142 24 100Z"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ pathLength: [0.6, 1, 0.6], rotate: [0, 8, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M56 84C56 68 70 56 90 56C110 56 128 70 128 90C128 110 110 132 90 132C70 132 56 116 56 100"
                  stroke="#ff5400"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 12"
                  animate={{ pathLength: [0.8, 1, 0.8], strokeDashoffset: [0, 40] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
            </div>
          </motion.div>
        </section>
      </header>

      <section id="manifest" className="relative z-10 mx-auto max-w-6xl px-6 pb-24 sm:px-10 lg:px-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-slab rounded-3xl border border-plasma/30 p-10 sm:p-14 lg:p-16"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6 text-sm uppercase tracking-[0.36em] text-plasma sm:text-base">
              <p>chapter zero</p>
              <h2 className="text-4xl font-semibold uppercase text-acid sm:text-5xl">manifest</h2>
            </div>
            <div className="max-w-2xl space-y-6 text-base text-white/90 sm:text-lg">
              <p>
                dorksense is a collision chamber where raw geometry, acidic gradients, and haptic typography
                stimulate the senses. Every element is deliberate, sculpted to reject polite minimalism and
                invite renegade imagination.
              </p>
              <p>
                This interface pulses with motion, responds to intent, and leaves artifacts for the curious.
                Let the scroll trigger kinetic narratives. Track the glow. Tune into the signals.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="playground" className="relative z-10 mx-auto max-w-6xl px-6 pb-24 sm:px-10 lg:px-20">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid gap-10 rounded-3xl border border-bubble/40 bg-ink/70 p-10 shadow-neon backdrop-blur-lg sm:p-14 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4 uppercase tracking-[0.36em] text-bubble/80">
              <span className="h-px w-10 bg-bubble/40" />
              playground schematics
            </div>
            <h3 className="text-4xl font-semibold uppercase leading-tight text-acid sm:text-5xl">
              experiment log
            </h3>
            <p className="text-lg text-white/80">
              We remix texture, dimension, and interaction into tactile story modules. Select a tile to absorb
              a thought-fragment.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {experimentCards.map((card) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -6, rotate: -1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink/90 to-ink/80 p-6 transition"
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${card.hue} opacity-0 transition group-hover:opacity-70`}
                  />
                  <h4 className="text-xl font-semibold uppercase tracking-tight text-acid">{card.title}</h4>
                  <p className="mt-3 text-sm text-white/90">{card.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-plasma">
                    view signal <span aria-hidden>↗</span>
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-10 rounded-2xl border border-acid/30 bg-ink/80 p-8">
            <motion.div
              animate={{ rotate: [4, -2, 6, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-xl border border-plasma/40 bg-gradient-to-br from-plasma/10 via-bubble/10 to-acid/10 p-6 shadow-plasma"
            >
              <p className="text-sm uppercase tracking-[0.36em] text-white/70">scroll telemetry</p>
              <p className="mt-6 text-3xl font-semibold uppercase leading-tight text-acid sm:text-4xl">
                kinetic curiosity score
              </p>
              <motion.div
                animate={{ width: ['35%', '78%', '62%', '95%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-6 h-3 rounded-full bg-acid/20"
              >
                <motion.div
                  animate={{ width: ['45%', '92%', '68%', '100%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-acid via-bubble to-plasma shadow-acid"
                />
              </motion.div>
            </motion.div>

            <div className="space-y-4 text-sm text-white/80">
              <p>
                <span className="font-semibold text-bubble">04:49 UTC</span> — Detected visitors bending the
                interface tide. Smooth scroll strobes engaged.
              </p>
              <p>
                <span className="font-semibold text-plasma">06:13 UTC</span> — Typography refracted into
                overlapping slices, emitting playful afterimages.
              </p>
              <p>
                <span className="font-semibold text-acid">08:02 UTC</span> — Neurons recorded amplified delight.
                Additional motion cues deployed.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="palette" className="relative z-10 mx-auto max-w-6xl px-6 pb-24 sm:px-10 lg:px-20">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-3xl border border-plasma/40 bg-ink/70 p-10 shadow-plasma sm:p-14"
        >
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-plasma/70 sm:text-sm">color doctrine</p>
              <h3 className="mt-2 text-4xl font-semibold uppercase text-acid sm:text-5xl">the spectrum</h3>
            </div>
            <p className="max-w-xl text-sm text-white/80 sm:text-base">
              Saturation is resistance. Each pigment speaks loud, clashing with grace to paint the neobrutalist
              skyline of dorksense.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {spectrum.map((swatch) => (
              <motion.div
                key={swatch.name}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink"
              >
                <div
                  className="h-36 w-full"
                  style={{ background: swatch.hex }}
                  aria-hidden
                />
                <div className="space-y-2 p-5 text-sm">
                  <p className="font-semibold uppercase tracking-[0.36em] text-acid">{swatch.name}</p>
                  <p className="font-mono text-xs text-white/70">{swatch.hex}</p>
                </div>
                <motion.div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="signals" className="relative z-10 mx-auto max-w-6xl px-6 pb-32 sm:px-10 lg:px-20">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-slab grid gap-10 rounded-3xl border border-acid/30 p-10 sm:p-14 lg:grid-cols-[1fr_1fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-acid/60 sm:text-sm">operating principles</p>
            <h3 className="mt-3 text-4xl font-semibold uppercase text-acid sm:text-5xl">manifesto</h3>
          </div>
          <div className="space-y-6 text-base text-white/80 sm:text-lg">
            {manifesto.map((line) => (
              <motion.p
                key={line}
                className="flex items-start gap-4"
                initial={{ x: -25, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-acid shadow-acid" />
                <span>{line}</span>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-24 sm:px-10 lg:px-20">
        <div className="rounded-3xl border border-acid/20 bg-ink/70 p-8 text-xs uppercase tracking-[0.36em] text-white/60 sm:p-12 sm:text-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span>crafted in the dorksense lab</span>
            <span className="text-acid">stay curious · stay loud · stay neon</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
