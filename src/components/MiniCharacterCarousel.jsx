// src/components/MiniCharacterCarousel.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { charactersByGame } from "../data/characters";
import InfoPill from "./InfoPill";
import RarityBadge from "./RarityBadge";

const IMG = "/assets/img";

export default function MiniCharacterCarousel({ game, currentId }) {
  const prefix = (game || "").toUpperCase();
  const all = charactersByGame[prefix] || [];

  // positionner l'index sur le perso courant
  const start = Math.max(
    0,
    all.findIndex(
      (x) =>
        x.id?.toLowerCase() === currentId?.toLowerCase() ||
        x.slug?.toLowerCase() === currentId?.toLowerCase()
    )
  );
  const [index, setIndex] = useState(start);
  useEffect(() => setIndex(start), [start]);

  const wrap = (i) => (i + all.length) % Math.max(all.length, 1);

  // --- slide anim (kick) ---
  const [dir, setDir] = useState(0); // 1 => next (vers le bas), -1 => prev (vers le haut)
  const [kick, setKick] = useState(false); // déclenche la transition
  const slide = (d, newIndex) => {
    setDir(d);
    setKick(false);
    requestAnimationFrame(() => setKick(true));
    setIndex(newIndex);
    setTimeout(() => {
      setDir(0);
      setKick(false);
    }, 240);
  };

  const next = () => all.length && slide(1, wrap(index + 1));
  const prev = () => all.length && slide(-1, wrap(index - 1));

  // molette : on navigue seulement si le panneau n'a plus de scroll interne
  const boxRef = useRef(null);
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return; // laisser scroller
      e.preventDefault();
      e.deltaY > 0 ? next() : prev();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [all.length, index]);

  // 5 entrées autour de l’index
  const items = useMemo(() => {
    if (!all.length) return [];
    const out = [];
    for (let d = -2; d <= 2; d++) out.push(all[wrap(index + d)]);
    return out;
  }, [all, index]);

  return (
    <div
      ref={boxRef}
      className="h-full overflow-auto rounded-2xl border border-neutral-800 bg-[#0f0f10] p-3"
    >
      <div className="mb-3 text-center text-sm font-semibold text-neutral-300">
        Roue des pers
      </div>

      <ul className="space-y-3">
        {items.map((c) => {
          const isActive =
            c.id?.toLowerCase() === currentId?.toLowerCase() ||
            c.slug?.toLowerCase() === currentId?.toLowerCase();

          const href = `/${game}/perso/${(c.slug || c.id).toLowerCase()}`;
          const icon = `${IMG}/${c.icon}`;
          const movie = `${IMG}/${prefix.toLowerCase()}/perso/movie/${c.id.toLowerCase()}movie.png`;

          return (
            <li
              key={c.id}
              style={{
                transform: kick
                  ? "translateY(0px)"
                  : `translateY(${dir > 0 ? 14 : dir < 0 ? -14 : 0}px)`,
                opacity: kick ? 1 : 0.96,
                transition:
                  "transform 220ms cubic-bezier(.2,.6,.2,1), opacity 220ms",
                willChange: "transform, opacity",
              }}
            >
              <Link
                to={href}
                className={`group relative block overflow-hidden rounded-2xl border px-3 py-2.5
                  ${
                    isActive
                      ? "border-neutral-600 bg-[#15161a]"
                      : "border-neutral-800 bg-[#121318] hover:border-neutral-700"
                  }`}
              >
                {/* ==== BG "movie" avec coupe diagonale + fade ==== */}
                <div className="pointer-events-none absolute inset-0 z-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 65% 0%, calc(65% - 44px) 100%, 0% 100%)",
                    }}
                  >
                    <img
                      src={movie}
                      alt=""
                      className="h-full w-full object-cover object-left"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      draggable="false"
                    />
                  </div>
                  <div
                    className="absolute top-0 h-full"
                    style={{
                      right: "35%",
                      width: "110px",
                      transform: "skewX(-16deg)",
                      transformOrigin: "right center",
                      background:
                        "linear-gradient(90deg, rgba(20,21,25,0) 0%, rgba(18,19,24,1) 100%)",
                    }}
                  />
                </div>

                {/* ==== Contenu au-dessus du BG (centré) ==== */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  {/* Icône (gauche) */}
                  <img
                    src={icon}
                    alt={c.name}
                    className="h-12 w-12 rounded-xl object-cover border border-neutral-700 shrink-0"
                    onError={(e) =>
                      (e.currentTarget.style.visibility = "hidden")
                    }
                  />

                  {/* Centre : nom + trio de pills (centrés) */}
                  <div className="flex min-w-0 flex-1 flex-col items-center justify-center text-center">
                    {/* Nom en pastille noire */}
                    <div className="mb-2 inline-flex max-w-full items-center gap-2 rounded-full border border-neutral-700 bg-black/90 px-2.5 py-1">
                      <span className="truncate text-[13px] font-semibold text-white">
                        {c.name}
                      </span>
                    </div>

                    {/* Type / Élément / Faction */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      <div className="scale-90">
                        <InfoPill
                          category="role"
                          value={c.type}
                          game={prefix}
                        />
                      </div>
                      <div className="scale-90">
                        <InfoPill
                          category="element"
                          value={c.element}
                          game={prefix}
                        />
                      </div>
                      <div className="scale-90">
                        <InfoPill
                          category="faction"
                          value={c.faction}
                          game={prefix}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Rareté (droite) */}
                  <div className="pl-1 shrink-0">
                    <div className="scale-90">
                      <RarityBadge game={prefix} value={c.rarity} />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
