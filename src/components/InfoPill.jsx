// src/components/InfoPill.jsx
import React from "react";

const BASE = import.meta.env.BASE_URL ?? "/";

// utils
const slugify = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
const condense = (s) => slugify(s).replace(/-/g, "");

// dossiers
const CAT_DIR = { element: "elements", role: "role", faction: "faction" };

/* ---- ZZZ maps ---- */
const ELEMENT_SYNONYMS_ZZZ = {
  electrique: ["électrique", "electrique", "foudre", "lightning", "electric"],
  ether: ["éther", "ether"],
  feu: ["feu", "fire"],
  glace: ["glace", "ice"],
  physique: ["physique", "physical"],
};
const ROLE_SYNONYMS_ZZZ = {
  anomaly: ["anomaly", "anomalie"],
  attack: ["attack", "attaque", "assaut"],
  defense: ["defense", "défense"],
  rupture: ["rupture"],
  stun: ["stun", "etourdissement", "étourdissement"],
  support: ["support", "soutien"],
};

function mapElementKeyForGame(game, value) {
  if ((game || "").toUpperCase() !== "ZZZ") return slugify(value);
  const key = slugify(value);
  for (const k in ELEMENT_SYNONYMS_ZZZ)
    if (ELEMENT_SYNONYMS_ZZZ[k].some((v) => slugify(v) === key)) return k;
  return key;
}
function mapRoleKeyForGame(game, value) {
  if ((game || "").toUpperCase() !== "ZZZ") return slugify(value);
  const key = slugify(value);
  for (const k in ROLE_SYNONYMS_ZZZ)
    if (ROLE_SYNONYMS_ZZZ[k].some((v) => slugify(v) === key)) return k;
  return key;
}

function candidateIconUrls(category, value, game) {
  const dir = CAT_DIR[category] || slugify(category);
  const g = game ? slugify(game) : null;

  let key = slugify(value);
  if (category === "element") key = mapElementKeyForGame(game, value);
  if (category === "role") key = mapRoleKeyForGame(game, value);

  const keys = [key, condense(key)];
  const exts = ["png", "svg", "webp"];
  const tries = [];
  if (g)
    keys.forEach((k) =>
      exts.forEach((ext) =>
        tries.push(`${BASE}assets/img/${g}/${dir}/${k}.${ext}`)
      )
    );
  keys.forEach((k) =>
    exts.forEach((ext) =>
      tries.push(`${BASE}assets/img/common/${dir}/${k}.${ext}`)
    )
  );
  return tries;
}

const FALLBACK = {
  element: {
    electrique: "⚡",
    feu: "🔥",
    glace: "❄️",
    ether: "🧬",
    physique: "🗡️",
  },
  role: {
    anomaly: "🧪",
    attack: "⚔️",
    defense: "🛡️",
    rupture: "💥",
    stun: "💫",
    support: "🛠️",
  },
  faction: { default: "🏳️" },
};
function emojiFallback(category, value, game) {
  const kEl = mapElementKeyForGame(game, value);
  const kRo = mapRoleKeyForGame(game, value);
  if (category === "element") return FALLBACK.element[kEl] ?? "✨";
  if (category === "role") return FALLBACK.role[kRo] ?? "🎖️";
  if (category === "faction") return FALLBACK.faction.default;
  return "•";
}

// tailles — md ≈ 40px (≈60% de 64px)
const SIZE = {
  sm: { dim: "h-5 w-5", pad: "px-2 py-1", text: "text-sm" }, // 20px
  md: { dim: "h-10 w-10", pad: "px-3 py-1.5", text: "text-[0.95rem]" }, // 40px  ← DEFAULT
  lg: { dim: "h-12 w-12", pad: "px-3.5 py-2", text: "text-base" }, // 48px
  xl: { dim: "h-14 w-14", pad: "px-5 py-2", text: "text-lg" }, // 56px
};

export default function InfoPill({
  category,
  value,
  game,
  size = "md",
  className = "",
  hideLabel = false,
}) {
  const srcs = React.useMemo(
    () => candidateIconUrls(category, value, game),
    [category, value, game]
  );
  const [idx, setIdx] = React.useState(0);
  const showImg = idx < srcs.length;
  const S = SIZE[size] ?? SIZE.md;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-[#15161a] ${S.pad} ${className}`}
      title={`${category}: ${value}`}
    >
      {showImg ? (
        <img
          src={srcs[idx]}
          alt=""
          aria-hidden
          className={`${S.dim} object-contain`}
          onError={() => setIdx((i) => i + 1)}
          draggable="false"
        />
      ) : (
        <span
          aria-hidden
          className={`${S.dim} grid place-items-center leading-none`}
        >
          {emojiFallback(category, value, game)}
        </span>
      )}
      {!hideLabel && <span className={`leading-none ${S.text}`}>{value}</span>}
    </span>
  );
}
