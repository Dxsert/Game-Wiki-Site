// src/components/CharacterResources.jsx
import {
    resourcesByGame,
    getMaterial,
    totalAscension,
    totalSkillBranch,
    totalAllSkills,
    totalCharacterAll,
  } from "../data/ressource";
  
  function MatRow({ game, id, qty }) {
    const m = getMaterial(game, id);
    if (!m) {
      return (
        <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2">
          <div className="text-neutral-400">Inconnu: {id}</div>
          <div className="font-semibold text-neutral-100">×{qty}</div>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={`/assets/img/${m.icon}`}
            alt={m.name}
            className="h-8 w-8 rounded-md object-cover border border-neutral-700 shrink-0"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="min-w-0">
            <div className="truncate font-semibold text-neutral-100">{m.name}</div>
            <div className="text-xs text-neutral-400 truncate">{m.type}</div>
          </div>
        </div>
        <div className="pl-3 font-semibold text-neutral-100">×{qty}</div>
      </div>
    );
  }
  
  function CostBlock({ game, cost }) {
    if (!cost) return null;
    const items = Array.isArray(cost.items) ? cost.items : [];
    return (
      <div className="space-y-2">
        {cost.credits ? (
          <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2">
            <div className="flex items-center gap-3">
              <img
                src={`/assets/img/${resourcesByGame?.[game]?.materials?.zzz_credit?.icon || "zzz/mats/credit.png"}`}
                alt="Crédits"
                className="h-8 w-8 rounded-md object-cover border border-neutral-700"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div>
                <div className="font-semibold text-neutral-100">Crédits</div>
                <div className="text-xs text-neutral-400">Monnaie</div>
              </div>
            </div>
            <div className="font-semibold text-neutral-100">{cost.credits.toLocaleString()}</div>
          </div>
        ) : null}
  
        {items.map(({ id, qty }) => (
          <MatRow key={id} game={game} id={id} qty={qty} />
        ))}
      </div>
    );
  }
  
  function TotalCard({ title, cost, className = "" }) {
    if (!cost) return null;
    return (
      <div className={`rounded-xl border border-neutral-800 bg-[#111215] p-3 ${className}`}>
        <div className="text-sm text-neutral-400">{title}</div>
        <div className="mt-2 space-y-2">
          {cost.credits ? (
            <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2">
              <div className="text-neutral-300">Crédits</div>
              <div className="font-semibold text-neutral-100">{cost.credits.toLocaleString()}</div>
            </div>
          ) : null}
          {(Array.isArray(cost.items) ? cost.items : []).map(({ id, qty }) => (
            <div key={id} className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2">
              <div className="text-neutral-300 truncate">{id}</div>
              <div className="font-semibold text-neutral-100">×{qty}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function MiniTotal({ title, cost }) {
    if (!cost) return null;
    const credits = cost.credits || 0;
    const items = (Array.isArray(cost.items) ? cost.items : []).reduce((acc, { id, qty }) => acc + (qty || 0), 0);
    return (
      <div className="text-xs text-neutral-400">
        {title}: <span className="text-neutral-200 font-semibold">{credits.toLocaleString()}</span> crédits
        {" · "}
        <span className="text-neutral-200 font-semibold">{items}</span> items
      </div>
    );
  }
  
  export default function CharacterResources({ game, charKey }) {
    const plan = resourcesByGame?.[game]?.characters?.[charKey];
    if (!plan) {
      return (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4 text-neutral-400">
          Aucune donnée de ressources pour ce personnage.
        </div>
      );
    }
  
    const asc = Array.isArray(plan.ascension) ? plan.ascension : [];
    const skills = plan.skills || {};
    const branches = Object.keys(skills).filter((b) => Array.isArray(skills[b]) && skills[b].length);
  
    const totalAsc = totalAscension(game, charKey);
    const totalSkills = totalAllSkills(game, charKey);
  
    return (
      <div className="space-y-6">
        {/* Totaux rapides */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TotalCard title="Total Skill Upgrade" cost={totalAsc} />
          <TotalCard title="Total Compétences" cost={totalSkills} />
          <TotalCard title="Global (Élévation + Compétences)" cost={{
            credits: (totalAsc?.credits || 0) + (totalSkills?.credits || 0),
            items: [
              ...((totalAsc?.items || [])),
              ...((totalSkills?.items || [])),
            ].reduce((map, { id, qty }) => {
              map[id] = (map[id] || 0) + (qty || 0);
              return map;
            }, {})
          }} />
        </div>
  
        {/* Élévation */}
        <section className="rounded-2xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-4 text-lg font-bold text-white">Élévation</h4>
          {asc.length === 0 ? (
            <div className="text-neutral-400">Aucune étape d’élévation renseignée.</div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {asc.map((step) => (
                <div key={step.phase} className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-semibold text-neutral-100">Phase {step.phase}</div>
                    {step.levelCap && <div className="text-xs text-neutral-400">Cap niv. {step.levelCap}</div>}
                  </div>
                  <CostBlock game={game} cost={step.cost} />
                </div>
              ))}
            </div>
          )}
        </section>
  
        {/* Compétences par branche */}
        <section className="rounded-2xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-4 text-lg font-bold text-white">Compétences</h4>
  
          {branches.length === 0 ? (
            <div className="text-neutral-400">Aucune donnée de compétences renseignée.</div>
          ) : (
            <div className="space-y-6">
              {branches.map((b) => (
                <div key={b} className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-semibold text-neutral-100 capitalize">{b}</div>
                    <MiniTotal title="Total branche" cost={totalSkillBranch(game, charKey, b)} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {skills[b].map((rankObj) => (
                      <div key={rankObj.rank} className="rounded-lg border border-neutral-800 bg-[#111215] p-3">
                        <div className="mb-2 text-sm font-semibold text-neutral-200">
                          Rang {rankObj.rank}
                        </div>
                        <CostBlock game={game} cost={rankObj.cost} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
  