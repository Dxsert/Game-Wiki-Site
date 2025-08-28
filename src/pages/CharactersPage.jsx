// src/pages/CharactersPage.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { charactersByGame } from "../data/characters";
import RarityBadge from "../components/RarityBadge";
import InfoPill from "../components/InfoPill";

const BASE = import.meta.env.BASE_URL ?? "/";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='300'>
       <rect width='100%' height='100%' fill='#141414'/>
       <text x='50%' y='50%' fill='#aaa' font-size='18' text-anchor='middle'
             dominant-baseline='middle' font-family='Arial, sans-serif'>
         Icone manquante
       </text>
     </svg>`
  );

function useOverlayDismiss() {
  useEffect(() => {
    const o = document.querySelector(".page-transition");
    if (!o) return;
    o.style.animation = "fadeOutOverlay .2s ease forwards";
    const t = setTimeout(() => o.remove(), 220);
    return () => clearTimeout(t);
  }, []);
}

// ZZZ (S/A/B)
const zzzNormalize = (v) => {
  const s = String(v).trim().toUpperCase();
  if (s === "5" || s.startsWith("5★")) return "S";
  if (s === "4" || s.startsWith("4★")) return "A";
  if (s === "3" || s.startsWith("3★")) return "B";
  if (["S", "A", "B"].includes(s)) return s;
  return s;
};
const zzzRank = (v) => ({ S: 0, A: 1, B: 2 }[zzzNormalize(v)] ?? 99);

// URL de la page perso (ajuste si ton routing diffère)
const characterPath = (prefix, c) =>
  `/${prefix.toLowerCase()}/perso/${(c.slug || c.id).toLowerCase()}`;

export default function CharactersPage({ sidebarRef }) {
  useOverlayDismiss();
  const { slug } = useParams(); // ex: "ZZZ_Perso"
  const prefix = (slug?.split("_")[0] || "").toUpperCase();
  const allChars = charactersByGame[prefix] || [];

  // Filtres
  const [sex, setSex] = useState("");
  const [rarity, setRarity] = useState("");
  const [faction, setFaction] = useState("");
  const [element, setElement] = useState("");
  const [ctype, setCType] = useState("");

  const options = useMemo(() => {
    const uniq = (arr) => Array.from(new Set(arr.filter(Boolean)));
    const base = {
      sex: uniq(allChars.map((c) => c.gender)).sort(),
      faction: uniq(allChars.map((c) => c.faction)).sort(),
      element: uniq(allChars.map((c) => c.element)).sort(),
      type: uniq(allChars.map((c) => c.type)).sort(),
    };
    base.rarity =
      prefix === "ZZZ"
        ? uniq(allChars.map((c) => zzzNormalize(c.rarity))).sort(
            (a, b) => zzzRank(a) - zzzRank(b)
          )
        : uniq(allChars.map((c) => String(c.rarity))).sort(
            (a, b) => Number(a) - Number(b)
          );
    return base;
  }, [allChars, prefix]);

  const filtered = useMemo(() => {
    return allChars.filter((c) => {
      const okSex = sex ? c.gender === sex : true;
      const okFaction = faction ? c.faction === faction : true;
      const okElem = element ? c.element === element : true;
      const okType = ctype ? c.type === ctype : true;
      let okRarity = true;
      if (rarity) {
        okRarity =
          prefix === "ZZZ"
            ? zzzNormalize(c.rarity) === rarity
            : String(c.rarity) === rarity;
      }
      return okSex && okFaction && okElem && okType && okRarity;
    });
  }, [allChars, sex, rarity, faction, element, ctype, prefix]);

  // Carrousel vertical (5 visibles + fade)
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
  }, [sex, rarity, faction, element, ctype]);

  const hasActiveFilter = !!(sex || rarity || faction || element || ctype);

  const wrapIndex = (i) =>
    filtered.length ? (i + filtered.length) % filtered.length : 0;
  const clampIndex = (i) =>
    filtered.length ? Math.max(0, Math.min(i, filtered.length - 1)) : 0;

  const next = () => {
    if (!filtered.length) return;
    setIndex((i) => (hasActiveFilter ? clampIndex(i + 1) : wrapIndex(i + 1)));
  };
  const prev = () => {
    if (!filtered.length) return;
    setIndex((i) => (hasActiveFilter ? clampIndex(i - 1) : wrapIndex(i - 1)));
  };

  const touchY = useRef(0);
  const locked = useRef(false);

  const eventInSidebar = (e) => {
    const el = sidebarRef?.current;
    if (!el) return false;
    const path = typeof e.composedPath === "function" ? e.composedPath() : [];
    return path.length ? path.includes(el) : el.contains(e.target);
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (eventInSidebar(e)) return;
      if (locked.current || filtered.length === 0) return;
      locked.current = true;
      (e.deltaY > 0 ? next : prev)();
      setTimeout(() => (locked.current = false), 450);
    };
    const onKey = (e) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        next();
      }
      if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      }
    };
    const ts = (e) => {
      if (!eventInSidebar(e)) touchY.current = e.touches[0].clientY;
    };
    const te = (e) => {
      if (eventInSidebar(e)) return;
      const dy = e.changedTouches[0].clientY - touchY.current;
      if (Math.abs(dy) > 40) dy < 0 ? next() : prev();
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
  }, [filtered.length, hasActiveFilter]);

  return (
    <main className="relative grid h-full grid-cols-1 gap-4 overflow-hidden px-4 py-4 lg:grid-cols-[1fr_360px]">
      {/* Liste */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#0f0f10]">
        <header className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
          <h2 className="text-lg font-bold">Personnages {prefix}</h2>
          <div className="text-sm text-neutral-400">
            {filtered.length} résultat(s)
          </div>
        </header>

        <div className="relative h-[calc(100%-56px)]">
          {filtered.length === 0 && (
            <div className="absolute inset-0 grid place-items-center text-neutral-400">
              Aucun résultat avec ces filtres.
            </div>
          )}

          {/* Fenêtre 5 éléments avec wrap conditionnel */}
          {filtered.length > 0 &&
            [-2, -1, 0, 1, 2].map((offset) => {
              const j = hasActiveFilter
                ? clampIndex(index + offset)
                : wrapIndex(index + offset);
              if (hasActiveFilter && j !== index + offset) return null; // si hors bornes, ne pas rendre

              const c = filtered[j];
              const dist = offset;

              let cls = "";
              if (dist === 0)
                cls = "translate-y-[-50%] scale-100 opacity-100 z-30";
              else if (dist === -1)
                cls =
                  "translate-y-[calc(-50%-18vh)] scale-[0.985] opacity-90 z-20";
              else if (dist === 1)
                cls =
                  "translate-y-[calc(-50%+18vh)] scale-[0.985] opacity-90 z-20";
              else if (dist === -2)
                cls =
                  "translate-y-[calc(-50%-34vh)] scale-[0.96] opacity-60 z-10";
              else
                cls =
                  "translate-y-[calc(-50%+34vh)] scale-[0.96] opacity-60 z-10";

              const movieSrc = `${BASE}assets/img/${prefix.toLowerCase()}/perso/movie/${c.id.toLowerCase()}movie.png`;

              return (
                <article
                  key={c.id}
                  className={`absolute left-0 right-0 top-1/2 mx-auto w-[min(1080px,100%)] transition-transform transition-opacity duration-400 ease-[cubic-bezier(.2,.6,.2,1)] ${cls}`}
                  style={{
                    willChange: "transform, opacity",
                  }}
                >
                  <Link
                    to={characterPath(prefix, c)}
                    className="block focus:outline-none focus:ring-2 focus:ring-neutral-600 rounded-2xl"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border px-3 py-2 md:px-4 md:py-3
                        ${
                          dist === 0
                            ? "border-neutral-700 bg-[#141519] shadow-[0_16px_36px_rgba(0,0,0,.35)]"
                            : "border-neutral-800 bg-[#121318]"
                        }`}
                    >
                      {/* BG movie : coupe diagonale + fade */}
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <div
                          className="grid h-full w-full gap-3"
                          style={{
                            gridTemplateColumns:
                              "64px 1fr 150px 170px 210px 130px",
                          }}
                        >
                          <div className="col-span-3 relative overflow-hidden">
                            <div
                              className="absolute inset-0"
                              style={{
                                clipPath:
                                  "polygon(0% 0%, 100% 0%, calc(100% - 84px) 100%, 0% 100%)",
                              }}
                            >
                              <img
                                src={movieSrc}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover object-left select-none"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                                draggable="false"
                              />
                            </div>

                            <div
                              className="absolute right-0 top-0 h-full"
                              style={{
                                width: "120px",
                                transform: "skewX(-16deg)",
                                transformOrigin: "right center",
                                background:
                                  "linear-gradient(90deg, rgba(20,21,25,0) 0%, rgba(20,21,25,0.9) 100%)",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contenu au-dessus du BG */}
                      <div className="relative z-10 grid min-h-[112px] grid-cols-[64px_1fr_150px_170px_210px_130px] items-center gap-3">
                        <div className="overflow-hidden rounded-xl border border-neutral-700 bg-black">
                          <img
                            src={`${BASE}assets/img/${c.icon}`}
                            alt={c.name}
                            className="h-16 w-16 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = PLACEHOLDER;
                            }}
                            draggable="false"
                          />
                        </div>

                        <div className="relative z-10 justify-self-start">
                          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-3 py-1.5">
                            <span className="truncate text-sm font-semibold text-white max-w-[240px] md:max-w-[280px]">
                              {c.name}
                            </span>
                          </div>
                        </div>

                        <div className="justify-self-center self-center">
                          <InfoPill category="role" value={c.type} game={prefix} />
                        </div>

                        <div className="justify-self-center self-center">
                          <InfoPill category="element" value={c.element} game={prefix} />
                        </div>

                        <div className="justify-self-center self-center">
                          <InfoPill category="faction" value={c.faction} game={prefix} />
                        </div>

                        <div className="justify-self-center self-center">
                          <RarityBadge game={prefix} value={c.rarity} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
        </div>
      </section>

      {/* Filtres */}
      <aside className="h-full overflow-auto rounded-2xl border border-neutral-800 bg-[#0f0f10] p-4">
        <h3 className="mb-3 text-lg font-bold">Filtres</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-neutral-300">Sexe</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-[#15161a] px-3 py-2"
            >
              <option value="">Tous</option>
              {options.sex.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-neutral-300">Rareté</label>
            <select
              value={rarity}
              onChange={(e) => setRarity(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-[#15161a] px-3 py-2"
            >
              <option value="">Toutes</option>
              {options.rarity.map((v) => (
                <option key={v} value={v}>
                  {prefix === "ZZZ" ? v : `${v}★`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-neutral-300">Faction</label>
            <select
              value={faction}
              onChange={(e) => setFaction(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-[#15161a] px-3 py-2"
            >
              <option value="">Toutes</option>
              {options.faction.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-neutral-300">Élément</label>
            <select
              value={element}
              onChange={(e) => setElement(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-[#15161a] px-3 py-2"
            >
              <option value="">Tous</option>
              {options.element.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-sm text-neutral-300">Type</label>
            <select
              value={ctype}
              onChange={(e) => setCType(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-[#15161a] px-3 py-2"
            >
              <option value="">Tous</option>
              {options.type.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => {
              setSex("");
              setRarity("");
              setFaction("");
              setElement("");
              setCType("");
            }}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-800"
          >
            Réinitialiser
          </button>
          <div className="text-xs text-neutral-400">Molette ou ↑/↓ pour naviguer</div>
        </div>
      </aside>
    </main>
  );
}
