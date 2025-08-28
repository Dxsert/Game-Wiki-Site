// src/components/CharacterArtifacts.jsx
export default function CharacterArtifacts({ data, game }) {
  if (!data?.builds?.length) {
    return (
      <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4 text-neutral-400">
        Aucun build “Drive Discs” renseigné.
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
  const discIcon = (name) =>
    `/assets/img/${game?.toLowerCase()}/discs/${slugify(name)}.png`;

  const parseDisc = (line = "") => {
    const out = [];
    const re = /([A-Za-z0-9'’\- ]+)\s*\((\d+)p\)/g;
    let m;
    while ((m = re.exec(line))) out.push({ name: m[1].trim(), pieces: +m[2] });
    if (!out.length && line.trim()) out.push({ name: line.trim() });
    return out;
  };

  return (
    <div className="space-y-6">
      {data.builds.map((b, i) => (
        <div
          key={i}
          className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-4 space-y-4"
        >
          <div className="text-base font-semibold text-white">
            Disc Build Recommender — {b.name}
          </div>

          {/* Sets */}
          {Array.isArray(b.driveDiscs) && b.driveDiscs.length > 0 && (
            <div>
              <div className="text-xs text-neutral-400 mb-1">
                Sets recommandés
              </div>
              <div className="space-y-2">
                {b.driveDiscs.map((line, k) => (
                  <div key={k} className="flex flex-wrap items-center gap-2">
                    {parseDisc(line).map((s, m) => (
                      <div
                        key={m}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 pl-2 pr-2 py-1"
                      >
                        <img
                          src={discIcon(s.name)}
                          alt={s.name}
                          className="h-6 w-6 rounded-md object-cover border border-neutral-700"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                        <span className="text-xs text-neutral-200">
                          {s.name}
                        </span>
                        {s.pieces ? (
                          <span className="ml-1 rounded-md border border-neutral-700 bg-[#0f0f10] px-1.5 py-0.5 text-[10px] text-neutral-300">
                            {s.pieces}p
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats principales */}
          {b.mainStats && (
            <div>
              <div className="text-xs text-neutral-400 mb-1">
                Stats sur slots
              </div>
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {Object.entries(b.mainStats).map(([slot, val]) => (
                  <div
                    key={slot}
                    className="rounded-lg border border-neutral-800 bg-[#111215] px-3 py-2"
                  >
                    <div className="text-xs text-neutral-400">{slot}</div>
                    <div className="text-neutral-100 font-semibold">{val}</div>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Substats */}
          {Array.isArray(b.subStats) && b.subStats.length > 0 && (
            <div>
              <div className="text-xs text-neutral-400 mb-1">
                Substats à viser
              </div>
              <div className="flex flex-wrap gap-1.5">
                {b.subStats.map((s, j) => (
                  <span
                    key={j}
                    className="rounded-full border border-neutral-700 bg-black/50 px-2.5 py-1 text-xs text-neutral-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Objectifs chiffrés (option : data.targetStats) */}
          {data.targetStats && (
            <div>
              <div className="text-xs text-neutral-400 mb-1">
                Objectifs de stats
              </div>
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {Object.entries(data.targetStats).map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-lg border border-neutral-800 bg-[#111215] px-3 py-2"
                  >
                    <div className="text-xs text-neutral-400">{k}</div>
                    <div className="text-neutral-100 font-semibold">{v}</div>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Notes */}
          {Array.isArray(b.notes) && b.notes.length > 0 && (
            <div className="text-neutral-300">
              <div className="text-xs text-neutral-400 mb-1">Notes</div>
              <ul className="list-disc pl-5 space-y-1">
                {b.notes.map((n, j) => (
                  <li key={j}>{n}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
