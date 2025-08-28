// src/data/ressource.js
// Catalogue des matériaux + plans de coûts (niveau, élévation/ascension, compétences)
// Conçu pour être étendu facilement à d'autres jeux (HSR, GI, …).

/**
 * TYPES DE MATS (suggestion)
 * - "credit"        : monnaie du jeu
 * - "char-exp"      : matériaux d’EXP personnage
 * - "drop-common"   : loot commun (ennemis / stages)
 * - "drop-elite"    : loot élite
 * - "boss"          : boss hebdo/monde
 * - "book-skill"    : livre/puce de compétence
 * - "special"       : items particuliers (domaines, events…)
 */

export const resourcesByGame = {
  ZZZ: {
    materials: {
      // === Monnaie & EXP (PLACEHOLDERS : mets les vrais noms/icônes que tu utilises dans /assets/img) ===
      zzz_credit: {
        id: "zzz_credit",
        name: "Crédits",
        rarity: 1,
        type: "credit",
        icon: "zzz/mats/credit.png",
        sources: ["Commissions", "Simulations", "Caches"],
      },
      zzz_exp_s: {
        id: "zzz_exp_s",
        name: "EXP Agent (S)",
        rarity: 2,
        type: "char-exp",
        icon: "zzz/mats/exp_s.png",
        sources: ["Simulations", "Quêtes"],
      },
      zzz_exp_m: {
        id: "zzz_exp_m",
        name: "EXP Agent (M)",
        rarity: 3,
        type: "char-exp",
        icon: "zzz/mats/exp_m.png",
        sources: ["Simulations", "Quêtes"],
      },
      zzz_exp_l: {
        id: "zzz_exp_l",
        name: "EXP Agent (L)",
        rarity: 4,
        type: "char-exp",
        icon: "zzz/mats/exp_l.png",
        sources: ["Simulations avancées"],
      },

      // === Lignes élémentaires / puces (exemples génériques) ===
      phys_chip_1: {
        id: "phys_chip_1",
        name: "Basic Physical Chip",
        rarity: 2,
        type: "book-skill",
        icon: "zzz/mats/phys_chip_1.png",
        sources: ["A REMPLIRE"],
      },
      phys_chip_2: {
        id: "phys_chip_2",
        name: "Advanced Physical Chip",
        rarity: 3,
        type: "book-skill",
        icon: "zzz/mats/phys_chip_2.png",
        sources: ["A REMPLIRE"],
      },
      phys_chip_3: {
        id: "phys_chip_3",
        name: "Specialized Physical Chip",
        rarity: 4,
        type: "book-skill",
        icon: "zzz/mats/phys_chip_3.png",
        sources: ["A REMPLIRE"],
      },
      fire_chip_1: {
        id: "fire_chip_1",
        name: "Basic Fire Chip",
        rarity: 2,
        type: "book-skill",
        icon: "zzz/mats/fire_chip_1.png",
        sources: ["A REMPLIRE"],
      },
      fire_chip_2: {
        id: "phys_chip_2",
        name: "Advanced Fire Chip",
        rarity: 3,
        type: "book-skill",
        icon: "zzz/mats/fire_chip_2.png",
        sources: ["A REMPLIRE"],
      },
      fire_chip_3: {
        id: "fire_chip_3",
        name: "Specialized Fire Chip",
        rarity: 4,
        type: "book-skill",
        icon: "zzz/mats/fire_chip_3.png",
        sources: ["A REMPLIRE"],
      },
      ice_chip_1: {
        id: "ice_chip_1",
        name: "Basic Ice Chip",
        rarity: 2,
        type: "book-skill",
        icon: "zzz/mats/ice_chip_1.png",
        sources: ["A REMPLIRE"],
      },
      ice_chip_2: {
        id: "ice_chip_2",
        name: "Advanced Ice Chip",
        rarity: 3,
        type: "book-skill",
        icon: "zzz/mats/ice_chip_2.png",
        sources: ["A REMPLIRE"],
      },
      ice_chip_3: {
        id: "ice_chip_3",
        name: "Specialized Ice Chip",
        rarity: 4,
        type: "book-skill",
        icon: "zzz/mats/ice_chip_3.png",
        sources: ["A REMPLIRE"],
      },
      ether_chip_1: {
        id: "ice_chip_1",
        name: "Basic Ether Chip",
        rarity: 2,
        type: "book-skill",
        icon: "zzz/mats/ether_chip_1.png",
        sources: ["A REMPLIRE"],
      },
      ether_chip_2: {
        id: "ether_chip_2",
        name: "Advanced Ether Chip",
        rarity: 3,
        type: "book-skill",
        icon: "zzz/mats/ether_chip_2.png",
        sources: ["A REMPLIRE"],
      },
      ether_chip_3: {
        id: "ether_chip_3",
        name: "Specialized Ether Chip",
        rarity: 4,
        type: "book-skill",
        icon: "zzz/mats/ether_chip_3.png",
        sources: ["A REMPLIRE"],
      },
      electric_chip_1: {
        id: "electric_chip_1",
        name: "Basic Electric Chip",
        rarity: 2,
        type: "book-skill",
        icon: "zzz/mats/electric_chip_1.png",
        sources: ["A REMPLIRE"],
      },
      electric_chip_2: {
        id: "electric_chip_2",
        name: "Advanced Electric Chip",
        rarity: 3,
        type: "book-skill",
        icon: "zzz/mats/electric_chip_2.png",
        sources: ["A REMPLIRE"],
      },
      electric_chip_3: {
        id: "electric_chip_3",
        name: "Specialized Electric Chip",
        rarity: 4,
        type: "book-skill",
        icon: "zzz/mats/electric_chip_3.png",
        sources: ["A REMPLIRE"],
      },

      // === Drops communs / élites (exemples génériques) ===
      anomaly_core_1: {
        id: "anomaly_core_1",
        name: "Basic Anomaly Certification Seal",
        rarity: 2,
        type: "drop-common",
        icon: "zzz/mats/anomaly_core_1.png",
        sources: ["A REMPLIRE"],
      },
      anomaly_core_2: {
        id: "anomaly_core_2",
        name: "Advanced Anomaly Certification Seal",
        rarity: 3,
        type: "drop-elite",
        icon: "zzz/mats/anomaly_core_2.png",
        sources: ["A REMPLIRE"],
      },
      anomaly_core_3: {
        id: "anomaly_core_3",
        name: "Controller Anomaly Certification Seal",
        rarity: 4,
        type: "drop-elite",
        icon: "zzz/mats/anomaly_core_3.png",
        sources: ["A REMPLIRE"],
      },

      // === Boss / Hebdo (exemples) ===
      boss_matrix: {
        id: "boss_matrix",
        name: "Matrice Instable",
        rarity: 5,
        type: "boss",
        icon: "zzz/mats/boss_matrix.png",
        sources: ["A REMPLIRE"],
      },
      weekly_chip: {
        id: "weekly_chip",
        name: "Circuit Avancé",
        rarity: 5,
        type: "boss",
        icon: "zzz/mats/weekly_chip.png",
        sources: ["A REMPLIRE"],
      },
    },

    /**
     * Plans par personnage (clé = slug/id en minuscules)
     * Chaque plan contient :
     * - ascension: étapes 1..6 (élévation), chaque étape a { cost: { credits, items: [{id, qty}] } }
     * - levelUp:   segments de nivellage (optionnel si tu fais un calcul global ailleurs)
     * - skills:    catégories (normal, skill, ex, assist, chain, ultimate, core ...) → étapes 1..10
     *
     * ⚠ Les quantités ci-dessous sont des EXEMPLES. Remplace par tes valeurs réelles.
     */
    characters: {
      // === ALICE (exemple rempli) ===
      alice: {
        ascension: [
          {
            phase: 1,
            levelCap: 20,
            cost: {
              credits: 20000,
              items: [
                { id: "anomaly_core_1", qty: 3 },
                { id: "phys_chip_1", qty: 2 },
              ],
            },
          },
          {
            phase: 2,
            levelCap: 40,
            cost: {
              credits: 40000,
              items: [
                { id: "anomaly_core_1", qty: 10 },
                { id: "phys_chip_1", qty: 6 },
              ],
            },
          },
          {
            phase: 3,
            levelCap: 50,
            cost: {
              credits: 60000,
              items: [
                { id: "anomaly_core_2", qty: 6 },
                { id: "phys_chip_2", qty: 6 },
              ],
            },
          },
          {
            phase: 4,
            levelCap: 60,
            cost: {
              credits: 80000,
              items: [
                { id: "anomaly_core_2", qty: 12 },
                { id: "phys_chip_2", qty: 9 },
                { id: "boss_matrix", qty: 2 },
              ],
            },
          },
        ],

        // Segments d'EXP (facultatif). Tu peux calculer ailleurs si tu préfères.
        levelUp: [
          // { from: 1, to: 20, cost: { credits: 12000, items: [{ id: "zzz_exp_s", qty: 12 }] } },
          // ...
        ],

        // Compétences (exemple : 10 rangs)
        skills: {
          normal: [
            {
              rank: 1,
              cost: {
                credits: 5000,
                items: [
                  { id: "phys_chip_1", qty: 3 },
                  { id: "anomaly_core_1", qty: 2 },
                ],
              },
            },
            {
              rank: 2,
              cost: {
                credits: 10000,
                items: [
                  { id: "phys_chip_1", qty: 6 },
                  { id: "anomaly_core_1", qty: 4 },
                ],
              },
            },
            {
              rank: 3,
              cost: {
                credits: 15000,
                items: [
                  { id: "phys_chip_2", qty: 3 },
                  { id: "anomaly_core_2", qty: 2 },
                ],
              },
            },
            {
              rank: 4,
              cost: {
                credits: 20000,
                items: [
                  { id: "phys_chip_2", qty: 6 },
                  { id: "anomaly_core_2", qty: 4 },
                ],
              },
            },
            {
              rank: 5,
              cost: {
                credits: 25000,
                items: [
                  { id: "phys_chip_3", qty: 3 },
                  { id: "anomaly_core_3", qty: 2 },
                ],
              },
            },
            {
              rank: 6,
              cost: {
                credits: 30000,
                items: [
                  { id: "phys_chip_3", qty: 6 },
                  { id: "anomaly_core_3", qty: 4 },
                ],
              },
            },
            {
              rank: 7,
              cost: { credits: 35000, items: [{ id: "weekly_chip", qty: 1 }] },
            },
            {
              rank: 8,
              cost: { credits: 40000, items: [{ id: "weekly_chip", qty: 2 }] },
            },
            {
              rank: 9,
              cost: { credits: 45000, items: [{ id: "weekly_chip", qty: 3 }] },
            },
            {
              rank: 10,
              cost: { credits: 50000, items: [{ id: "weekly_chip", qty: 4 }] },
            },
          ],
          // adapte/duplique la même structure pour les autres branches si tu veux les séparer :
          skill: [], // compétence
          ex: [], // ex compétence
          assist: [], // assist
          chain: [], // chaîne
          ultimate: [], // ultime
          core: [], // passif
        },
      },

      // === PLACEHOLDERS POUR AUTRES PERSOS (copie/colle et renomme la clé) ===
      // "anby": { ascension: [...], levelUp: [...], skills: {...} },
      // "nicole": {...},
    },
  },

  // HSR: { materials: {...}, characters: {...} },
  // GI:  { materials: {...}, characters: {...} },
};

// =============== UTILITAIRES ===============

/** Récupérer un matériau par id. */
export function getMaterial(game, id) {
  return resourcesByGame?.[game]?.materials?.[id] || null;
}

/** Additionne deux coûts { credits, items:[{id,qty}] } */
export function addCost(a = {}, b = {}) {
  const out = { credits: 0, items: {} };
  const push = (c) => {
    if (!c) return;
    out.credits += c.credits || 0;
    (c.items || []).forEach(({ id, qty }) => {
      if (!id || !qty) return;
      out.items[id] = (out.items[id] || 0) + qty;
    });
  };
  push(a);
  push(b);
  // retransforme items-obj → array
  return {
    credits: out.credits,
    items: Object.entries(out.items).map(([id, qty]) => ({ id, qty })),
  };
}

/** Somme d'une liste de coûts. */
export function sumCosts(list = []) {
  return list.reduce((acc, c) => addCost(acc, c), { credits: 0, items: [] });
}

/** Total ascension (toutes phases) pour un perso. */
export function totalAscension(game, charKey) {
  const plan = resourcesByGame?.[game]?.characters?.[charKey]?.ascension || [];
  const costs = plan.map((p) => p?.cost).filter(Boolean);
  return sumCosts(costs);
}

/** Total d'une branche de compétence (ex: "normal"). */
export function totalSkillBranch(game, charKey, branch = "normal") {
  const plan =
    resourcesByGame?.[game]?.characters?.[charKey]?.skills?.[branch] || [];
  return sumCosts(plan.map((r) => r?.cost).filter(Boolean));
}

/** Total de toutes les branches de compétences. */
export function totalAllSkills(game, charKey) {
  const skills = resourcesByGame?.[game]?.characters?.[charKey]?.skills || {};
  const branches = Object.keys(skills);
  const costs = branches.flatMap((b) =>
    (skills[b] || []).map((r) => r?.cost).filter(Boolean)
  );
  return sumCosts(costs);
}

/** Total global (ascension + toutes compétences). */
export function totalCharacterAll(game, charKey) {
  return addCost(totalAscension(game, charKey), totalAllSkills(game, charKey));
}
