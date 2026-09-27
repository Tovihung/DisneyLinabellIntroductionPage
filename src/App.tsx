import { useState } from "react";

type IconName = "compass" | "flower" | "heart" | "sparkle" | "arrow";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
      </>
    ),
    flower: (
      <>
        <path d="M12 11.5c-5-2.5-5.3-6-.9-6.2.8-4.2 4.3-3.1 4.2.5 3.8-.9 5 2.7 1.3 4.3 2.8 3.1-.2 5.8-3.1 3.3-1.8 3.7-5.6 2.4-4.1-1.4-3.8-.7-3.9-4.3-.4-4.5 3.6Z" />
        <circle cx="12.4" cy="10.1" r="1.6" />
      </>
    ),
    heart: <path d="M20.2 5.8a5 5 0 0 0-7.1 0L12 6.9l-1.1-1.1a5 5 0 0 0-7.1 7.1L12 21l8.2-8.1a5 5 0 0 0 0-7.1Z" />,
    sparkle: (
      <>
        <path d="M12 2.8c.5 5.3 3.1 8 8.2 8.5-5.1.5-7.7 3.2-8.2 8.5-.5-5.3-3.1-8-8.2-8.5 5.1-.5 7.7-3.2 8.2-8.5Z" />
      </>
    ),
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

function CharacterPortrait() {
  return (
    <svg
      aria-label="A stylized portrait of LinaBell, a pink fox explorer"
      className="h-auto w-full drop-shadow-xl"
      role="img"
      viewBox="0 0 560 620"
    >
      <path
        className="fill-rose-100"
        d="M79 474c-22-121 1-276 121-363 89-65 217-23 264 86 53 125 28 290-86 348-119 60-274 29-299-71Z"
      />
      <path
        className="fill-rose-300 stroke-rose-500"
        d="M175 243c-45-53-57-130-23-154 31-22 91 42 109 93m130 59c39-57 42-135 6-156-33-18-86 52-96 105"
        strokeWidth="7"
      />
      <path className="fill-rose-50" d="M169 112c-13 31 1 83 39 116 7-40 17-71 38-81-28-25-57-45-77-35Zm212-4c17 29 10 82-23 120-12-39-26-69-48-76 25-29 51-52 71-44Z" />
      <path
        className="fill-rose-300 stroke-rose-500"
        d="M139 299c6-100 68-153 148-153 84 0 151 57 155 158 4 95-54 166-153 166-99 0-156-70-150-171Z"
        strokeWidth="7"
      />
      <path
        className="fill-rose-100"
        d="M187 345c-11-45 21-82 63-64 18 8 28 29 38 46 10-18 23-39 43-45 43-13 72 27 56 71-14 41-59 74-99 75-42-1-90-39-101-83Z"
      />
      <ellipse className="fill-slate-800" cx="236" cy="298" rx="12" ry="15" />
      <ellipse className="fill-slate-800" cx="341" cy="298" rx="12" ry="15" />
      <circle className="fill-white" cx="232" cy="293" r="4" />
      <circle className="fill-white" cx="337" cy="293" r="4" />
      <path className="fill-slate-800" d="M273 339c0-11 29-11 29 0 0 10-8 16-15 16s-14-6-14-16Z" />
      <path className="fill-none stroke-slate-700" d="M287 354c-1 17-14 22-25 13m25-13c2 17 15 22 26 13" strokeLinecap="round" strokeWidth="5" />
      <path className="fill-rose-200" d="M184 328c0-9 15-16 32-14 15 2 25 11 22 19-4 10-19 15-34 12-13-3-21-9-20-17Zm208-1c1-9-13-17-30-16-15 1-26 9-24 17 3 10 18 16 33 14 13-2 21-8 21-15Z" />
      <path className="fill-rose-400 stroke-rose-600" d="M207 158c-28-29-25-59 2-60 6-27 37-25 43 1 27-13 48 11 32 35 22 18 6 45-22 37-10 26-41 18-42-10-5 0-9-1-13-3Z" strokeWidth="5" />
      <circle className="fill-amber-300" cx="241" cy="131" r="15" />
      <path className="fill-rose-400 stroke-rose-600" d="M222 193c14-18 31-27 51-28-2-13 3-22 14-30 10 11 14 23 11 37 15 2 27 8 35 19-38-1-74 1-111 2Z" strokeWidth="5" />
      <circle className="fill-sky-100/80 stroke-slate-600" cx="389" cy="397" r="46" strokeWidth="7" />
      <path className="stroke-slate-600" d="m421 431 51 57" strokeLinecap="round" strokeWidth="13" />
      <path className="stroke-white/80" d="M365 379c11-16 29-18 41-12" strokeLinecap="round" strokeWidth="6" />
      <path className="fill-rose-400 stroke-rose-600" d="M199 450c-28 29-44 69-38 108 58 30 188 30 246-5 1-39-19-78-50-105-46 26-111 28-158 2Z" strokeWidth="7" />
      <path className="fill-rose-50 stroke-rose-500" d="M159 556c30-17 61-24 95-25m153 21c-33-15-65-21-97-20" strokeLinecap="round" strokeWidth="7" />
    </svg>
  );
}

const facts = [
  {
    icon: "compass" as const,
    title: "Born to explore",
    text: "LinaBell follows every clue with her trusty magnifying glass and a wonderfully curious mind.",
  },
  {
    icon: "flower" as const,
    title: "Her signature bloom",
    text: "A beautiful orchid rests beside her ear—an unmistakable finishing touch to her rosy look.",
  },
  {
    icon: "heart" as const,
    title: "A loyal friend",
    text: "Clever and thoughtful, she is always ready to help Duffy make sense of a new discovery.",
  },
];

export default function App() {
  const [activeFact, setActiveFact] = useState(0);

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-rose-50 font-sans text-slate-800 selection:bg-rose-200">
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-rose-400 text-white shadow-sm">
            <Icon name="flower" className="size-6" />
          </div>
          <div>
            <div className="font-serif text-xl font-semibold leading-none text-rose-950">LinaBell</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-rose-500">Duffy & Friends</div>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <div className="cursor-pointer transition-colors hover:text-rose-600" onClick={scrollToStory} role="link" tabIndex={0}>Her story</div>
          <div className="cursor-pointer transition-colors hover:text-rose-600" onClick={() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" })} role="link" tabIndex={0}>Meet LinaBell</div>
        </div>
      </nav>

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-6 px-6 pb-20 pt-8 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-16">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur">
              <Icon name="sparkle" className="size-4" />
              Curiosity makes every day an adventure
            </div>
            <div className="font-serif text-6xl font-semibold leading-none tracking-tight text-rose-950 sm:text-7xl lg:text-8xl" role="heading" aria-level={1}>
              Meet <span className="text-rose-500">LinaBell</span>
            </div>
            <div className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              The clever pink fox from Duffy and Friends, with a love for nature, mysteries, and all the little details waiting to be discovered.
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <div
                className="group flex cursor-pointer items-center gap-3 rounded-full bg-rose-500 px-6 py-4 font-bold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-1 hover:bg-rose-600"
                onClick={scrollToStory}
                onKeyDown={(event) => event.key === "Enter" && scrollToStory()}
                role="button"
                tabIndex={0}
              >
                Discover her story
                <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <span className="size-2 rounded-full bg-emerald-400" />
                A friend since 2021
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-x-12 bottom-10 top-20 rounded-full bg-white/60 blur-3xl" />
            <div className="relative">
              <CharacterPortrait />
            </div>
            <div className="absolute bottom-14 left-0 max-w-48 rounded-3xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur sm:left-4">
              <div className="text-xs font-bold uppercase tracking-widest text-rose-400">Explorer&apos;s note</div>
              <div className="mt-2 font-serif text-lg font-semibold text-rose-950">“Every clue tells a story.”</div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24" id="details">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-bold uppercase tracking-widest text-rose-500">Why we love her</div>
              <div className="mt-3 font-serif text-4xl font-semibold text-rose-950 sm:text-5xl" role="heading" aria-level={2}>Small fox, big curiosity</div>
              <div className="mt-5 leading-7 text-slate-500">LinaBell reminds us that asking questions can open the door to a whole new world.</div>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {facts.map((fact, index) => (
                <div
                  className={`cursor-pointer rounded-3xl border p-7 transition duration-300 ${
                    activeFact === index
                      ? "border-rose-200 bg-rose-50 shadow-xl shadow-rose-100"
                      : "border-slate-100 bg-white hover:border-rose-100 hover:shadow-lg"
                  }`}
                  key={fact.title}
                  onClick={() => setActiveFact(index)}
                  onKeyDown={(event) => event.key === "Enter" && setActiveFact(index)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={`flex size-12 items-center justify-center rounded-2xl ${activeFact === index ? "bg-rose-500 text-white" : "bg-rose-100 text-rose-500"}`}>
                    <Icon name={fact.icon} className="size-6" />
                  </div>
                  <div className="mt-6 font-serif text-2xl font-semibold text-rose-950" role="heading" aria-level={3}>{fact.title}</div>
                  <div className="mt-3 leading-7 text-slate-500">{fact.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-rose-950 py-24 text-white" id="story">
          <div className="absolute -right-24 -top-24 size-80 rounded-full border border-rose-700/50" />
          <div className="absolute -bottom-32 -left-20 size-96 rounded-full border border-rose-700/50" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-rose-300">Her first discovery</div>
              <div className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl" role="heading" aria-level={2}>A mysterious trail in the forest</div>
            </div>
            <div className="space-y-6 text-lg leading-8 text-rose-100">
              <div>When Duffy became separated from Mickey in the forest, he followed a beautiful orchid and met a clever fox with a magnifying glass.</div>
              <div>LinaBell examined every little sign and helped Duffy retrace his path. It was the beginning of a thoughtful friendship—and many more adventures to come.</div>
              <div className="flex items-center gap-3 pt-2 text-sm font-semibold uppercase tracking-widest text-rose-300">
                <span className="h-px w-10 bg-rose-400" />
                Debuted at Shanghai Disney Resort
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-rose-950 px-6 pb-10 text-center text-xs leading-5 text-rose-300">
        A fan-made introduction to LinaBell. Disney and LinaBell are trademarks of The Walt Disney Company.
      </footer>
    </div>
  );
}
