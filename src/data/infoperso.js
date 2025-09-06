// src/data/infoperso.js
import { charactersByGame } from "./characters";

const lc = (s) => (s || "").toString().toLowerCase().trim();

// ---------------- Overrides manuels ----------------
const ZZZ_OVERRIDES = {
  alice: {
    title: "Alice Thymefield - Agent de Spook Shack — Type Anomaly (Physique)",
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
        name: "<u>Attaque normale — Ouverture céleste</u>",
        desc: "Enchainement de 5 entailles frontales, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>. Lorsque Alice inglige Assaut à l'aide de l'accumulation d'anomalie, le 5e coup de sa prochaine attaque normale sera renforcé.",
      },
      {
        name: "<u>Attaque normale - Valse de la Brillance stellaire</u>",
        desc:
          "Alice consomme jusqu’à 3 barres de Rite de l’épée pour charger une attaque infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> dont la puissance dépend du niveau de charge." +
          "Au Niv. 3, l’attaque finale déclenche Assaut polarisé, infligeant 100 % de DGT d’Assaut et pouvant provoquer un Dysfonctionnement." +
          "\n**[Le personnage est invulnérable pendant l’utilisation]**",
      },
      {
        name: "<u>Esquive - Agilité lapine</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "esquive" },
          "pour effectuer une esquive rapide. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Attaque de bond - Bourrasque de l'épée dansante</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "pendant une esquive pour lancer une entaille vers les ennemis en face, leur infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "<u>Contre d'esquive - Cérémonie de l'épée lumineus</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "lors d’une esquive parfaite pour enchaîner avec une entaille suivie d’un coup de pied, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> aux ennemis en face. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Soutien rapide - Incisions imbriquées</u>",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur",
          { type: "icon", name: "assist" },
          "pour enchaîner avec une entaille suivie d’un coup de pied, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> aux ennemis en face. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Soutien défensif - Garde de parade</u>",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d’être attaqué, appuyez sur",
          { type: "icon", name: "assist" },
          "pour parer l’attaque de l’ennemi et lui infliger une confusion importante. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Soutien de suivi - Riposte en croix</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "assist" },
          "après un soutien défensif pour effectuer un dash qui entaille les ennemis en face, leur infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Attaque spéciale - Aube perçante</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "specialattack1" },
          "pour projeter l’épée et traverser les ennemis en face, leur infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>. Lors de l’activation, il est possible de déclencher une esquive parfaite. En cas d’esquive parfaite grâce à cette compétence, appuyez sur",
          { type: "icon", name: "basicattack" },
          "pour enchaîner directement avec le 5ᵉ coup de l’attaque normale (Ouverture céleste). \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Attaque spéciale EX - Percée de l'aurore - Croix du Nord</u>",
        desc: [
          "Avec suffisamment d’énergie, placer le stick vers l’avant (Z) et appuyer sur",
          { type: "icon", name: "specialattack" },
          "permet d’asséner une impulsion traversant les ennemis et leur infligeant d’importants <span class='dgt dgt-phys'>**DGT physiques**</span>. À l’activation, une esquive parfaite peut être déclenchée, permettant de récupérer 10 pts de Rite de l’épée. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Attaque spéciale EX - Percée de l'aurore - Croix du Sud</u>",
        desc: [
          "Avec suffisamment d’énergie, placer le stick au centre ou en arrière (S) et appuyer sur",
          { type: "icon", name: "specialattack" },
          "permet d’asséner une entaille en reculant, puis de foncer vers l’avant en infligeant d’importants <span class='dgt dgt-phys'>**DGT physiques**</span>. À l’activation, une esquive parfaite peut être déclenchée, permettant de récupérer 10 pts de Rite de l’épée. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Enchaînement - Intermission météore</u>",
        desc: [
          "Assène plusieurs entailles puissantes, infligeant d’importants <span class='dgt dgt-phys'>**DGT physiques**</span>. \n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Ultime - Grand final météore</u>",
        desc: [
          "Assène plusieurs entailles puissantes consécutives sur les ennemis dans une large zone, infligeant d’importants <span class='dgt dgt-phys'>**DGT physiques**</span>. Cette compétence génère 200 pts de Rite de l’épée. \n[Vous n’accumulez pas de Rite de l’épée] \n**[Le personnage est invulnérable pendant l’utilisation]**",
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
    title: "Ukinami Yuzuha - Agent de Spook Shack — Type Physique (Support)",
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
        name: "<u>Attaque normale - Griffes de tanuki</u>",
        desc: [
          "Enchainement de 5 frappes frontales, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "<u>Attaque normale - Manteau de tanuki</u>",
        desc: [
          "Maintenez",
          { type: "icon", name: "basicattack" },
          "pour entrer en posture défensive pendant 1,5 s. Si, durant cette période, vous subissez une attaque, vous la parez et infligez une forte Confusion, gagnant ainsi 1 point de Sucre.\n [Le personnage est invulnérable en cas de parade réussie]",
        ],
      },
      {
        name: "<u>Attaque normal - Tir de praline</u>",
        desc: [
          "Pendant que vous contrôlez un autre personnage et que Yuzuha dispose d’au moins 1 point de Sucre, celle-ci peut lancer une attaque off-field infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>. " +
            "Si l’Attaque Lourde Tir de Praline touche un ennemi, Yuzuha regagne 1 point de Sucre.\n" +
            "Tir de Praline est considéré comme un contrecoup.\n" +
            "Tir de Praline peut être déclenché une fois toutes les 8 s.\n" +
            "**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "<u>Attaque normal - Sucreries d'artifice</u>",
        desc: [
          "Les ennemis souffrant de l’effet **Frayeur sucrée** subissent une instance de **Sucreries d’artifice** toutes les 1 s, leur infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\nL’accumulation d’Anomalie ne contribue pas au calcul des DGT d’Anomalie." +
            "\nLe taux d’accumulation d’Anomalie augmente de <span style='color:#1bb500'>**8,5%**</span>.",
        ],
      },
      {
        name: "<u>Attaque normal - Sucreries d'artifice - MAX</u>",
        desc: [
          "Les ennemis souffrant de l’effet <b>Frayeur sucrée</b> subissent une instance de **Sucreries d’artifice** toutes les 1 s, leur infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> s’ils subissent une Attaque Lourde **Tir de Praline** ou une attaque de suivi." +
            "\nL’accumulation d’Anomalie ne contribue pas au calcul des DGT d’Anomalie." +
            "\nLe taux d’accumulation d’Anomalie augmente de <span style='color:#1bb500'>**8,5%**</span>.",
        ],
      },
      {
        name: "<u>Attaque normal - Assistant tanuki</u>",
        desc: [
          "Lorsque Yuzuha est off-field, Kama aide le personnage contrôlé en infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\nQaund l’attaque Manteau de Tanuki est lancée, Kama assiste Yuzuha en attaquant les ennemis et inflige des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\nKama hérite de l’ATQ initiale de Yuzuha.",
        ],
      },
      {
        name: "<u>Esquive - Je t'ai fait peur ?</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "esquive" },
          "pour effectuer une esquive rapide." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Attaque de bon - Pas de bol !</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "pendant une esquive pour lancer une frappe rapide vers les ennemis en face, leur infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "<u>Contre d'esquive - L'heure des représailles a sonné !</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "basicattack" },
          "lors d’une esquive parfaite pour enchaîner avec une frappe rapide infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Soutien rapide - Un petit dessert ?</u>",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur",
          { type: "icon", name: "assist" },
          "pour enchaîner sur avec une frappe infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Soutien défensif - Le plein de rigolade</u>",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d'être attaqué, appuyez sur",
          { type: "icon", name: "assist" },
          "pour parer l'attaque de l'ennemi et lui infliger une confusion importante." +
            "\nGagnez **un point de Sucre** à chaque parade réussie." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Soutien de suivi - On a des cookies</u>",
        desc: [
          "Après un soutien défensif ou une parade avec Manteau de tanuki, appuyez sur",
          { type: "icon", name: "assist" },
          "pour lancer un frappe et infliger des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Soutien de suivi - Tir de praline fourrée</u>",
        desc: [
          "Après un soutien défensif ou une parade avec Manteau de tanuki, appuyez sur",
          { type: "icon", name: "assist" },
          "au bon moment pour faire tournoyer l'ombrelle en continu avant de tiré un puissant projectile, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Attaque spéciale - Bombardement gélatineux</u>",
        desc: [
          "Appuyez sur",
          { type: "icon", name: "specialattack1" },
          "pour lancer un tir de canon qui inflige des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "<u>Attaque spéciale EX - Carie imminente</u>",
        desc: [
          "Avec suffisamment d'énergie, appuyez sur",
          { type: "icon", name: "specialattack" },
          "Pour lancer une bombe qui inflige des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\nLorsque vous infligez une attaque lourde à un ennemin, ce dernier obtient l'état **Frayeur sucrée**." +
            "\nGagne **2 points de sucre** à l'activation." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Attaque spéciale EX - Urgences dentaires</u>",
        desc: [
          "Après un **Contre d'esquive - L'heure des représailles a sonné !**, **Soutien rapide - Un petit dessert?**," +
            "\n**Soutien de suivi - On a des cookies**, **Soutien de suivi - Tir de praline fourrée** ou une esquive parfaite, appuyez sur",
          { type: "icon", name: "specialattack" },
          "pour lancer rapidement une bombe qui inflige des <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\nLorsque vous infligez une attaque lourde à un ennemin, ce dernier obtient l'état **Frayeur sucrée**." +
            "\nGagne **2 points de sucre** à l'activation." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Passive - Frayeur sucrée</u>",
        desc:
          "L'état **Frayeur sucrée** dure <span style='color:#1bb500'>**18 s**</span>." +
          "\n**[Les déclenchements répétés rénitialisent la durée]**" +
          "\nLorsqu'un ennemi souffrant de **Frayeur sucrée** est touché pour la première fois par une attaque de l'attribut du personnage contrôlé, l'effet **Accord des saveurs** s'active." +
          "\nCet effet change l'attribut de l'**Attaque normale : Sucreries d'artifice** et de l'**Attaque normale : Sucreries d'artifice - Max** pour correspondre à l'attribut du personnage, uniquement contre cette cible." +
          "\nSi **Frayeur sucrée** est de nouveau infligé au même ennemi, l'effet précédent est supprimé, permettant de relancer la mécanique et de réattribuer l'attaque.",
      },
      {
        name: "<u>Enchaînement - Déferlement de farces</u>",
        desc: [
          "Assène une puissante frappe infligeant d'importants <span class='dgt dgt-phys'>**DGT physiques**</span>." +
            "\nGagne **1 point de Sucre** au lancement." +
            "\n**[Le personnages est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "<u>Ultime - Capitule ou conséquences !</u>",
        desc:
          "Assène une puissante frappes dans une vaste zone, infligeant d'important <span class='dgt dgt-phys'>**DGT physiques**</span>." +
          "\nLorsque vous infligez une attaque lourde à un ennemin, ce dernier obtient l'état **Frayeur sucrée**." +
          "\nA l'activation les autres personnages gagnent <span style='color:#1bb500'>**8,5**</span> pts d'énergie." +
          "\nGagne **2 points de sucre** à l'activation." +
          "\nToucher un ennemi déclenche un soutien rapide." +
          "\n**[Le personnages est invulnérable pendant l'utilisation]**",
      },
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
    title: "Ju Fufu - Agent du Yunkui Summit — Type Fire (Stun Support)",
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
    },

    baseStats60: {
      // Niveau 60
      PV: 8251,
      ATK: 690.66,
      DEF: 597.59,
    },

    skills: [
      {
        name: "Attaque normale - Sept formes du Tigre : Griffe enflammée",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour asséner jusqu’à quatre entailles frontales, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> et des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nPendant le 3e coup :" +
            "\nMarteler",
          { type: "icon", name: "basicattack" },
          "pour maintenir le combo et continuer à frapper." +
            "\nFaire une pause avant d’appuyer à nouveau ou maintenir le bouton pour enchaîner avec le 4e coup." +
            "\nPendant le 3e coup, augmente la <b>RES à l’interruption</b> et applique <span style='color:#1bb500'>**–40 % DGT subis**</span>.",
        ],
      },
      {
        name: "Attaque normale - Hu Wei",
        desc: [
          "Pendant le combat, Hu Wei attaque automatiquement les ennemis et inflige des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nLorsqu’un ennemi est touché, gagne <b>20 pts de Grandeur</b> (une fois par utilisation)." +
            "\nLa limite maximale de Grandeur est de <b>200 pts</b>.",
        ],
      },
      {
        name: "Esquive - Sept formes du Tigre : Bourrasque du Tigre",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "esquive" },
          " pour effectuer une esquive rapide." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque de bond - Sept formes du Tigre : Charge du Tigre",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive pour asséner une entaille frontale rapide, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },

      {
        name: "Attaque de bond - Sept formes du Tigre : Feinte du roi de la montagne",
        desc: [
          "Maintenez ",
          { type: "icon", name: "basicattack" },
          " après avoir utilisé <b>Charge du Tigre</b> pour faire tournoyer Ju Fufu, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> au contact." +
            "\nLorsqu’elle possède de la Fougue, chaque coup consomme 1 pt pour infliger des <span class='dgt dgt-fire'>**DGT de Feu**</span> et octroie 25 pts de Grandeur (max 15 pts)." +
            "\nAvec plus de 100 pts de Grandeur, l’utilisation de la Fougue déclenche automatiquement <b>Enchaînement : Chaudron du Tigre oppresseur</b>." +
            "\nRelâchez ",
          { type: "icon", name: "basicattack" },
          " pour mettre fin au tourbillon et envoyer Hu Wei attaquer, infligeant des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nPendant la compétence : <span style='color:#1bb500'>**–40 % DGT subis**</span>, meilleure <b>RES à l’interruption</b> et Ju Fufu devient invulnérable si elle n’est pas contrôlée.",
        ],
      },
      {
        name: "Contre d'esquive - Sept formes du Tigre : Montagne embrasée",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive parfaite pour asséner une série d’entailles, infligeant des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien rapide - Écrasement décisif",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour trancher les ennemis devant soi et infliger des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien défensif - Tigre impitoyable à l’affût",
        desc: [
          "Quand un ennemi s’apprête à attaquer le personnage actif, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour parer l’attaque et appliquer une <b>confusion majeure</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien de suivi - Mâchoire de flammes brutales",
        desc: [
          "Après un soutien défensif, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour asséner une entaille frontale, puis Hu Wei enchaîne avec une attaque descendante infligeant des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nÀ l’activation, octroie <b>1 pt de Fougue</b> (CD : 10s)." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque spéciale - Sept formes du Tigre : Le Tigre descendant de la montagne",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "specialattack1" },
          " pour asséner une entaille tournoyante frontale suivie d’une entaille plongeante, infligeant des <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nAugmente la <b>RES à l’interruption</b> pendant l’utilisation.",
        ],
      },
      {
        name: "Attaque spéciale EX - Sept formes du Tigre (ALT) : Le Tigre sauvage descendant de la montagne",
        desc: [
          "Avec suffisamment d’énergie, appuyez sur ",
          { type: "icon", name: "specialattack" },
          " pour brandir Hu Wei et asséner une frappe puissante, infligeant d’importants <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nÀ l’activation, gagne <b>3 pts de Fougue</b> et <b>80 pts de Grandeur</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Enchaînement - Effondrement du chaudron du Tigre",
        desc: [
          "Lors d’un enchaînement, sélectionnez Ju Fufu pour brandir Hu Wei et frapper les ennemis en zone, infligeant d’importants <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Enchaînement - Chaudron du Tigre oppresseur",
        desc: [
          "Avec au moins <b>100 pts de Grandeur</b>, déclenche automatiquement un enchaînement." +
            "\nConsomme <b>100 pts de Grandeur</b> pour ouvrir Hu Wei, projetant des flammes sur les ennemis proches et infligeant d’importants <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nSi Ju Fufu n’est pas active, l’état de tournoiement rapide est déclenché après la compétence." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Ultime - Sept formes du Tigre : Explosion du Tigre enragé",
        desc: [
          "Lorsque la jauge est pleine, appuyez sur ",
          { type: "icon", name: "chainattack" },
          " pour asséner deux frappes descendantes avec Hu Wei, infligeant d’importants <span class='dgt dgt-fire'>**DGT de Feu**</span>." +
            "\nÀ l’activation, gagne <b>6 pts de Fougue</b> et <b>100 pts de Grandeur</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
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
    title: "Yixuan - Agent du Yunkui Summit — Type Ether (Attack)",
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
    },

    baseStats60: {
      // Niveau 60
      PV: 7954,
      ATK: 872.57,
      DEF: 441.11,
    },

    skills: [
      {
        name: "Attaque normale - Frappe nuageuse",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour enchaîner jusqu’à cinq frappes frontales, infligeant des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\nLe niveau de <b>RES à l’interruption</b> augmente lors du 3e et du 4e coup.",
        ],
      },
      {
        name: "Attaque normale - Cumulus d'encre",
        desc: [
          "Maintenez ",
          { type: "icon", name: "basicattack" },
          " pour activer la <b>Formation du Grand Tai Chi</b> et infliger des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\nÀ la fin de la compétence, déclenche automatiquement le 5e coup de <b>Frappe nuageuse</b>." +
            "\nAugmente la <b>RES à l’interruption</b> et applique <span style='color:#1bb500'>**–40 % DGT subis**</span> pendant l’utilisation.",
        ],
      },
      {
        name: "Attaque normale - Matrice de Sépia",
        desc: [
          "Lorsque vous avez des points de Sépia, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant ",
          { type: "icon", name: "esquive" },
          " ou maintenez ",
          { type: "icon", name: "basicattack" },
          " avec des points de Sépia pour déployer une matrice, infligeant des <span style='color:#ff4da6'>**DGT Sépia**</span> sur la durée." +
            "\nÀ la fin de la compétence, déclenche automatiquement <b>Éruption Qingming</b>." +
            "\nPendant la canalisation, restaure <b>7 pts/s d’Adrénaline</b> pendant 3s max." +
            "\n**[Le personnage est invulnérable pendant l’utilisation et entre dans l’état Œil de lynx]**",
        ],
      },
      {
        name: "Attaque normale - Éruption Qingming",
        desc: [
          "Se déclenche automatiquement lorsque <b>Matrice de Sépia</b> atteint sa durée maximale :" +
            "\nDéploie des ailes pour lancer une attaque explosive, infligeant d’importants <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },

      {
        name: "Esquive - Nuage dissimulé",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "esquive" },
          " pour effectuer une esquive rapide." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque de bond - Brise-ciel",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive pour bondir sur les ennemis en face et infliger des <span style='color:#ff4da6'>**DGT Sépia**</span>.",
        ],
      },
      {
        name: "Esquive - Pas nébuleux",
        desc: [
          "En déplaçant le joystick, maintenez ",
          { type: "icon", name: "esquive" },
          " pour entrer dans l’état <b>Poids plume</b> et vous déplacer à grande vitesse." +
            "\nEn mode Expédition, restaure automatiquement tous les points de ressources à portée." +
            "\nDans l’état Poids plume, utilisez le joystick pour diriger la trajectoire et relâchez pour arrêter." +
            "\n**[Le personnage est invulnérable au moment du lancement]**",
        ],
      },
      {
        name: "Contre d’esquive - Bannissement",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive parfaite pour lancer une série d’attaques, infligeant des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },

      {
        name: "Soutien rapide - Flot nébuleux ombragé",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour lancer une série d’attaques en face, infligeant des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien défensif - Éclaircie céleste",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d’être attaqué, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour parer l’attaque et infliger une <b>confusion importante</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien de suivi - Assaut nébuleux éclair",
        desc: [
          "Après un soutien défensif, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour foncer en avant et attaquer, infligeant des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },

      {
        name: "Attaque spéciale - Ombre de braises",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "specialattack1" },
          " pour reculer brièvement puis lancer une attaque frontale, infligeant des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\nPendant le recul, une esquive parfaite peut être déclenchée (sans contre-esquive)." +
            "\nAugmente la <b>RES à l’interruption</b> pendant l’utilisation.",
        ],
      },
      {
        name: "Attaque spéciale EX - Manifestation d’encre",
        desc: [
          "Avec suffisamment d’Adrénaline, appuyez sur ",
          { type: "icon", name: "specialattack" },
          " ou maintenez pour charger, puis relâchez pour effectuer une attaque d’aile ascendante infligeant d’importants <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\nPendant la charge : bloque les attaques subies et déclenche automatiquement l’attaque ascendante." +
            "\nSi touché au début de la charge → déclenche une <b>parade parfaite</b> (annule les dégâts, augmente la RES, restaure 10 pts d’Adrénaline)." +
            "\nSi l’aile touche un ennemi marqué rouge/doré → déclenche aussi une <b>parade parfaite</b>." +
            "\nAprès la compétence : possibilité d’enchaîner avec <b>Assaut nébuleux éclair - Rupture</b>." +
            "\nAprès <b>Assaut nébuleux éclair - Rupture</b>, peut consommer 20 pts d’Adrénaline pour lancer <b>Éruption Qingming - Rupture</b>." +
            "\nAprès <b>Éruption Qingming - Rupture</b>, avec des points de Sépia, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour enchaîner rapidement avec <b>Matrice de Sépia</b>." +
            "\n**[Le personnage est invulnérable pendant l’attaque ascendante, et la RES à l’interruption est augmentée pendant la charge]**",
        ],
      },
      {
        name: "Attaque spéciale EX - Sculpture de nuages",
        desc: [
          "Avec suffisamment d’Adrénaline, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour canaliser l’énergie et infliger des <span style='color:#ff4da6'>**DGT Sépia**</span> sur 2s max." +
            "\nÀ la fin ou si interrompu → déclenche automatiquement <b>Ombres d’encre et de braises</b>." +
            "\nUne esquive parfaite peut être déclenchée au lancement, activant aussi l’état <b>Œil de lynx</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque spéciale EX - Ombres d’encre et de braises",
        desc: [
          "Se déclenche automatiquement après <b>Sculpture de nuages</b> :" +
            "\nLorsque l’orbe énergétique apparaît et se contracte, inflige des <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },

      {
        name: "Enchaînement - Déferlement Sépia",
        desc: [
          "Lors du déclenchement d’un enchaînement, sélectionnez le personnage pour foncer en avant et asséner une attaque suivie d’une frappe d’ailes explosive, infligeant d’importants <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Ultime - Ombre céleste Qingming",
        desc: [
          "Lorsque le niveau de décibels est au maximum, appuyez sur ",
          { type: "icon", name: "chainattack" },
          " pour lancer une rafale d’attaques d’ailes suivie d’une série de talismans, infligeant d’importants <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\nAu lancement, redistribue équitablement les <b>PV</b> de l’escouade." +
            "\nAprès l’activation, avec suffisamment de points de Sépia, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour enchaîner avec <b>Matrice de Sépia</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Ultime - Oppression talismanique sans fin",
        desc: [
          "Avec suffisamment de points de technique, appuyez sur ",
          { type: "icon", name: "chainattack" },
          " pour consommer <b>120 pts de technique</b>, déployer ses ailes et canaliser des talismans infligeant d’importants <span style='color:#ff4da6'>**DGT Sépia**</span>." +
            "\nAvec suffisamment de points de technique et de décibels, cette compétence est prioritaire." +
            "\nAprès l’utilisation, avec suffisamment de points de Sépia, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour enchaîner avec <b>Matrice de Sépia</b>." +
            "\nAu lancement, redistribue équitablement les <b>PV</b> de l’escouade." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
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
    title: "Hugo Vlad - Agent du Mockingbird — Type Ice (Attack)",
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
    },

    baseStats60: {
      // Niveau 60 (échelle du site)
      PV: 7941,
      ATK: 844.3,
      DEF: 616.61,
    },

    skills: [
      {
        name: "Attaque normale - Quatuor de l'abîme ténébreux",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour enchaîner jusqu’à 4 frappes frontales, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> et des <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nLe 4e coup est un tir. Pendant cette attaque, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour charger et effectuer un tir chargé." +
            "\nLors du 4e coup, augmente la <b>RES à l’interruption</b> et applique <span style='color:#1bb500'>**–40 % DGT subis**</span>.",
        ],
      },
      {
        name: "Attaque normale - Concerto de l'abîme ténébreux",
        desc: [
          "Après le 4e coup de <b>Quatuor de l'abîme ténébreux</b>, le tir du <b>Contre d’esquive : Fantasmagorie - Entaille</b> ou le tir du <b>Soutien rapide : Élégie</b>, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " ou maintenez pour lancer une entaille suivie d’un tir, infligeant des <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nPendant le tir, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour charger et effectuer un tir chargé." +
            "\nAugmente la <b>RES à l’interruption</b> et applique <span style='color:#1bb500'>**–40 % DGT subis**</span> pendant l’utilisation.",
        ],
      },

      {
        name: "Esquive - Fantasmagorie",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "esquive" },
          " pour effectuer une esquive rapide." +
            "\n**[Le personnage est invulnérable pendant l'utilisation]**",
        ],
      },
      {
        name: "Attaque de bond - Fantasmagorie : Rupture",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive pour bondir sur les ennemis en face et infliger des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "Contre d'esquive - Fantasmagorie : Entaille",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive parfaite pour lancer une série d’attaques infligeant des <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nMaintenez ",
          { type: "icon", name: "basicattack" },
          " pendant le lancement pour effectuer un tir (pouvant être chargé)." +
            "\nLe tir est considéré comme une <b>attaque normale</b>." +
            "\nAprès utilisation, peut enchaîner directement avec le 4e coup de <b>Quatuor de l’abîme ténébreux</b>." +
            "\nPendant le tir, augmente la <b>RES à l’interruption</b> et applique <span style='color:#1bb500'>**–40 % DGT subis**</span>." +
            "\n**[Le personnage est invulnérable pendant les entailles et la retraite du tir]**",
        ],
      },

      {
        name: "Soutien rapide - Élégie",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour lancer une série d’attaques en face, infligeant des <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nMaintenez ",
          { type: "icon", name: "basicattack" },
          " pendant le lancement pour effectuer un tir (pouvant être chargé)." +
            "\nLe tir est compté comme une <b>attaque normale</b> et peut enchaîner avec le 4e coup de <b>Quatuor de l’abîme ténébreux</b>." +
            "\nPendant le tir, augmente la <b>RES à l’interruption</b> et applique <span style='color:#1bb500'>**–40 % DGT subis**</span>." +
            "\n**[Le personnage est invulnérable pendant les entailles et la retraite du tir]**",
        ],
      },
      {
        name: "Soutien défensif - Son heure n'est pas venue",
        desc: [
          "Lorsque le personnage actif est sur le point d’être attaqué, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour parer l’attaque et infliger une <b>confusion importante</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien de suivi - Inversion des atouts",
        desc: [
          "Après un soutien défensif, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour foncer en avant et asséner deux entailles, infligeant des <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nPeut enchaîner directement avec le 4e coup de <b>Quatuor de l’abîme ténébreux</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },

      {
        name: "Attaque spéciale - Chasseur d'âmes : Jugement",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "specialattack1" },
          " pour faire tournoyer la faux puis asséner une entaille frontale, infligeant des <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nAugmente la <b>RES à l’interruption</b> pendant l’utilisation.",
        ],
      },
      {
        name: "Attaque spéciale EX - Chasseur d'âmes : Châtiment",
        desc: [
          "Avec suffisamment d’énergie, appuyez sur ",
          { type: "icon", name: "specialattack" },
          " pour faire tournoyer la faux puis asséner un puissant coup final, infligeant d’importants <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nCette compétence n’est pas considérée comme une <b>attaque lourde</b>." +
            "\nPeut enchaîner directement avec le 4e coup de <b>Quatuor de l’abîme ténébreux</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },

      {
        name: "Enchaînement - Farce du destin",
        desc: [
          "Lors du déclenchement d’un enchaînement, sélectionnez Hugo Vlad pour foncer en avant et asséner des entailles en zone, puis tirer, infligeant d’importants <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nLe tir est considéré comme un <b>tir chargé</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Ultime - Blasphème",
        desc: [
          "Lorsque le niveau de décibels est au maximum, appuyez sur ",
          { type: "icon", name: "chainattack" },
          " pour lancer la faux et infliger une puissante attaque tournoyante suivie d’un coup final, infligeant d’importants <span class='dgt dgt-ice'>**DGT de Glace**</span>." +
            "\nCette compétence n’est pas considérée comme une <b>attaque lourde</b>." +
            "\nPeut enchaîner directement avec le 4e coup de <b>Quatuor de l’abîme ténébreux</b>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
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
  vivian: {
    title: "Viviane Banshee - Agent du Mockingbird — Type Éther (Anomaly)",
    summary:
      "Viviane est une agente S-rank du **Mockingbird**, de type **Éther** et centrée **Anomaly/Disorder**. " +
      "Elle alterne les états **Aristocrate** et **Parure flottante** pour générer des **Plumes virevoltantes / protectrices** " +
      "et déclencher **Plume florissante** — y compris **hors-terrain** après les EX alliés.",

    profile: {
      Affiliation: "Mockingbird",
      Élément: "Éther",
      Type: "Anomaly",
      Rôle: "DPS Anomaly (Disorder / off-field)",
      Ville: "New Eridu",
      Release: "Version 1.7",
    },

    baseStats: {
      // Niveau 1 (HoneyHunterWorld)
      PV: 617,
      ATK: 127,
      DEF: 49,
    },

    baseStats60: {
      // Niveau 60 (HoneyHunterWorld)
      PV: 7674,
      ATK: 805.7,
      DEF: 606.6,
    },

    skills: [
      {
        name: "Attaque normale - Frappe de plume",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour activer : Assène jusqu'à 4 attaques frontales, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> et des <span class='dgt dgt-ether'>**DGT éthériques**</span>." +
            "\nAprès le 4e coup, Viviane entre dans l'état <b>Aristocrate</b>." +
            "\nLorsque des Plumes virevoltantes sont disponibles, maintenez ",
          { type: "icon", name: "basicattack" },
          " lors du 4e coup pour entrer dans l'état <b>Parure flottante</b>.",
        ],
      },
      {
        name: "Attaque normale - Aristocrate — Valse",
        desc: [
          "Dans l'état <b>Aristocrate</b>, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour foncer en avant, infligeant des <span class='dgt dgt-ether'>**DGT éthériques**</span> et restaurant <b>1 Plume virevoltante</b> en touchant un ennemi." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nSi vous déclenchez une <b>esquive parfaite</b> pendant le bond, vous obtenez <b>1 Plume virevoltante</b> supplémentaire." +
            "\nSi des Plumes virevoltantes sont disponibles après l'utilisation, vous entrez dans <b>Parure flottante</b> (maintenez ",
          { type: "icon", name: "basicattack" },
          " pendant l'animation pour <b>annuler</b> l'entrée).",
        ],
      },
      {
        name: "Attaque normale - Parure flottante — Suspension",
        desc: [
          "Dans l'état <b>Parure flottante</b>, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour une attaque de zone frontale, infligeant des <span class='dgt dgt-ether'>**DGT éthériques**</span>." +
            "\nAprès activation, <b>consomme toutes les Plumes virevoltantes</b>. Chaque Plume consommée confère <b>1 Plume protectrice</b>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nEn <b>Parure flottante</b>, si vous changez de personnage, <b>Suspension</b> se lance automatiquement." +
            "\nEn <b>Parure flottante</b>, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour <b>quitter</b> l'état.",
        ],
      },
      {
        name: "Attaque normale - Plume florissante",
        desc: [
          "Lorsque <b>n'importe quel membre</b> de l'escouade touche un ennemi avec une ",
          { type: "icon", name: "specialattack" },
          " <b>Attaque spéciale EX</b>, Viviane <b>consomme 1 Plume protectrice</b> pour lancer <b>Plume florissante</b> sur la cible, infligeant des <span class='dgt dgt-ether'>**DGT éthériques**</span>." +
            "\nDéclenchable <b>1 fois par compétence</b>, fonctionne <b>hors-terrain</b>. Jusqu'à <b>5 Plumes protectrices</b> stockables.",
        ],
      },
      {
        name: "Esquive - Ruban lumineux",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "esquive" },
          " pour effectuer une esquive rapide." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>",
        ],
      },
      {
        name: "Attaque de bond - Mélodie aux épines d'argent",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive pour lancer une poussée frontale, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "Contre d'esquive - Retour de lame ailée",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une <b>esquive parfaite</b> pour attaquer en face, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> et des <span class='dgt dgt-ether'>**DGT éthériques**</span>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nAprès utilisation, vous entrez dans l'état <b>Aristocrate</b>. Si des Plumes virevoltantes sont disponibles, maintenez ",
          { type: "icon", name: "basicattack" },
          " pendant l'animation pour entrer en <b>Parure flottante</b>.",
        ],
      },
      {
        name: "Esquive - Courbettes gracieuses",
        desc: [
          "Dans l'état <b>Aristocrate</b>, lorsque le personnage est sur le point d'être attaqué, une <b>esquive automatique</b> se déclenche. Le personnage devient invulnérable pendant l'esquive, mais cela ne compte pas comme une esquive parfaite." +
            "\nCet effet peut se produire <b>une fois par entrée</b> dans <b>Aristocrate</b>.",
        ],
      },
      {
        name: "Soutien rapide - Garde d'ailes gelées",
        desc: [
          "Lorsque l'allié contrôlé est projeté, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour frapper en face, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> et des <span class='dgt dgt-ether'>**DGT éthériques**</span>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nAprès utilisation, vous entrez dans <b>Aristocrate</b>. Si des Plumes virevoltantes sont disponibles, maintenez ",
          { type: "icon", name: "basicattack" },
          " pour entrer en <b>Parure flottante</b>.",
        ],
      },
      {
        name: "Soutien défensif - Formation de l'ombrelle d'argent",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d'être attaqué, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour <b>parer</b> l'attaque de l'ennemi et infliger une <b>confusion importante</b>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>",
        ],
      },
      {
        name: "Soutien de suivi - Lame de plumes du châtiment",
        desc: [
          "Après un soutien défensif, appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour attaquer en face, infligeant des <span class='dgt dgt-ether'>**DGT éthériques**</span> et conférant <b>2 Plumes virevoltantes</b>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nAprès utilisation, vous entrez en <b>Parure flottante</b> (maintenez ",
          { type: "icon", name: "basicattack" },
          " pour <b>annuler</b> l'entrée).",
        ],
      },
      {
        name: "Attaque spéciale - Chant des ailes d'argent",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "specialattack1" },
          " pour attaquer rapidement vers l'avant, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span> et des <span class='dgt dgt-ether'>**DGT éthériques**</span>." +
            "\nAugmente la <b>RES à l'interruption</b> pendant l'utilisation.",
        ],
      },
      {
        name: "Attaque spéciale EX - Requiem violet",
        desc: [
          "Avec suffisamment d'énergie, appuyez sur ",
          { type: "icon", name: "specialattack" },
          " pour lancer une puissante attaque frontale, infligeant d'importants <span class='dgt dgt-ether'>**DGT éthériques**</span> et conférant <b>3 Plumes virevoltantes</b>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nAprès utilisation, vous entrez en <b>Parure flottante</b>. Vous pouvez maintenir ",
          { type: "icon", name: "basicattack" },
          " pendant l'animation pour entrer en <b>Aristocrate</b>.",
        ],
      },
      {
        name: "Enchaînement - Chœur des ailes célestes",
        desc: [
          "Lors du déclenchement d'un enchaînement, sélectionnez Viviane pour frapper une vaste zone en face, infligeant d'importants <span class='dgt dgt-ether'>**DGT éthériques**</span> et conférant <b>2 Plumes virevoltantes</b>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nAprès utilisation, vous entrez en <b>Parure flottante</b> (maintenez ",
          { type: "icon", name: "basicattack" },
          " pour <b>annuler</b> l'entrée).",
        ],
      },
      {
        name: "Ultime - Chant de l'envol des oiseaux",
        desc: [
          "Lorsque le niveau de décibels est au <b>maximum</b>, appuyez sur ",
          { type: "icon", name: "chainattack" },
          " pour frapper une vaste zone en face, infligeant d'importants <span class='dgt dgt-ether'>**DGT éthériques**</span> et conférant <b>5 Plumes virevoltantes</b>." +
            "\n<b>[Invulnérable pendant l'utilisation]</b>" +
            "\nAprès utilisation, vous entrez en <b>Parure flottante</b> (maintenez ",
          { type: "icon", name: "basicattack" },
          " pour <b>annuler</b> l'entrée).",
        ],
      },
    ],

    playstyle: [
      "Accumulez des <b>Plumes virevoltantes</b> (basiques/contre) → convertissez via <b>Suspension</b> en <b>Plumes protectrices</b>.",
      "Déclenchez <b>Plume florissante</b> <b>hors-terrain</b> après les <b>EX</b> alliés pour pousser <b>Corruption → Disorder</b>.",
      "Fenêtres clés : après <b>EX / Enchaînement / Ultime</b> (gain de Plumes) → burst <b>Suspension / Plume florissante</b>.",
    ],

    rotation: [
      "4x <b>Frappe de plume</b> → <b>Aristocrate</b> → <b>Valse</b> (générer des plumes).",
      "<b>EX : Requiem violet</b> → <b>Parure flottante</b> → <b>Suspension</b> pour convertir en Plumes protectrices.",
      "Laissez un allié lancer une <b>EX</b> pour <b>Plume florissante</b> automatique <b>hors-terrain</b>, puis bouclez.",
    ],

    tips: [
      "Gardez des <b>Plumes protectrices</b> avant une <b>EX</b> alliée pour des <b>Plumes florissantes</b> gratuites.",
      "Profitez des fenêtres <b>invulnérables</b> (Valse, Suspension, EX, Enchaînement, Ultime) pour sécuriser les bursts.",
      "Très forte avec un second <b>Anomaly</b> pour maintenir <b>Disorder</b>.",
    ],
  },
  trigger: {
    title: "Trigger - OBOLS Squad — Type Électrique (Stun)",
    summary:
      "Trigger est une agente S-rank de l’**OBOLS Squad**, de type **Électrique** spécialisée dans le **Stun**. " +
      "Elle entre en **position Sniper** pour générer des **points de Purge** et déclenche des **Aftershocks** (Harmonizing Shot / Tartarus) " +
      "lorsque ses alliés touchent, ce qui augmente fortement le **Stun DMG Multiplier** des cibles.",

    profile: {
      Affiliation: "OBOLS Squad",
      Élément: "Électrique",
      Type: "Stun",
      Rôle: "Stunner / Off-field Aftershocks",
      Ville: "New Eridu",
      Release: "v2.1",
    },

    baseStats: {
      // Niveau 1 — HoneyHunterWorld
      PV: 637,
      ATK: 108,
      DEF: 48,
    },

    baseStats60: {
      // Niveau 60 — HoneyHunterWorld
      PV: 7923,
      ATK: 675.75,
      DEF: 600.59,
    },

    skills: [
      {
        name: "Attaque normale - Tir à froid",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pour activer : Déclenche jusqu'à 4 tirs consécutifs en face. Les 3 premiers infligent des <span class='dgt dgt-phys'>**DGT physiques**</span>, et le 4e tir inflige des <span class='dgt dgt-elec'>**DGT électriques**</span>.",
        ],
      },
      {
        name: "Attaque normale - Tir d’harmonie",
        desc: [
          "Lorsque Gâchette possède des **points de Purge**, touchez un ennemi avec un autre personnage de l’escouade via une attaque normale, un contre d’esquive, une attaque spéciale, une attaque de bond ou un soutien rapide pour activer : " +
            "tire **deux coups de feu rapides** autour de la cible, infligeant des <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\nÀ l’activation, consomme **3 pts de Purge**." +
            "\n**[Invulnérable pendant l’utilisation]**" +
            "\n<i>Tir d’harmonie est un Contrecoup.</i> L’escouade peut déclencher Tir d’harmonie **une fois toutes les 3 s**.",
        ],
      },
      {
        name: "Attaque normale - Tir d’harmonie – Tartare",
        desc: [
          "Lorsque Gâchette possède des **points de Purge**, touchez un ennemi avec un autre personnage de l’escouade à l’aide de l’**attaque lourde** d’une **Attaque spéciale EX**, d’un **Soutien de suivi** ou d’un **Ultime** pour activer : " +
            "tire **trois coups** autour de la cible suivis d’un **coup final**, infligeant des <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\nÀ l’activation, consomme **5 pts de Purge**." +
            "\n**[Invulnérable pendant l’utilisation]** • <i>Contrecoup.</i>" +
            "\nPeut être déclenché **2 fois / 20 s** par type de compétence. " +
            "Si un Tir d’harmonie se déclenche durant Tartare, **Tartare** a la priorité et se lance immédiatement.",
        ],
      },
      {
        name: "Esquive - Dissimulation fantomatique",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "esquive" },
          " pour activer : une esquive rapide." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque de bond - Spectre vengeur",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive pour activer : lève rapidement son arme pour tirer, infligeant des <span class='dgt dgt-phys'>**DGT physiques**</span>.",
        ],
      },
      {
        name: "Contre d’esquive - Âme condamnée",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " pendant une esquive parfaite pour activer : tourne et tire un coup de feu rapide en face, infligeant des <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien rapide - Tir de couverture à froid",
        desc: [
          "Lorsque le personnage contrôlé est projeté, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour activer : tourne et tire un coup de feu rapide en face, infligeant des <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien défensif - Mort retardée",
        desc: [
          "Lorsque le personnage sur le terrain est sur le point d’être attaqué, appuyez sur ",
          { type: "icon", name: "assist" },
          " pour activer : pare l’attaque de l’ennemi et inflige une **confusion importante**." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Soutien de suivi - Foudre perforante",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "basicattack" },
          " après avoir déclenché un soutien défensif pour activer : enchaîne des entailles puis un **tir chargé** à l’atterrissage, infligeant des <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Attaque spéciale - Éclat spectral",
        desc: [
          "Appuyez sur ",
          { type: "icon", name: "specialattack1" },
          " pour activer : se jette en avant et assène une entaille infligeant des <span class='dgt dgt-elec'>**DGT électriques**</span>. " +
            "Augmente la <b>RES à l’interruption</b> pendant l’utilisation.",
        ],
      },
      {
        name: "Attaque spéciale EX - Funérailles express",
        desc: [
          "Avec suffisamment d’énergie, appuyez sur ",
          { type: "icon", name: "specialattack" },
          " pour activer : se jette en avant, assène une entaille, saute puis tire vers le bas, infligeant d’importants <span class='dgt dgt-elec'>**DGT électriques**</span>. " +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**" +
            "\nSi la compétence touche, déclenche le **soutien rapide** du personnage précédent." +
            "\nSi la compétence touche, Gâchette entre en **Soutien coordonné** : pendant **8 s**, lorsque le personnage contrôlé est un **autre** membre de l’escouade et touche un ennemi avec n’importe quelle attaque, **Tir d’harmonie** se déclenche **sans consommer de Purge** et **sans recharge**, jusqu’à **4 fois**. " +
            "Rentrer à nouveau en Soutien coordonné prolonge la durée et ajoute des déclenchements (jusqu’à **20 s** et **10** déclenchements max).",
        ],
      },
      {
        name: "Enchaînement - Guide stygien",
        desc: [
          "Lors du déclenchement d’un enchaînement, sélectionnez Gâchette pour tirer de puissants coups de feu en continu vers l’avant, infligeant d’importants <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\n**[Le personnage est invulnérable pendant l’utilisation]**",
        ],
      },
      {
        name: "Ultime - Requiem d'outre-tombe",
        desc: [
          "Lorsque le niveau de décibels est au Maximum, appuyez sur ",
          { type: "icon", name: "chainattack" },
          " pour activer : " +
            "\nTire un puissant coup de feu sur les ennemis dans une vaste zone en face, infligeant d'importants <span class='dgt dgt-elec'>**DGT électriques**</span>." +
            "\nLe personnage est invulnérable pendant l'utilisation de cette compétence." +
            "\nLorsque cette compétence touche un ennemi, elle déclenche le soutien rapide du personnage précédent de l'escouade." +
            "\nLorsque cette compétence touche un ennemi, Gâchette entre dans l'état **Soutien coordonné**. Dans cet état, lorsque le personnage contrôlé est un autre personnage de l'escouade et qu'il touche un ennemi avec n'importe quelle attaque, **Attaque normale : Tir d'harmonie** se déclenche sans consommer de points de Purge et sans restriction de temps de recharge. Cet état dure **12 s**, et cet effet peut être déclenché un maximum de **6 fois**. Entrer à nouveau dans l'état **Soutien coordonné** prolonge la durée de l'état et confère des déclenchements supplémentaires. Ainsi, l'état peut durer jusqu'à **20 s**, et l'effet peut être déclenché un maximum de **10 fois**.",
        ],
      },
    ],

    playstyle: [
      "Montez en **Purge** via la **position Sniper** (tirs/contre) puis laissez les **alliés** déclencher des **Aftershocks**.",
      "**EX/Ult** → **Soutien coordonné** pour des rafales d’Aftershocks **gratuits** (sans Purge / sans CD).",
      "Le **Core** augmente le **Stun DMG Multiplier** de la cible à chaque Aftershock (jusqu’à **+35 %** au nv 60).",
    ],

    rotation: [
      "Ouvrir en **Sniper** pour stocker la **Purge** (viser un contre auto si possible).",
      "Passer sur l’allié → déclencher **Harmonizing Shot** / **Tartarus** selon le skill utilisé.",
      "Lancer **EX** ou **Ult** pour entrer en **Soutien coordonné**, puis spam attaques alliées → Aftershocks gratuits.",
    ],

    tips: [
      "Gardez **3–5 Purge** avant un gros skill allié pour garantir **Harmonizing / Tartarus**.",
      "La **Frappe finale** du Sniper et l’**Ult/EX** déclenchent un **Soutien rapide** : exploitez ces fenêtres.",
      "Build Stun/Impact ; l’équipe profite aussi d’un haut **CRIT Rate** selon les builds Game8.",
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
