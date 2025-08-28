// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE = import.meta.env.BASE_URL ?? "/";

const games = [
  {
    id: "ZZZ",
    name: "Zenless Zone Zero",
    img: `${BASE}assets/img/ZZZ.png`,
    routes: [
      { slug: "ZZZ_Maj", label: "Mise à jour" },
      { slug: "ZZZ_Perso", label: "Perso" },
      { slug: "ZZZ_Arme", label: "Arme" },
      { slug: "ZZZ_Quete", label: "Quêtes" },
      { slug: "ZZZ_Event", label: "Événement" },
      { slug: "ZZZ_Carte", label: "Carte" },
      { slug: "ZZZ_Solution", label: "Solution" },
    ],
  },
  {
    id: "HSR",
    name: "Honkai: Star Rail",
    img: `${BASE}assets/img/HSR.png`,
    routes: [
      { slug: "HSR_Maj", label: "Mise à jour" },
      { slug: "HSR_Perso", label: "Perso" },
      { slug: "HSR_Arme", label: "Arme" },
      { slug: "HSR_Quete", label: "Quêtes" },
      { slug: "HSR_Event", label: "Événement" },
      { slug: "HSR_Carte", label: "Carte" },
      { slug: "HSR_Solution", label: "Solution" },
    ],
  },
  {
    id: "GI",
    name: "Genshin Impact",
    img: `${BASE}assets/img/GI.png`,
    routes: [
      { slug: "GI_Maj", label: "Mise à jour" },
      { slug: "GI_Perso", label: "Perso" },
      { slug: "GI_Arme", label: "Arme" },
      { slug: "GI_Quete", label: "Quêtes" },
      { slug: "GI_Event", label: "Événement" },
      { slug: "GI_Carte", label: "Carte" },
      { slug: "GI_Solution", label: "Solution" },
    ],
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const locked = useRef(false);
  const touchY = useRef(0);
  const navigate = useNavigate();

  const wrap = (i) => (i + games.length) % games.length;
  const next = () => setIndex((i) => wrap(i + 1));
  const prev = () => setIndex((i) => wrap(i - 1));

  // Navigation: molette / clavier / swipe
  useEffect(() => {
    const onWheel = (e) => {
      if (locked.current) return;
      locked.current = true;
      e.deltaY > 0 ? next() : prev();
      setTimeout(() => (locked.current = false), 420);
    };
    const onKey = (e) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) next();
      if (["ArrowUp", "PageUp"].includes(e.key)) prev();
    };
    const ts = (e) => (touchY.current = e.touches[0].clientY);
    const te = (e) => {
      const dy = e.changedTouches[0].clientY - touchY.current;
      if (Math.abs(dy) > 40) (dy < 0 ? next() : prev());
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchend", te, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", ts);
      window.removeEventListener("touchend", te);
    };
  }, []);

  return (
    <main className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-6">
      <div className="relative w-full max-w-6xl">
        {games.map((g, i) => {
          const dist = i - index;

          // Écart réduit : B à 45% (au-dessus), A à 55% (en dessous)
          let pos = "";
          if (dist === 0) {
            pos = "top-1/2 -translate-y-1/2 opacity-100 z-30 scale-100";
          } else if (dist === -1) {
            pos = "top-[45%] -translate-y-1/2 opacity-70 z-20 scale-[.985]";
          } else if (dist === 1) {
            pos = "top-[55%] -translate-y-1/2 opacity-70 z-20 scale-[.985]";
          } else {
            pos =
              "top-1/2 -translate-y-1/2 opacity-0 z-0 scale-90 pointer-events-none";
          }

          return (
            <article
              key={g.id}
              className={`absolute left-1/2 w-[min(1100px,100%)] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(.2,.6,.2,1)] ${pos}`}
              onClick={() => dist !== 0 && setIndex(i)}
            >
              <div className="relative overflow-hidden rounded-3xl border border-neutral-700 bg-black/80 shadow-[0_24px_60px_rgba(0,0,0,.55)] backdrop-blur-sm">
                {/* Image plein cadre */}
                <img
                  src={g.img}
                  alt={g.name}
                  className="h-[48vh] w-full min-h-[320px] object-cover md:h-[56vh]"
                  draggable="false"
                />

                {/* Barre de boutons interne, collée en bas */}
                <div className="pointer-events-auto absolute inset-x-4 bottom-4">
                  <div className="mx-auto flex w-full flex-wrap gap-2 rounded-full border border-neutral-700 bg-neutral-900/90 px-3 py-2">
                    {g.routes.map((r) => (
                      <button
                        key={r.slug}
                        onClick={() => navigate(`/wiki/${r.slug}`)}
                        className="rounded-full border border-neutral-600 bg-neutral-800 px-4 py-1.5 text-sm font-medium text-neutral-100 hover:bg-neutral-700"
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
