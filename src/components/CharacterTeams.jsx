// src/components/CharacterTeams.jsx
import { charactersByGame } from "../data/characters";

export default function CharacterTeams({ data, game }) {
  const teams = data?.teams || [];
  const rotation = data?.rotation || [];

  const roster = (charactersByGame?.[game] ?? []).map((c) => ({
    id: (c.id || "").toLowerCase(),
    slug: (c.slug || "").toLowerCase(),
    name: (c.name || "").toLowerCase().replace(/\s+/g, ""),
    display: c.name,
    icon: c.icon,
  }));
  const findRef = (label) => {
    const key = String(label || "")
      .toLowerCase()
      .replace(/\s+/g, "");
    return (
      roster.find((x) => x.name === key || x.id === key || x.slug === key) ||
      null
    );
  };

  const AgentChip = ({ label }) => {
    const ref = findRef(label);
    if (!ref)
      return (
        <div className="rounded-full border border-neutral-700 bg-black/40 px-2.5 py-1 text-xs text-neutral-200">
          {label}
        </div>
      );
    return (
      <div className="flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 px-2.5 py-1">
        <img
          src={`/assets/img/${ref.icon}`}
          alt={ref.display}
          className="h-6 w-6 rounded-md object-cover border border-neutral-700"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <span className="text-xs text-neutral-200">{ref.display}</span>
      </div>
    );
  };

  if (teams.length === 0 && rotation.length === 0) {
    return (
      <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4 text-neutral-400">
        Aucune team/rotation renseignée.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {teams.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Teams recommandées
          </h4>
          <div className="grid gap-3 md:grid-cols-2">
            {teams.map((t, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-800 bg-[#0f0f10] p-3"
              >
                <div className="font-semibold text-white">{t.name}</div>
                <div className="mt-2">
                  <div className="text-xs text-neutral-400 mb-1">Agents</div>
                  <div className="flex flex-wrap gap-2">
                    {(t.agents || []).map((lbl, idx) => (
                      <AgentChip key={`${lbl}-${idx}`} label={lbl} />
                    ))}
                  </div>
                </div>
                {Array.isArray(t.bangboo) && t.bangboo.length > 0 && (
                  <div className="mt-2 text-neutral-300">
                    <span className="text-xs text-neutral-400">Bangboo :</span>{" "}
                    {t.bangboo.join(", ")}
                  </div>
                )}
                {t.idea && (
                  <div className="mt-2 text-neutral-300">{t.idea}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {rotation.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Rotation conseillée
          </h4>
          <ol className="list-decimal pl-5 space-y-1 text-neutral-300">
            {rotation.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
