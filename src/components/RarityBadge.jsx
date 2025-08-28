// src/components/RarityBadge.jsx
import React from "react";
const BASE = import.meta.env.BASE_URL ?? "/";

const toZzzKey = (v) => {
  const s = String(v).trim().toUpperCase();
  if (
    s === "S" ||
    s === "5" ||
    s.startsWith("5★") ||
    s === "S-TIER" ||
    s === "STIER"
  )
    return "stier";
  if (
    s === "A" ||
    s === "4" ||
    s.startsWith("4★") ||
    s === "A-TIER" ||
    s === "ATIER"
  )
    return "atier";
  if (
    s === "B" ||
    s === "3" ||
    s.startsWith("3★") ||
    s === "B-TIER" ||
    s === "BTIER"
  )
    return "btier";
  return null;
};
const toZzzLetter = (v) => {
  const s = String(v).trim().toUpperCase();
  if (s === "5" || s.startsWith("5★")) return "S";
  if (s === "4" || s.startsWith("4★")) return "A";
  if (s === "3" || s.startsWith("3★")) return "B";
  if (["S", "A", "B"].includes(s)) return s;
  return s;
};

// tailles — md ≈ 40px
const SIZE = {
  sm: { pad: "px-2 py-1", txt: "text-sm", img: "h-6" }, // 24px img
  md: { pad: "px-3 py-1.5", txt: "text-[0.95rem]", img: "h-10" }, // 40px img  ← DEFAULT
  lg: { pad: "px-3.5 py-2", txt: "text-base", img: "h-12" }, // 48px img
  xl: { pad: "px-5 py-2", txt: "text-lg", img: "h-14" }, // 56px img
};

export default function RarityBadge({
  game,
  value,
  size = "md",
  className = "",
}) {
  const g = (game || "").toUpperCase();
  const isZZZ = g === "ZZZ";
  const S = SIZE[size] ?? SIZE.md;

  if (isZZZ) {
    const key = toZzzKey(value);
    const candidates = key
      ? [
          `${BASE}assets/img/zzz/rarity/${key}.png`,
          `${BASE}assets/img/zzz/rarity/${key}.webp`,
          `${BASE}assets/img/zzz/rarity/${key}.svg`,
        ]
      : [];
    const [idx, setIdx] = React.useState(0);
    const showImg = idx < candidates.length;

    return (
      <span
        className={`inline-flex items-center rounded-full border border-neutral-700 bg-[#15161a] ${S.pad} ${className}`}
      >
        {showImg ? (
          <img
            src={candidates[idx]}
            alt={`Rareté ${toZzzLetter(value)}`}
            className={`${S.img} w-auto`}
            onError={() => setIdx((i) => i + 1)}
            draggable="false"
          />
        ) : (
          <span className={`font-bold ${S.txt}`}>{toZzzLetter(value)}</span>
        )}
      </span>
    );
  }

  const n = Number(value);
  const label = Number.isFinite(n) ? `${n}★` : String(value);
  return (
    <span
      className={`inline-flex items-center rounded-full border border-neutral-700 bg-[#15161a] ${S.pad} ${S.txt} ${className}`}
    >
      {label}
    </span>
  );
}
