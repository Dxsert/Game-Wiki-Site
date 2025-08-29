import { useNavigate } from "react-router-dom";

export default function GameCard({ game, distance }) {
  const navigate = useNavigate();
  const ACTIVE = distance === 0;

  // Nouvelle logique de placement : l’active devant (z-40),
  // les voisines juste derrière et légèrement décalées,
  // les plus lointaines encore plus petites et derrière.
  const pos = (() => {
    if (distance === 0)
      return "z-40 translate-y-[-50%] scale-100 opacity-100";
    if (distance === -1)
      return "z-20 translate-y-[calc(-50%-8vh)] scale-[0.985] opacity-85";
    if (distance === 1)
      return "z-20 translate-y-[calc(-50%+8vh)] scale-[0.985] opacity-85";
    if (distance <= -2)
      return "z-10 translate-y-[calc(-50%-18vh)] scale-[0.95] opacity-60";
    return "z-10 translate-y-[calc(-50%+18vh)] scale-[0.95] opacity-60";
  })();

  const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'>
         <rect width='100%' height='100%' fill='#141414'/>
         <text x='50%' y='50%' fill='#aaa' font-size='32' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif'>
           Image manquante
         </text>
       </svg>`
    );

  const go = (e, slug) => {
    e.preventDefault();
    if (!ACTIVE) return;

    // retire un ancien overlay s'il existe
    const prev = document.querySelector(".page-transition");
    if (prev) prev.remove();

    // crée l'overlay
    const o = document.createElement("div");
    o.className = "page-transition";
    o.style.backgroundImage = `url("${game.img}")`;

    // ✅ fallback inline au cas où le CSS tarde
    o.style.position = "fixed";
    o.style.inset = "0";
    o.style.backgroundPosition = "center";
    o.style.backgroundSize = "cover";
    o.style.backgroundRepeat = "no-repeat";
    o.style.zIndex = "2147483647";
    o.style.opacity = "0";
    o.style.transform = "scale(1.02)";
    o.style.transition = "opacity .35s ease, transform .35s ease";
    document.body.appendChild(o);
    requestAnimationFrame(() => {
      o.style.opacity = "1";
      o.style.transform = "scale(1)";
    });

    setTimeout(() => {
      try {
        navigate(`/${slug}`);
      } catch {
        window.location.assign(`/${slug}`);
      }
    }, 350);
  };

  const goKey = (e, slug) => {
    if (!ACTIVE) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go(e, slug);
    }
  };

  return (
    <section
      className={`absolute left-0 right-0 top-1/2 transition-all duration-500 ease-[cubic-bezier(.2,.6,.2,1)] ${pos} ${
        ACTIVE ? "" : "pointer-events-none"
      }`}
    >
      {/* largeur/contours de la grande carte */}
      <div className="mx-auto w-[min(1120px,calc(100vw-360px))] md:w-[min(1120px,calc(100vw-360px))] sm:w-[min(1120px,calc(100vw-24px))] rounded-2xl border border-neutral-800 bg-[#0f0f0f] p-4 pb-3 shadow-[0_16px_36px_rgba(0,0,0,.35)]">
        {/* MEDIA avec overlay d’actions en bas et logo en haut-gauche */}
        <div className="relative overflow-hidden rounded-xl border-2 border-neutral-800 bg-black">
          {/* Logo optionnel */}
          {game.logo && (
            <img
              src={game.logo}
              alt=""
              className="pointer-events-none absolute left-3 top-3 h-12 w-auto select-none drop-shadow-[0_6px_10px_rgba(0,0,0,.4)]"
              draggable="false"
            />
          )}

          {/* Image */}
          <img
            src={game.img}
            alt={game.name}
            className="aspect-[21/9] w-full select-none object-cover"
            draggable="false"
            onError={(e) => {
              if (e.currentTarget.src !== PLACEHOLDER)
                e.currentTarget.src = PLACEHOLDER;
            }}
          />

          {/* Barre noire arrondie avec pills (sur l’image) */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3 flex justify-center">
            <div className="pointer-events-auto flex w-full max-w-[calc(100%-8px)] flex-wrap items-center justify-center gap-2 rounded-full bg-black/85 px-3 py-2 backdrop-blur">
              {game.sections.map(({ label, slug }) => {
                const disabled = !ACTIVE;
                return (
                  <a
                    key={slug}
                    role="button"
                    href={`/${slug}`}
                    onClick={(e) => go(e, slug)}
                    onKeyDown={(e) => goKey(e, slug)}
                    tabIndex={disabled ? -1 : 0}
                    aria-disabled={disabled}
                    className={`inline-flex items-center justify-center rounded-full border-2 px-3 py-2 text-[0.96rem] font-semibold transition
                      ${
                        disabled
                          ? "cursor-default border-neutral-800 bg-[#141414] text-white/50"
                          : "border-neutral-800 bg-[#151515] hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800"
                      }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
