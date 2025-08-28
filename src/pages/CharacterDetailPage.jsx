// src/pages/CharacterDetailPage.jsx
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { charactersByGame } from "../data/characters";
import { infoPersoByGame } from "../data/infoperso";
import InfoPill from "../components/InfoPill";
import RarityBadge from "../components/RarityBadge";
import MiniCharacterCarousel from "../components/MiniCharacterCarousel";
import CharacterInfo from "../components/CharacterInfo";
import CharacterResources from "../components/CharacterResources"; // <-- NEW

const IMG_BASE = "/assets/img";

export default function CharacterDetailPage() {
  const { game = "", id = "" } = useParams(); // /:game/perso/:id
  const prefix = game.toUpperCase();
  const list = charactersByGame[prefix] || [];

  const c = useMemo(
    () =>
      list.find(
        (x) =>
          x.id?.toLowerCase() === id.toLowerCase() ||
          x.slug?.toLowerCase() === id.toLowerCase() ||
          x.name?.toLowerCase().replace(/\s+/g, "") === id.toLowerCase()
      ),
    [list, id]
  );

  const backHref = `/${prefix.toLowerCase()}_Perso`;
  if (!c) {
    return (
      <main className="p-4">
        <div className="mx-auto max-w-7xl rounded-2xl border border-neutral-800 bg-[#0f0f10] p-6">
          <div className="mb-4">
            <Link
              to={backHref}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-800"
            >
              ← Retour
            </Link>
          </div>
          <p className="text-neutral-300">Personnage introuvable.</p>
        </div>
      </main>
    );
  }

  const movieSrc = `${IMG_BASE}/${prefix.toLowerCase()}/perso/movie/${c.id.toLowerCase()}movie.png`;
  const iconSrc = `${IMG_BASE}/${c.icon}`;

  const charKey = (c.slug || c.id || "").toLowerCase();
  const infoData = (infoPersoByGame[prefix] || {})[charKey] || null;

  const [activeTab, setActiveTab] = useState(null);
  const categories = [
    "Info perso",
    "Ressource",
    "Artéfact",
    "Arme",
    "Team",
    "Stat calculator",
  ];

  const renderTab = {
    "Info perso": () => <CharacterInfo data={infoData} />,
    "Ressource": () => <CharacterResources game={prefix} charKey={charKey} />, // <-- NEW
    // "Artéfact": () => <CharacterArtifacts ... />,
    // "Arme": () => <CharacterWeapon ... />,
    // "Team": () => <CharacterTeams ... />,
    // "Stat calculator": () => <CharacterStats ... />,
  };

  return (
    <main className="p-3 md:p-4">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 lg:grid-cols-[1fr_360px]">
        {/* Colonne principale */}
        <section className="rounded-2xl border border-neutral-800 bg-[#0f0f10] p-3 md:p-4">
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <Link
              to={backHref}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-800"
            >
              ← Retour
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-3 py-1.5">
                <img
                  src={iconSrc}
                  alt={c.name}
                  className="h-6 w-6 rounded-md object-cover"
                  onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                />
                <span className="text-white font-semibold">{c.name}</span>
              </div>
              <RarityBadge game={prefix} value={c.rarity} />
            </div>
          </div>

          {/* Image + spécificités */}
          <div className="grid grid-cols-1 items-center gap-4 xl:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111215] min-h-[260px]">
              <img
                src={movieSrc}
                alt=""
                className="h-full w-full object-cover object-left"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            {/* Spécificités (centré + largeur réduite) */}
            <div className="rounded-2xl border border-neutral-800 bg-[#111215] px-3 py-4 md:px-4 md:py-5 w-full max-w-[420px] mx-auto">
              <div className="flex flex-col items-center gap-3">
                <InfoPill category="element" value={c.element} game={prefix} />
                <InfoPill category="role" value={c.type} game={prefix} />
                <InfoPill category="faction" value={c.faction} game={prefix} />
              </div>
            </div>

            {/* Onglets */}
            <div className="xl:col-span-2 mt-1 space-y-4">
              {activeTab && (
                <div className="mb-1 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-semibold transition
                        ${
                          activeTab === cat
                            ? "border-neutral-600 bg-[#1c1d22] text-white"
                            : "border-neutral-700 bg-[#15161a] text-neutral-300 hover:bg-[#1c1d22]"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                  <button
                    onClick={() => setActiveTab(null)}
                    className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-sm text-neutral-400 hover:text-white"
                  >
                    ✕ Fermer
                  </button>
                </div>
              )}

              {/* Mode normal : tuiles */}
              {!activeTab &&
                categories.map((cat) => (
                  <CategoryBox key={cat} title={cat} onClick={() => setActiveTab(cat)} />
                ))}

              {/* Mode onglet : contenu spécifique */}
              {activeTab && (
                <CategoryBox
                  title={activeTab}
                  active
                  big
                  render={renderTab[activeTab]}
                  onClick={() => {}}
                />
              )}
            </div>
          </div>
        </section>

        {/* Colonne droite : mini carrousel */}
        <aside className="rounded-2xl border border-neutral-800 bg-[#0f0f10] overflow-hidden">
          <MiniCharacterCarousel game={game.toLowerCase()} currentId={c.slug || c.id} />
        </aside>
      </div>
    </main>
  );
}

/* -------- Composant Section générique -------- */
function CategoryBox({ title, onClick, active, big, render }) {
  if (active && big) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-[#111215] p-6">
        <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
        {typeof render === "function" ? (
          render()
        ) : (
          <p className="text-neutral-400">
            Contenu détaillé pour <b>{title}</b> (à compléter).
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl border border-neutral-800 bg-[#111215] p-4 hover:border-neutral-600 transition"
    >
      <div className="text-center text-2xl font-semibold text-neutral-100 md:text-3xl">
        {title}
      </div>
    </div>
  );
}
