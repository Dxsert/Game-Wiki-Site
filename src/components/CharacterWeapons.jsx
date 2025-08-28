// src/components/CharacterWeapons.jsx
export default function CharacterWeapons({ data, game }) {
  const builds = data?.builds || [];
  const main = builds[0];

  if (!main?.wEngineBest && !main?.wEngineAlts?.length) {
    return (
      <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4 text-neutral-400">
        Pas de W-Engine renseigné pour ce personnage.
      </div>
    );
  }

  const slugify = (s = "") =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  const wIcon = (name) =>
    `/assets/img/${game?.toLowerCase()}/weapons/${slugify(name)}.png`;

  const W = ({ name }) => (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 px-2.5 py-1">
      <img
        src={wIcon(name)}
        alt={name}
        className="h-6 w-6 rounded-md object-cover border border-neutral-700"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      <span className="text-xs text-neutral-200">{name}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      {main?.wEngineBest && (
        <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-4">
          <div className="text-base font-semibold text-white mb-2">
            Meilleure option
          </div>
          <W
            name={
              typeof main.wEngineBest === "string"
                ? main.wEngineBest
                : main.wEngineBest.name || main.wEngineBest.id
            }
          />
        </div>
      )}
      {Array.isArray(main?.wEngineAlts) && main.wEngineAlts.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-4">
          <div className="text-base font-semibold text-white mb-2">
            Alternatives
          </div>
          <div className="flex flex-wrap gap-2">
            {main.wEngineAlts.map((x, i) => (
              <W key={i} name={typeof x === "string" ? x : x.name || x.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
