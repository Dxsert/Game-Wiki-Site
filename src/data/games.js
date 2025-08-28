// src/data/games.js
const BASE = import.meta.env.BASE_URL ?? "/";

const makeSections = (prefix) => [
  { label: "Mise à jour", slug: `${prefix}_Maj` },
  { label: "Perso", slug: `${prefix}_Perso` },
  { label: "Arme", slug: `${prefix}_Arme` },
  { label: "Quêtes", slug: `${prefix}_Quete` },
  { label: "Événement", slug: `${prefix}_Event` },
  { label: "Carte", slug: `${prefix}_Carte` },
  { label: "Solution", slug: `${prefix}_Solution` },
];

export const games = [
  {
    id: "zzz",
    name: "Zenless Zone Zero",
    prefix: "ZZZ",
    img: `${BASE}assets/img/ZZZ.png`,
    sections: makeSections("ZZZ"),
  },
  {
    id: "hsr",
    name: "Honkai: Star Rail",
    prefix: "HSR",
    img: `${BASE}assets/img/HSR.png`,
    sections: makeSections("HSR"),
  },
  {
    id: "gi",
    name: "Genshin Impact",
    prefix: "GI",
    img: `${BASE}assets/img/GI.png`,
    sections: makeSections("GI"),
  },
];
