import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { links, LANGS } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emre Güney — English & Dutch Teacher" },
      {
        name: "description",
        content:
          "Emre Güney teaches English (A1–B2) and Dutch (A1–B1) with conversation-first, real-world lessons. Learn the language. Use it in real life.",
      },
      { property: "og:title", content: "Emre Güney — English & Dutch Teacher" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content: "Conversation-first English and Dutch lessons. Learn the language. Use it in real life.",
      },
    ],
  }),
  component: Home,
});

function Nav() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          Emre Güney
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 font-display text-xs">
          {LANGS.map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-border">|</span>}
              <button
                onClick={() => setLang(l)}
                className={
                  "px-1 uppercase transition-colors " +
                  (lang === l ? "text-accent" : "text-muted-foreground hover:text-foreground")
                }
              >
                {l}
              </button>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

function Home() {
  const { t } = useLang();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-24">
        <div className="rise">
          <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{t.hero.role}</p>
          <p className="mt-8 max-w-md font-display text-2xl leading-snug sm:text-3xl">
            {t.hero.line.split(".")[0]}.
            <br />
            <span className="text-accent">{t.hero.line.split(".").slice(1).join(".").trim()}</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
            {t.hero.levels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#lessons"
              className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.primary}
            </a>
            <a
              href="#about"
              className="border-b border-foreground/30 pb-0.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" kicker={t.about.kicker}>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">{t.about.title}</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">
            {t.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="space-y-4 border-l border-border pl-6 text-sm">
            {t.about.facts.map((f) => (
              <div key={f.k}>
                <dt className="font-display font-medium">{f.k}</dt>
                <dd className="text-muted-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* LESSONS */}
      <Section id="lessons" kicker={t.lessons.kicker}>
        <h2 className="text-3xl font-bold sm:text-4xl">{t.lessons.title}</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {t.lessons.groups.map((g) => (
            <div key={g.language} className="border-t border-foreground pt-4">
              <h3 className="font-display text-xl font-bold">{g.language}</h3>
              <p className="mt-3 flex flex-wrap gap-2 font-display text-sm text-accent">
                {g.levels.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </p>
              <p className="mt-3 text-muted-foreground">{g.line}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-xl text-muted-foreground">{t.lessons.note}</p>
      </Section>

      {/* APPROACH */}
      <section id="approach" className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="kicker text-primary-foreground/60">{t.approach.kicker}</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
            {t.approach.big1}
            <br />
            <span className="text-accent">{t.approach.big2}</span>
          </h2>
          <p className="mt-8 max-w-xl text-primary-foreground/70">{t.approach.body}</p>
          <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {t.approach.points.map((p, i) => (
              <li key={p} className="flex gap-4 border-t border-primary-foreground/15 pt-4">
                <span className="font-display text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEYOND */}
      <Section id="beyond" kicker={t.beyond.kicker}>
        <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">{t.beyond.title}</h2>
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
          {t.beyond.body}
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-display text-lg">
          {t.beyond.places.map((p) => (
            <li key={p} className="before:mr-2 before:text-accent before:content-['—']">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* A LITTLE MORE EMRE */}
      <Section id="more" kicker={t.more.kicker}>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">{t.more.title}</h2>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
          {t.more.body}
        </p>
        <p className="mt-6 font-display text-sm uppercase tracking-[0.18em] text-accent">
          {t.more.tags.join(" · ")}
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker={t.contact.kicker}>
        <h2 className="font-display text-5xl font-bold sm:text-6xl">{t.contact.title}</h2>
        <p className="mt-5 max-w-md text-muted-foreground">{t.contact.body}</p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-display">
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="border-b border-foreground/30 pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact.instagram}
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border-b border-foreground/30 pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact.whatsapp}
          </a>
          <a
            href={links.email}
            className="border-b border-foreground/30 pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact.email}
          </a>
        </div>
      </Section>

      <footer className="mx-auto max-w-5xl px-6 pb-12 text-xs text-muted-foreground">
        {t.footer} · © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function Section({
  id,
  kicker,
  children,
}: {
  id: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="kicker">{kicker}</p>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
