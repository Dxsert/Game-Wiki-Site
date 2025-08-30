// src/components/CharacterInfo.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // ✅ autorise le HTML inline (<span style="...">, <u>, etc.)

// Helpers Markdown (block / inline)
const MdBlock = ({ children, className = "" }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      p: ({ node, ...props }) => (
        <p {...props} className={`leading-relaxed ${className}`} />
      ),
    }}
  >
    {children}
  </ReactMarkdown>
);

const MdInline = ({ children, className = "" }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      p: ({ node, ...props }) => <span {...props} className={className} />,
      br: ({ node, ...props }) => <br {...props} />,
    }}
  >
    {children}
  </ReactMarkdown>
);

export default function CharacterInfo({ data }) {
  if (!data) {
    return (
      <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4 text-neutral-400">
        Aucune information disponible pour ce personnage pour le moment.
      </div>
    );
  }

  const {
    title,
    summary,
    profile,
    baseStats,
    baseStats60,
    skills,
    playstyle, // string | string[]
    combos, // [{ name, input, notes }]
    rotation, // string[]
    tips, // string[]
  } = data;

  const toArr = (v) => (Array.isArray(v) ? v : v ? [v] : []);

  // --- rendu mixte texte + icônes pour les descriptions ---
  const renderDesc = (desc) => {
    if (!desc) return null;
    if (typeof desc === "string") {
      return <MdInline className="text-neutral-300">{desc}</MdInline>;
    }
    if (Array.isArray(desc)) {
      return desc.map((part, i) =>
        typeof part === "string" ? (
          <MdInline key={i} className="text-neutral-300">
            {part}
          </MdInline>
        ) : part?.type === "icon" ? (
          <img
            key={i}
            src={`/assets/img/zzz/ui/${part.name}.png`}
            alt={part.name}
            className="inline h-5 w-5 align-middle mx-1"
            draggable="false"
          />
        ) : null
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {(title || summary) && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          {title && (
            <h3 className="mb-2 text-lg font-bold text-white">
              <MdInline>{title}</MdInline>
            </h3>
          )}
          {summary && <MdBlock className="text-neutral-300">{summary}</MdBlock>}
        </div>
      )}

      {profile && Object.keys(profile).length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Profil
          </h4>
          <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {Object.entries(profile).map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between gap-3 rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2"
              >
                <dt className="text-neutral-400">{k}</dt>
                <dd className="font-semibold text-neutral-100">
                  <MdInline>{String(v)}</MdInline>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {baseStats && Object.keys(baseStats).length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Stats de base | Lvl 1
          </h4>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {Object.entries(baseStats).map(([k, v]) => (
              <div
                key={k}
                className="rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2 text-center"
              >
                <div className="text-neutral-400 text-xs">{k}</div>
                <div className="text-neutral-100 font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {baseStats60 && Object.keys(baseStats60).length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Stats de base | Lvl 60
          </h4>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {Object.entries(baseStats60).map(([k, v]) => (
              <div
                key={k}
                className="rounded-lg border border-neutral-800 bg-[#0f0f10] px-3 py-2 text-center"
              >
                <div className="text-neutral-400 text-xs">{k}</div>
                <div className="text-neutral-100 font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {Array.isArray(skills) && skills.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Kit & compétences
          </h4>
          <ul className="space-y-2">
            {skills.map((s, i) => (
              <li
                key={`${s.name}-${i}`}
                className="rounded-lg border border-neutral-800 bg-[#0f0f10] p-3"
              >
                <div className="flex items-start gap-3">
                  {s.icon && (
                    <img
                      src={`/assets/img/${s.icon}`}
                      alt={s.name}
                      className="h-8 w-8 rounded-md object-cover border border-neutral-700"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-white">
                      <MdInline>{s.name}</MdInline>
                    </div>
                    <div className="text-xs text-neutral-400 mb-1">
                      <MdInline>{s.type}</MdInline>
                    </div>
                    {s.desc && (
                      <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
                        {renderDesc(s.desc)}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {toArr(playstyle).length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Playstyle
          </h4>
          <div className="space-y-2 text-neutral-300">
            {toArr(playstyle).map((p, i) => (
              <MdBlock key={i}>{p}</MdBlock>
            ))}
          </div>
        </div>
      )}

      {Array.isArray(combos) && combos.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Combos utiles
          </h4>
          <ul className="space-y-2">
            {combos.map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                className="rounded-lg border border-neutral-800 bg-[#0f0f10] p-3"
              >
                <div className="font-semibold text-white">
                  <MdInline>{c.name}</MdInline>
                </div>
                {c.input && (
                  <div className="mt-1 rounded-md bg-black/40 px-2 py-1 text-xs text-neutral-200">
                    {c.input}
                  </div>
                )}
                {c.notes && (
                  <div className="mt-2 text-neutral-300 leading-relaxed">
                    <MdBlock>{c.notes}</MdBlock>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(rotation) && rotation.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Rotation conseillée
          </h4>
          <ol className="list-decimal pl-5 space-y-1 text-neutral-300">
            {rotation.map((r, i) => (
              <li key={i}>
                <MdInline>{r}</MdInline>
              </li>
            ))}
          </ol>
        </div>
      )}

      {Array.isArray(tips) && tips.length > 0 && (
        <div className="rounded-xl border border-neutral-800 bg-[#111215] p-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-300">
            Astuces
          </h4>
          <ul className="list-disc pl-6 text-neutral-300 space-y-1">
            {tips.map((t, i) => (
              <li key={i}>
                <MdInline>{t}</MdInline>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
