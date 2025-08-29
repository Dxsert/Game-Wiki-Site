// src/data/infoperso.js
import { charactersByGame } from "./characters";

const lc = (s) => (s || "").toString().toLowerCase().trim();

// ---------------- Overrides manuels ----------------
const ZZZ_OVERRIDES = {
  alice: {
    title: "Agent de Spook Shack — Type Anomaly (Physique)",
    summary:
      "Alice est une agente S-rank du **Spook Shack**, de type **Physique** et spécialisée dans le type **Anomaly**. " +
      "Sa force réside dans l’application rapide d’Anomaly, utilisant sa jauge **Blade Etiquette** " +
      "pour déclencher des attaques puissantes comme **Starshine Waltz**, capables de libérer un " +
      "**Polarized Assault** instantané. " +
      "Son style combine dégâts ciblés, DoT Anomaly et effets de Disorder, " +
      "renforcés par son passif qui augmente les dégâts selon le temps restant de Disorder. " +
      "Cela en fait une alliée redoutable pour créer des ouvertures stratégiques à haut impact.",

    profile: {
      Affiliation: "Spook Shack",
      Élément: "Physique",
      Type: "Anomaly",
      Rôle: "Contrôle / Setup",
      Ville: "New Eridu",
      Release: "Version 2.1 (6 Août 2025)",
    },

    baseStats: {
      PV: 617,
      ATK: 127,
      DEF: 49,
      Impact: 86,
      AnomalyMastery: 106,
      AnomalyProficiency: 118,
    },

    baseStats60: {
      PV: 7674,
      ATK: 805.7,
      DEF: 606.6,
      Impact: 86,
      AnomalyMastery: 106,
      AnomalyProficiency: 118,
    },

    skills: [
      {
        name: "Attaque normale — Ouverture céleste",
        desc: "Enchainement de 5 entailles frontales, infligeant des <span style='color:#f2b600'>****DGT physiques****</span>. Lorsque Alice inglige Assaut à l'aide de l'accumulation d'anomalie, le 5e coup de sa prochaine attaque normale sera renforcé.",
      },
      {
        name: "Attaque normale - Valse de la Brillance stellaire",
        desc:
          "Alice consomme jusqu’à 3 barres de Rite de l’épée pour charger une attaque infligeant des <span style='color:#f2b600'>****DGT physiques****</span> dont la puissance dépend du niveau de charge." +
          "Au Niv. 3, l’attaque finale déclenche Assaut polarisé, infligeant 100 % de DGT d’Assaut et pouvant provoquer un Dysfonctionnement." +
          "\n**[Le personnage est invulnérable pendant l’utilisation]**",
      },
      {
        name: "Esquive - Agilité lapine",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "esquive" },
          "pour effectuer une esquive rapide. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque de bond - Bourrasque de l'épée dansante",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "pendant une esquive pour lancer une entaille vers les ennemis en face, leur infligeant des <span style='color:#f2b600'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "Contre d'esquive - Cérémonie de l'épée lumineus",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "lors d’une esquive parfaite pour enchaîner avec une entaille suivie d’un coup de pied, infligeant des <span style='color:#f2b600'>**DGT physiques**</span> aux ennemis en face. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien rapide - Incisions imbriquées",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur",
          { type: "icon", name: "assist" },
          "pour enchaîner avec une entaille suivie d’un coup de pied, infligeant des <span style='color:#f2b600'>**DGT physiques**</span> aux ennemis en face. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien défensif - Garde de parade",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d’être attaqué, appuyez sur",
          { type: "icon", name: "assist" },
          "pour parer l’attaque de l’ennemi et lui infliger une confusion importante. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien de suivi - Riposte en croix",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "assist" },
          "après un soutien défensif pour effectuer un dash qui entaille les ennemis en face, leur infligeant des <span style='color:#f2b600'>**DGT physiques**</span>. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque spéciale - Aube perçante",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "specialattack" },
          "pour projeter l’épée et traverser les ennemis en face, leur infligeant des <span style='color:#f2b600'>**DGT physiques**</span>. Lors de l’activation, il est possible de déclencher une esquive parfaite. En cas d’esquive parfaite grâce à cette compétence, appuyez sur",
          { type: "icon", name: "basicattack" },
          "pour enchaîner directement avec le 5ᵉ coup de l’attaque normale (Ouverture céleste). \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque spéciale EX - Percée de l'aurore - Croix du Nord",
        desc: [
          "Avec suffisamment d’énergie, placer le stick vers l’avant (Z) et appuyer sur",
          { type: "icon", name: "specialattack" },
          "permet d’asséner une impulsion traversant les ennemis et leur infligeant d’importants <span style='color:#f2b600'>**DGT physiques**</span>. À l’activation, une esquive parfaite peut être déclenchée, permettant de récupérer 10 pts de Rite de l’épée. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque spéciale EX - Percée de l'aurore - Croix du Sud",
        desc: [
          "Avec suffisamment d’énergie, placer le stick au centre ou en arrière (S) et appuyer sur",
          { type: "icon", name: "specialattack" },
          "permet d’asséner une entaille en reculant, puis de foncer vers l’avant en infligeant d’importants <span style='color:#f2b600'>**DGT physiques**</span>. À l’activation, une esquive parfaite peut être déclenchée, permettant de récupérer 10 pts de Rite de l’épée. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Enchaînement - Intermission météore",
        desc: [
          "Assène plusieurs entailles puissantes, infligeant d’importants <span style='color:#f2b600'>**DGT physiques**</span>. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Ultime - Grand final météore",
        desc: [
          "Assène plusieurs entailles puissantes consécutives sur les ennemis dans une large zone, infligeant d’importants <span style='color:#f2b600'>**DGT physiques**</span>. Cette compétence génère 200 pts de Rite de l’épée. \n[Vous n’accumulez pas de Rite de l’épée] \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
    ],

    combos: [
      {
        name: "Fenêtre Burst sûre",
        input: "Esquive parfaite → EX Champ → Switch DPS → Chaîne",
        notes: "Setup complet pour maximiser le burst allié.",
      },
      {
        name: "Regroupement rapide",
        input: "Assist → EX Champ → Chaîne",
        notes: "Ramène les packs dispersés dans une seule fenêtre.",
      },
      {
        name: "Cycle de maintien",
        input: "EX Champ → Basic → Esquive parfaite → Switch",
        notes: "Maintient le contrôle en attendant la prochaine rotation.",
      },
    ],

    rotation: [
      "Engage avec **EX Champ** pour poser vulnérabilité et contrôle.",
      "Utilise Basic pour propager l’Anomaly.",
      "Cherche l’Esquive parfaite pour regagner le tempo.",
      "Active la **Chaîne** en synchro avec le carry.",
      "Ultime pour repousser/repack quand le combat devient chaotique.",
    ],

    tips: [
      "Pose son champ / EX Skill pour appliquer rapidement l’Anomaly.",

      "Garde au moins une esquive parfaite pour regagner de l’Étiquette.",

      "Utilise ses attaques chargées pour déclencher un Polarized Assault et rapprocher le Disorder.",

      "Laisse les DPS principaux (ex. Miyabi, Zhu Yuan, etc.) frapper dans la fenêtre.",
    ],
  },
  yuzuha: {
    title: "Agent de Spook Shack — Type Physique (Support)",
    summary:
      "Yuzuha est une agente S-rank du **Spook Shack**, orientée **support Anomaly**. " +
      "Elle génère des **Points de Sucre** via parade/assist et déclenche des **Aftershocks** (Hard Candy Shot) pour soutenir l’équipe. " +
      "Son EX/Ult appliquent **Sweet Scare** et confèrent **Souhait du Tanuki** (ATK% basé sur son ATK initiale + **DMG**/**Anomaly Buildup**), " +
      "ce qui la rend centrale dans les compos **Anomaly/Spook Shack**.",

    profile: {
      Affiliation: "Spook Shack",
      Élément: "Physique",
      Type: "Support",
      Rôle: "Buff / Support Anomaly",
      Animal: "Tanuki (Kama)",
      Ville: "New Eridu",
      Release: "Version 2.1 (16 Juillet 2025)",
    },

    baseStats: {
      // Niveau 1
      PV: 710,
      ATK: 109,
      DEF: 49,
      Impact: 86,
      AnomalyMastery: 88,
      AnomalyProficiency: 93,
    },

    baseStats60: {
      // Niveau 60/60
      PV: 8829,
      ATK: 683.2,
      DEF: 612.6,
      Impact: 86,
      AnomalyMastery: 88,
      AnomalyProficiency: 93,
    },

    skills: [
      {
        name: "Attaque normale - Griffes de tanuki",
        desc: [
          "Enchainement de 5 frappes frontales, infligeant des <span style='color:#f2b600'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "Attaque normale - Manteau de tanuki",
        desc: [
          "Maintenez",
          { type: "icon", name: "basicattack" },
          "pour entrer en posture défensive pendant 1,5 s. Si, durant cette période, vous subissez une attaque, vous la parez et infligez une forte Confusion, gagnant ainsi 1 point de Sucre.\n [Le personnage est invulnérable en cas de parade réussie]",
        ],
      },
      {
        name: "Attaque normal - Tir de praline",
        desc: [
          "Pendant que vous contrôlez un autre personnage et que Yuzuha dispose d’au moins 1 point de Sucre, celle-ci peut lancer une attaque off-field infligeant des <span style='color:#f2b600'>**DGT physiques**</span>. " +
            "Si l’Attaque Lourde Tir de Praline touche un ennemi, Yuzuha regagne 1 point de Sucre.\n" +
            "Tir de Praline est considéré comme un contrecoup.\n" +
            "Tir de Praline peut être déclenché une fois toutes les 8 s.\n" +
            "**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque normal - Sucreries d'artifice",
        desc: [
          "Les ennemis souffrant de l’effet **Frayeur sucrée** subissent une instance de **Sucreries d’artifice** toutes les 1 s, leur infligeant des <span style='color:#f2b600'>****DGT physiques****</span>." +
            "\nL’accumulation d’Anomalie ne contribue pas au calcul des DGT d’Anomalie." +
            "\nLe taux d’accumulation d’Anomalie augmente de <span style='color:#1bb500'>8,5%</span>.",
        ],
      },
      {
        name: "Attaque normal - Sucreries d'artifice - MAX",
        desc: [
          "Les ennemis souffrant de l’effet <b>Frayeur sucrée</b> subissent une instance de **Sucreries d’artifice** toutes les 1 s, leur infligeant des <span style='color:#f2b600'>**DGT physiques**</span> s’ils subissent une Attaque Lourde **Tir de Praline** ou une attaque de suivi." +
            "\nL’accumulation d’Anomalie ne contribue pas au calcul des DGT d’Anomalie." +
            "\nLe taux d’accumulation d’Anomalie augmente de <span style='color:#1bb500'>8,5%</span>.",
        ],
      },
      {
        name: "Attaque normal - Assistant tanuki",
        desc: [
          "Lorsque Yuzuha est off-field, Kama aide le personnage contrôlé en infligeant des <span style='color:#f2b600'>**DGT physiques**</span>." +
            "\nQaund l’attaque Manteau de Tanuki est lancée, Kama assiste Yuzuha en attaquant les ennemis et inflige des <span style='color:#f2b600'>**DGT physiques**</span>." +
            "\nKama hérite de l’ATQ initiale de Yuzuha.",
        ],
      },
      {
        name: "Esquive - Je t'ai fait peur ?",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "esquive" },
          "pour effectuer une esquive rapide." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "Attaque de bon - Pas de bol !",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "pendant une esquive pour lancer une frappe rapide vers les ennemis en face, leur infligeant des <span style='color:#f2b600'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "Contre d'esquive - L'heure des représailles a sonné !",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "lors d’une esquive parfaite pour enchaîner avec une frappe rapide infligeant des <span style='color:#f2b600'>**DGT physiques**</span>." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "Soutien rapide - Un petit dessert ?",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur",
          {type: "icon", name: "assist"},
          "pour enchaîner sur avec une frappe infligeant des <span style='color:#f2b600'>**DGT physiques**</span>."+
          "\n**[Le personnages est invulnérable pendant l'utilisation]**"
        ]
      },
      {
        name: "Soutien défensif - Le plein de rigolade",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d'être attaqué, appuyez sur",
          {type: "icon", name: "assist"},
          "pour parer l'attaque de l'ennemi et lui infliger une confusion importante."+
          "\nGagnez un point de Sucre à chaque parade réussie."+
          "\n**[Le personnages est invulnérable pendant l'utilisation]**"
        ]
      }
    ],

    playstyle: [
      "Support rythmique: **parade** → génère des Points de Sucre → **Aftershocks** off-field.",
      "EX/Ult pour appliquer **Sweet Scare** et rafraîchir **Souhait du Tanuki** (ATK+DMG+Buildup).",
      "Favorise les **teams Anomaly** (Miyabi, Alice, Vivian…) et/ou **Spook Shack**.",
    ],

    combos: [
      {
        name: "Buff instant + fenêtre de burst",
        input:
          "Perfect Dodge → EX instant → Switch DPS Anomaly → Heavy sur la cible",
        notes:
          "Applique Sweet Scare + donne **Souhait du Tanuki** avant le burst; Heavy peut **forcer la Chaîne**.",
      },
      {
        name: "Cycle parade → Aftershock",
        input:
          "Assist défensif/parade → We Have Cookies → Stuffed Hard Candy (chargé) → Switch",
        notes:
          "Génère/consomme les Points de Sucre et déclenche des **Sugarburst Max**.",
      },
      {
        name: "Refresh 40 s",
        input: "EX → (rotation DPS) → Ult quand dispo",
        notes:
          "Alterner EX/Ult pour **maintenir 100% d’uptime** de Souhait du Tanuki + batterie d’énergie.",
      },
    ],

    rotation: [
      "Entrée Yuzuha → **EX** (Sweet Scare + Souhait du Tanuki, +2 Points).",
      "Switch vers **DPS Anomaly** → Heavy pour tenter une **Chaîne forcée**.",
      "Rester off-field: laisser proc **Hard Candy Shot** (consomme 1 Point / 8 s).",
      "Revenir sur Yuzuha pour **parade/assist** si besoin (recharger les Points).",
      "**Ult** dès que dispo pour refresh des buffs + **rendre de l’énergie**.",
    ],

    tips: [
      "**Cap AM 200**: mod sur disques pour atteindre le bonus **+20% Buildup** et **+20% Anomaly/Disorder**.",
      "Garde **≥1 Point de Sucre** pour assurer des **Aftershocks** réguliers off-field.",
      "Pense **Heavy** sur cible non étourdie pour **forcer une Chaîne** (≈1/20 s).",
      "Refresh **Souhait du Tanuki** avant la fin (~40 s) via **EX** ou **Ult**.",
      "Synergie top: **Miyabi/Alice/Vivian** + Bangboo **Knightboo/Brawlerboo**.",
    ],
  },
  jufufu: {
    title: "Agent du Yunkui Summit — Type Fire (Stun Support)",
    summary:
      "Ju Fufu est une agente S-rank du **Yunkui Summit**, de type **Feu** et spécialisée dans le **Stun Support**. " +
      "Elle utilise son compagnon mécanique **Hu Wei** pour générer **Might** off-field, " +
      "déclencher des **Chain Attacks** qui octroient l’état **Tiger’s Roar** à l’équipe (buff massif de CRIT DMG, Chain/Ult DMG, Impact), " +
      "et excelle notamment dans les compositions **Attack** ou **Rupture** grâce à ses synergies fortes.",

    profile: {
      Affiliation: "Yunkui Summit",
      Élément: "Feu",
      Type: "Stun Support",
      Rôle: "Buff / Support CRIT DMG",
      Animal: "Thiren tigre",
      Ville: "New Eridu", // ajouté ici
      Release: "Version 2.0 (25 juin 2025)",
    },

    baseStats: {
      // Niveau 1
      PV: 663,
      ATK: 110,
      DEF: 48,
      Impact: 105,
      AnomalyMastery: 90,
      AnomalyProficiency: 90,
    },

    baseStats60: {
      // Niveau 60
      PV: 8250,
      ATK: 690,
      DEF: 597,
      Impact: 118,
      AnomalyMastery: 93,
      AnomalyProficiency: 96,
    },

    skills: [
      {
        name: "Basic Attack – Tiger Seven Forms",
        desc: "Chaîne jusqu’à 4 frappes physiques + Feu. Génère Momentum; avec Hu Wei, génère aussi Might.",
      },
      {
        name: "Dash/Dodge – Mountain King’s Game",
        desc: "Consume Momentum pour activer l’état tournoyant (spin) ou déclencher Hu Wei, inflige feu AoE, invulnérable.",
      },
      {
        name: "Chain Attack – Suppressing Tiger Cauldron",
        desc: "Si ≥100 Might: Axe Hu Wei broie l’ennemi + déclenche **Tiger’s Roar** pour l’équipe (CRIT DMG, Chain/Ult DMG, Impact up).",
      },
      {
        name: "Ultimate – Raging Tiger Explosion",
        desc: "AoE feu puissant ; donne Momentum + Might, invulnérable.",
      },
      {
        name: "Core Passive – Fu-rocious Might",
        desc: "Hu Wei attaque off-field. La Chain Attack déclenche Tiger’s Roar: +CRIT DMG, +Chain/Ult DMG, +Impact pour l’équipe (~30 s).",
      },
      {
        name: "Additional Ability – Aura of Authority",
        desc: "Avec un Agent Attack ou Rupture dans l’équipe: +1000 max Decibels, et ces agents gagnent +300 Decibels avec leur Ult.",
      },
    ],

    playstyle: [
      "Agent principalement off-field : génère Might via Hu Wei pour fournir un buff Tiger’s Roar puissant.",
      "Idéale en support pour **DPS Attack ou Rupture**, grâce à ses buffs massifs de **CRIT/Chain/Ult DMG** et **Impact**.",
      "Simple à jouer : boucle de Momentum ↔ Might ↔ Chain Attack ↔ buff.",
    ],

    combos: [
      {
        name: "Buff Tiger’s Roar rapide",
        input:
          "Basic Attack → Ultimate (Momentum + Might) → Switch → Ju Fufu off-field → Chain Attack proc → Tiger’s Roar",
        notes: "Active rapidamente le buff, idéal en début de rotation.",
      },
      {
        name: "Boucle Momentum ↔ Might",
        input:
          "Basic/Assist → Momentum → Dash → Hu Wei → Might → Chain Attack → Switch",
        notes: "Permet un cycle continu de buff off-field.",
      },
      {
        name: "Team CRIT Peak",
        input: "Buff Tiger’s Roar + Aura of Authority + DPS Ult",
        notes: "Synergie optimale pour les compositions basées sur CRIT DMG.",
      },
    ],

    rotation: [
      "Faire quelques **Basic attacks** pour monter Momentum via Hu Wei.",
      "Utiliser **Ultimate** pour générer ↓ Momentum / Might en masse.",
      "Laisser Ju Fufu off-field pour que Hu Wei → Chain Attack → Tiger’s Roar taf.",
      "Switch sur un DPS Attack/Rupture pour profiter du buff CRIT/Chain/Ult DMG.",
      "Remonter avec Ju Fufu si besoin via Basic pour relancer la boucle.",
    ],

    tips: [
      "La **signature W-Engine Roaring Fur-nace** est fortement recommandée pour maximiser ses buffs. :contentReference[oaicite:1]{index=1}",
      "Prioriser **ATK ≥ 3400** et **CRIT Rate ≥ 50%** pour activer pleinement les effets buffs (Tiger’s Roar max + King of the Summit). :contentReference[oaicite:2]{index=2}",
      "La Drive Disc Set **King of the Summit (4-pc)** est idéale (buff CRIT DMG via Chain/Ult). Compléter avec **Woodpecker Electro (2-pc)** pour CRIT Rate. :contentReference[oaicite:3]{index=3}",
      "Accessible en Build F2P grâce à son rôle de support puissant, mais attention à l’investissement en stats.",
    ],
  },
  yixuan: {
    title: "Agent du Yunkui Summit — Type Ether (Attack)",
    summary:
      "Yixuan est une agente S-rank du **Yunkui Summit**, de type **Éther** et spécialisée dans le rôle **Rupture**. " +
      "Enchaîne des combos fluides qui appliquent rapidement l’Anomaly Éther et génèrent de puissants dégâts de Rupture. " +
      "Son gameplay repose sur la gestion du **Flow** et l’activation de ses Arts, " +
      "faisant d’elle une carry capable de briller dans des rotations soutenues ou des bursts contrôlés.",

    profile: {
      Affiliation: "Yunkui Summit",
      Élément: "Éther",
      Type: "Attack",
      Rôle: "DPS principal",
      Arme: "Éventail martial",
      Ville: "New Eridu",
      Release: "Version 2.0 (6 juin 2025)",
    },

    baseStats: {
      // Niveau 1
      PV: 673,
      ATK: 126,
      DEF: 35,
      Impact: 93,
      AnomalyMastery: 92,
      AnomalyProficiency: 90,
    },

    baseStats60: {
      // Niveau 60
      PV: 7954,
      ATK: 872.57,
      DEF: 441.11,
      Impact: 93,
      AnomalyMastery: 92,
      AnomalyProficiency: 90,
    },

    skills: [
      {
        name: "Attaque normale – Danse des Plumes",
        desc: "Chaîne de frappes rapides, inflige des dégâts Éther et génère du Flow.",
      },
      {
        name: "Esquive – Évasion Fluidité",
        desc: "Dash invulnérable. Esquive parfaite → accélère la génération de Flow.",
      },
      {
        name: "Compétence – Art de l’Éther",
        desc: "Consomme du Flow pour lancer une technique renforcée. Augmente l’accumulation d’Anomaly Éther.",
      },
      {
        name: "EX Compétence – Danse Ascendante",
        desc: "Version améliorée de l’Art : AoE plus large, dégâts augmentés, excellent pour setup Disorder.",
      },
      {
        name: "Assist – Frappe Tourbillonnante",
        desc: "Intervient avec une attaque circulaire qui inflige des dégâts Éther et applique Anomaly.",
      },
      {
        name: "Assist Rapide – Revers de Vent",
        desc: "Contre-attaque élégante sur assist défensif, génère du Flow.",
      },
      {
        name: "Chaîne – Éventail Céleste",
        desc: "Frappe en zone lors d’un étourdissement. Booste la vitesse de génération de Flow de l’équipe.",
      },
      {
        name: "Ultime – Jugement du Vent Éthéré",
        desc: "Déferlement multi-frappes avec son éventail, AoE massive Éther. Invulnérable pendant l’animation.",
      },
      {
        name: "Passif – Harmonie du Tao",
        desc: "Chaque dépense de Flow augmente temporairement son ATK. Les Arts infligent plus de dégâts si l’ennemi est déjà affecté par Disorder.",
      },
      {
        name: "Aptitude additionnelle – Maître du Yunkui",
        desc: "Avec un allié Stun ou Rupture dans l’équipe, les Arts génèrent du Flow supplémentaire et améliorent l’efficacité de Rupture.",
      },
    ],

    playstyle: [
      "Yixuan est un **carry Attack pur** : elle reste sur le terrain pour enchaîner les combos.",
      "Ses **Arts** consomment le Flow pour infliger des bursts de dégâts Éther.",
      "Son ultime est une AoE puissante qui sert de nuke en fin de rotation.",
    ],

    combos: [
      {
        name: "Cycle basique",
        input: "Basic ×3 → Skill → Basic → EX Skill",
        notes: "Permet de maintenir un flux constant de dégâts et d’Anomaly.",
      },
      {
        name: "Setup Burst",
        input: "Esquive parfaite → EX Skill → Switch DPS secondaire → Chaîne",
        notes: "Crée une fenêtre idéale pour enchaîner avec les alliés.",
      },
      {
        name: "Finish Ult",
        input: "Flow max → EX Skill → Ult",
        notes: "Rotation optimisée pour maximiser les dégâts AoE.",
      },
    ],

    rotation: [
      "Engager avec **Basic** pour accumuler du Flow.",
      "Déclencher **Skill/EX Skill** pour dépenser le Flow et appliquer l’Anomaly.",
      "Esquive parfaite pour accélérer la génération et maintenir le tempo.",
      "Activer la **Chaîne** au bon moment avec l’équipe pour setup Disorder.",
      "Utiliser **Ultime** comme finisher ou reset de rotation.",
    ],

    tips: [
      "Toujours maintenir un bon niveau de **Flow** : ne pas le caper.",
      "Ses **Arts EX** sont prioritaires pour setup les fenêtres d’Anomaly.",
      "L’**Ultime** est excellent pour contrôler les packs d’ennemis.",
      "Fonctionne particulièrement bien avec **Ju Fufu** (buff CRIT/Chain) et d’autres supports Anomaly.",
    ],
  },
  hugo: {
    title: "Agent du Mockingbird — Type Ice (Attack)",
    summary:
      "Hugo Vlad est un agent S-rank du **Mockingbird**, de type **Ice** et spécialisé dans le **DPS de Burst via le Stun**. " +
      "Il manie une faux rétractable et exploite les états **Dark Abyss Reverb** et **Totalize** pour maximiser dégâts et Daze, " +
      "notamment dans les compositions comportant d’autres agents **Stun**.",

    profile: {
      Affiliation: "Mockingbird",
      Élément: "Ice",
      Type: "Attack",
      Rôle: "DPS Burst (Stun-centric)",
      Ville: "New Eridu",
      Release: "Version 1.7 (14 Mai 2025)",
    },

    baseStats: {
      // Niveau 1 (HoneyHunterWorld)
      PV: 638,
      ATK: 132,
      DEF: 50,
      Impact: 95,
      AnomalyMastery: 86,
      AnomalyProficiency: 90,
    },

    baseStats60: {
      // Niveau 60 (échelle du site)
      PV: 7941,
      ATK: 844,
      DEF: 617,
      Impact: 95,
      AnomalyMastery: 86,
      AnomalyProficiency: 90,
    },

    skills: [
      {
        name: "Basic Attack – Dark Abyss Quartet / Concerto",
        desc: "Chaîne jusqu’à 4 frappes → 4ᵉ = tir avec possibilité de charge. Inflige Phys + Ice. Boost Anti-Interrupt niveau et réduit les dégâts reçus (~ 40 %) pendant l’attaque chargée. :contentReference[oaicite:1]{index=1}",
      },
      {
        name: "Dash / Dodge – Phantasm / Phantasm-Shatter / Phantasm-Slash",
        desc: "Dash invulnérable. Sur esquive parfaite, contre-attaque Ice + tir (charge possible) suivi du Basic 4ᵉ coup (Concerto). :contentReference[oaicite:2]{index=2}",
      },
      {
        name: "Quick Assist – Elegy",
        desc: "Assist sur lancement allié : série d’attaques + tir (charge possible), suivi potentiel du Basic 4ᵉ coup. Invulnérable. :contentReference[oaicite:3]{index=3}",
      },
      {
        name: "Def Assist – The End Has Not Come",
        desc: "Parade qui absorbe l’attaque, inflige un Daze important. Invulnérable. :contentReference[oaicite:4]{index=4}",
      },
      {
        name: "Chain Attack – Trick of Fate",
        desc: "Dash + slash AoE + tir (chargé) massifs Ice. Invulnérable. :contentReference[oaicite:5]{index=5}",
      },
      {
        name: "Special Attack – Soul Hunter: Judgement / Punishment (EX)",
        desc: "Tourne la faux puis slash Ice (EX = version plus puissante, avec finisher + Totalize). :contentReference[oaicite:6]{index=6}",
      },
      {
        name: "Ultime – Blaspheme",
        desc: "Lance la faux en attaque tourbillonnante + slash final, gros Ice AoE. Peut être suivi du 4ᵉ Basic. Invulnérable. :contentReference[oaicite:7]{index=7}",
      },
      {
        name: "Passif – Terminating Verdict",
        desc: "À chaque Chain ou attaque qui étourdit, entre dans l’état **Dark Abyss Reverb** (≈6 s, resetable) : +12 % CRIT Rate, +25 % CRIT DMG. Si 1 ou 2 agents Stun en équipe : +25/75 ATK (monte à +300/900 à L60). Lors du Finisher EX ou Ult sur cible stun : déclenche **Totalize** : dégâts du Finisher x1000 %, selon le Stun restant, +Daze accumulé (5 % par seconde, max 25 %). :contentReference[oaicite:8]{index=8}",
      },
      {
        name: "Aptitude additionnelle – Prelude to Finality",
        desc: "Si team avec un autre Stun ou même Élément : Trick of Fate +15 % +35 % vs ennemis normaux, Totalize +40 % dégâts ; EX Punishment génère +20 Énergie sur Totalize (tous les 30 s). :contentReference[oaicite:9]{index=9}",
      },
    ],

    playstyle: [
      "Carry Ice burst axé sur l’exploitation du **Stun** et du **Totalize**.",
      "Doit être accompagné de 2 Agents **Stun** pour débloquer l’ATK bonus et son potentiel maximal. :contentReference[oaicite:10]{index=10}",
      "Chaîne → EX/Ult (si Stun) pour activer **Totalize** → Switch pour profiter du Daze et des dégâts bonus.",
    ],

    combos: [
      {
        name: "Fenêtre Totalize maxi",
        input:
          "Chain Attack → Stun → EX Special / Ult pour Totalize → Daze → Switch DPS",
        notes: "Maximise les dégâts et applique du Daze pour l’équipe.",
      },
      {
        name: "Cycle burst Stun",
        input:
          "Basic 4 hit (Concerto) → CD → Chain Attack → Quick Assist / Dodge Counter → EX Special",
        notes: "Maintient Dark Abyss Reverb tout en préparant Totalize.",
      },
    ],

    rotation: [
      "Entame avec **Chain** pour activer Reverb.",
      "Enchaîne sur **EX Special** ou **Ult** si la cible est stun : déclencher **Totalize**.",
      "Switch immédiatement après le Finisher pour profiter du Daze et du boost.",
      "Remonte Hugo en fin de rotation pour relancer Reverb ou préparer un autre burst.",
    ],

    tips: [
      "Ses Mindscapes M1/M2 (+CRIT+DEF ignore, etc.) et M6 (réactive Reverb + boost Totalize) sont très puissants. :contentReference[oaicite:11]{index=11}",
      "Meilleur **W-Engine** : **Myriad Eclipse** (+45 % CRIT DMG & ignore 25 % DEF). :contentReference[oaicite:12]{index=12}",
      "Maintenir **CRIT Rate ≥ 80 %** pour fiabiliser les bursts Totalize. :contentReference[oaicite:13]{index=13}",
      "Exige une team bien pensée autour du stun pour activer tous ses bonus.",
    ],
  },
};

// ---------------- Générateur auto (fallback générique) ----------------
function makeSheetFromChar(c) {
  return {
    title: `${c.faction || "—"} — ${c.type || "—"}`,
    summary: "Description générique. (À compléter)",
    profile: {
      Affiliation: c.faction || "—",
      Élément: c.element || "—",
      Type: c.type || "—",
      Rôle: c.type || "—",
      Rareté: String(c.rarity ?? "—"),
    },
    baseStats: {},
    skills: [],
    playstyle: [],
    combos: [],
    rotation: [],
    synergies: [],
    tips: [],
  };
}

function buildZZZ() {
  const out = {};
  const list = charactersByGame.ZZZ || [];
  for (const c of list) {
    const key = lc(c.slug || c.id);
    if (!key) continue;
    out[key] = makeSheetFromChar(c);
  }
  // merge overrides
  for (const k of Object.keys(ZZZ_OVERRIDES)) {
    if (!out[k]) out[k] = {};
    out[k] = { ...out[k], ...ZZZ_OVERRIDES[k] };
  }
  return out;
}

export const infoPersoByGame = {
  ZZZ: buildZZZ(),
};
