import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import nelsioLogo from "@/assets/nelsio-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NELSIO — Ideas become enterprises." },
      { name: "description", content: "NELSIO transforms ambitious ideas into enduring companies. A company builder operating ventures across technology, education, and consumer services." },
      { property: "og:title", content: "NELSIO — Ideas become enterprises." },
      { property: "og:description", content: "A company builder operating independent ventures for the long term." },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const VENTURES = [
  {
    name: "CUTZO",
    tag: "Consumer · Platform",
    desc: "Smart appointment and queue management for salons. The first major NELSIO venture.",
  },
  {
    name: "IBZEN",
    tag: "Education",
    desc: "Innovation and engineering education helping students explore technology, engineering, financial literacy, and future careers.",
  },
  {
    name: "Innovex Hub",
    tag: "Technology — Build to Innovate.",
    desc: "A technology platform focused on software, AI, automation, robotics, and emerging technologies.",
  },
  {
    name: "Apna Look",
    tag: "Consumer · AI",
    desc: "An AI-powered fashion platform helping people discover personalized outfits and complete looks.",
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[border-color,background-color] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-nelsio flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="NELSIO home">
          <img src={nelsioLogo.url} alt="NELSIO" className="h-6 w-auto md:h-7" />
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden text-[13px] text-foreground md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)",
        }}
      />
      {/* Soft radial highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.97 0 0) 0%, transparent 70%)",
        }}
      />
      <div className="container-nelsio relative pt-40 pb-32 md:pt-52 md:pb-44">
      <p className="mb-12 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
        — A Company Builder
      </p>
      <img
        src={nelsioLogo.url}
        alt="NELSIO — Ideas become enterprises."
        className="-mx-2 w-full max-w-[820px] select-none"
        draggable={false}
      />
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-1 hidden md:block">
          <div className="mt-3 h-px w-10 bg-foreground" />
        </div>
        <p className="md:col-span-7 text-[18px] leading-[1.6] tracking-[-0.01em] text-foreground md:text-[22px]">
          A quiet company builder operating independent ventures across
          technology, education, and consumer services —
          <span className="text-muted-foreground">
            {" "}built with patience, executed with craft, and designed to
            outlast the moment they were started in.
          </span>
        </p>
      </div>
      <div className="mt-14 flex flex-wrap items-center gap-6">
        <a
          href="#ventures"
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-[14px] font-medium text-background transition-opacity hover:opacity-90"
        >
          Explore Ventures
        </a>
        <a
          href="#about"
          className="inline-flex h-11 items-center text-[14px] text-foreground transition-opacity hover:opacity-60"
        >
          About NELSIO →
        </a>
      </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border">
      <div className="container-nelsio py-28 md:py-40">
        {eyebrow && (
          <p className="mb-16 text-[12px] uppercase tracking-[0.22em] text-muted-foreground md:mb-24">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <h2 className="md:col-span-5 text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-foreground md:text-[36px]">
          A company built to build companies.
        </h2>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-[17px] leading-[1.7] text-muted-foreground md:text-[18px]">
          <p>Every company begins with an idea.</p>
          <p>
            Building one that lasts requires discipline, patience, and
            thoughtful execution.
          </p>
          <p>
            NELSIO exists to transform ambitious ideas into enduring
            businesses.
          </p>
          <p className="text-foreground">
            Each venture operates independently while sharing a common
            philosophy: build for the long term.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Ventures() {
  return (
    <Section id="ventures" eyebrow="Ventures">
      <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-12">
        <h2 className="md:col-span-7 text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-foreground md:text-[36px]">
          Independent ventures, shared philosophy.
        </h2>
        <p className="md:col-span-4 md:col-start-9 text-[16px] leading-[1.7] text-muted-foreground">
          A small group of companies operating across technology, education,
          and consumer services.
        </p>
      </div>
      <div className="grid grid-cols-1 border-t border-border md:grid-cols-2">
        {VENTURES.map((v, i) => (
          <a
            key={v.name}
            href="#contact"
            className={`group relative block px-2 py-12 transition-colors hover:bg-secondary md:px-10 md:py-16 ${
              i % 2 === 0 ? "md:border-r border-border" : ""
            } ${i < VENTURES.length - (VENTURES.length % 2 === 0 ? 2 : 1) ? "border-b border-border" : ""}`}
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <div className="text-[32px] font-medium tracking-[-0.03em] text-foreground md:text-[40px]">
                  {v.name}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                  {v.tag}
                </div>
              </div>
              <span className="mt-3 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground">
                →
              </span>
            </div>
            <p className="mt-8 max-w-[46ch] text-[16px] leading-[1.65] text-muted-foreground">
              {v.desc}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Philosophy() {
  return (
    <Section id="philosophy" eyebrow="Philosophy">
      <h2 className="max-w-[18ch] text-[40px] font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-[56px] md:text-[80px]">
        We don't build for trends. We build for decades.
      </h2>
      <p className="mt-12 max-w-[58ch] text-[17px] leading-[1.7] text-muted-foreground md:text-[18px]">
        Markets shift. Technologies change. The companies that endure are the
        ones built with patience and conviction. NELSIO is structured to think
        in decades — quietly compounding ideas, teams, and craft into ventures
        that outlast their moment.
      </p>
    </Section>
  );
}

function Timeline() {
  const items = [
    {
      year: "2025",
      title: "NELSIO founded.",
      body: "CUTZO launched as the first venture.",
    },
    {
      year: "Future",
      title: "More ventures. More industries.",
      body: "A global portfolio of independent companies, built to last.",
    },
  ];
  return (
    <Section id="timeline" eyebrow="Timeline">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3" />
        <div className="md:col-span-9">
          {items.map((it, i) => (
            <div
              key={it.year}
              className={`grid grid-cols-12 gap-6 py-12 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="col-span-12 sm:col-span-3 text-[14px] uppercase tracking-[0.16em] text-muted-foreground">
                {it.year}
              </div>
              <div className="col-span-12 sm:col-span-9">
                <div className="text-[22px] font-medium tracking-[-0.02em] text-foreground md:text-[26px]">
                  {it.title}
                </div>
                <p className="mt-3 max-w-[50ch] text-[16px] leading-[1.65] text-muted-foreground">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Founder() {
  return (
    <Section id="founder" eyebrow="Founder">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="aspect-[4/5] w-full max-w-[280px] bg-secondary" aria-hidden />
          <div className="mt-6 text-[14px] text-foreground">The Founder</div>
          <div className="text-[13px] text-muted-foreground">NELSIO</div>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-[17px] leading-[1.75] text-foreground md:text-[19px]">
          <p>
            I didn't start NELSIO to chase a trend. I started it because the
            companies I admire share a quiet quality — they were built by
            people who intended to stay.
          </p>
          <p className="text-muted-foreground">
            We work slowly on purpose. We choose ideas we believe in, give
            them the time they need, and let each venture grow on its own
            terms. Some will become small. Some will become significant. All
            will be built with care.
          </p>
          <p className="text-muted-foreground">
            If that resonates with you, I'd like to hear from you.
          </p>
          <p className="pt-4 text-[14px] tracking-[-0.01em] text-foreground">— Founder, NELSIO</p>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <h2 className="md:col-span-7 text-[36px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground md:text-[56px]">
          Building something that should last? Let's talk.
        </h2>
        <div className="md:col-span-4 md:col-start-9 space-y-8">
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">General</div>
            <a href="mailto:hello@nelsio.com" className="mt-2 block text-[18px] text-foreground hover:opacity-60">
              hello@nelsio.com
            </a>
          </div>
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Ventures</div>
            <a href="mailto:ventures@nelsio.com" className="mt-2 block text-[18px] text-foreground hover:opacity-60">
              ventures@nelsio.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-nelsio py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="text-[15px] font-medium tracking-[-0.02em] text-foreground">NELSIO</div>
            <p className="mt-3 text-[14px] text-muted-foreground">Ideas become enterprises.</p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Company</div>
            <ul className="mt-4 space-y-2 text-[14px] text-foreground">
              <li><a href="#about" className="hover:opacity-60">About</a></li>
              <li><a href="#ventures" className="hover:opacity-60">Ventures</a></li>
              <li><a href="#contact" className="hover:opacity-60">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</div>
            <ul className="mt-4 space-y-2 text-[14px] text-foreground">
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-60">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-[12px] text-muted-foreground">
          <div>© {new Date().getFullYear()} NELSIO. All rights reserved.</div>
          <div>A company builder.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Philosophy />
        <Timeline />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
