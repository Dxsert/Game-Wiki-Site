// src/components/Sidebar.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { games } from "../data/games";

export default function Sidebar({
  index,
  setIndex,
  isOpen,
  onClose,
  sidebarRef,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [logged, setLogged] = useState(localStorage.getItem("dx_auth") === "1");
  const [lang, setLang] = useState(localStorage.getItem("dx_lang") || "FR");
  const [openId, setOpenId] = useState(null);

  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(
    () => localStorage.setItem("dx_auth", logged ? "1" : "0"),
    [logged]
  );
  useEffect(() => localStorage.setItem("dx_lang", lang), [lang]);

  const go = (e, slug, img) => {
    e.preventDefault();

    // retire un éventuel ancien overlay
    const prev = document.querySelector(".page-transition");
    if (prev) prev.remove();

    // overlay + navigation
    const o = document.createElement("div");
    o.className = "page-transition";
    o.style.backgroundImage = `url('${img}')`;
    document.body.appendChild(o);

    setTimeout(() => {
      try {
        navigate(`/${slug}`);
      } catch {
        window.location.assign(`/${slug}`);
      }
    }, 350);
  };

  const back = () => {
    // pas d’overlay pour "Retour"
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <>
      {/* Overlay mobile */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`z-50 lg:z-auto lg:static fixed top-14 bottom-0 left-0 w-72 border-r border-neutral-800 bg-black/80 backdrop-blur
        overflow-auto overscroll-contain p-2 transition-transform lg:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="rounded-2xl border border-neutral-800 bg-[#0f0f10] p-3 shadow-[0_8px_24px_rgba(0,0,0,.35)]">
          {/* ← Bouton retour (uniquement hors accueil) */}
          {!isHome && (
            <div className="sticky top-0 z-10 -mx-1 -mt-1 mb-2 rounded-t-2xl border-b border-neutral-800 bg-[#0b0c0e]/80 px-3 py-2 backdrop-blur">
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 font-semibold hover:bg-neutral-800"
                aria-label="Retour"
                title="Retour"
              >
                ← Retour
              </button>
            </div>
          )}

          <h2 className="mb-2 ml-2 text-base font-bold text-white/90">Menu</h2>

          {/* Jeux */}
          {games.map((g, i) => {
            const opened = openId === g.id;
            return (
              <details
                key={g.id}
                open={opened}
                onToggle={(e) => {
                  if (e.currentTarget.open) {
                    setOpenId(g.id);
                    setIndex(i);
                    onClose?.();
                  } else if (openId === g.id) setOpenId(null);
                }}
                className="mx-1 my-2 overflow-hidden rounded-xl border border-[#232427] bg-[#141517]"
              >
                <summary className="list-none cursor-pointer rounded-xl px-4 py-3 hover:bg-[#191b1f]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">{g.name}</span>
                    <span
                      className={`transition-transform ${
                        opened ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </div>
                </summary>
                <nav className="grid px-3 pb-3 [grid-template-rows:1fr]">
                  <div>
                    {g.sections.map(({ label, slug }) => (
                      <a
                        key={slug}
                        href={`/${slug}`}
                        onClick={(e) => go(e, slug, g.img)}
                        className="my-1 block rounded-lg border border-[#272a31] bg-[#181a1f] px-3 py-2 transition hover:border-[#363b45] hover:bg-[#1f2229]"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </nav>
              </details>
            );
          })}

          {/* Paramètres */}
          <hr className="my-3 mx-1 h-px border-0 bg-[#1f1f22]" />
          <h3 className="mb-2 ml-2 text-sm font-bold text-white/80">
            Paramètres
          </h3>

          <button
            type="button"
            onClick={() => setLogged((v) => !v)}
            className="settings-item mx-1 mb-2 flex items-center gap-3 rounded-xl border border-[#232427] bg-[#141517] px-4 py-2 transition hover:bg-[#191b1f]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
              />
            </svg>
            <span className="font-medium">{logged ? "Log out" : "Log in"}</span>
          </button>

          <details className="mx-1 mb-2 overflow-hidden rounded-xl border border-[#232427] bg-[#141517]">
            <summary className="list-none cursor-pointer px-4 py-2 hover:bg-[#191b1f]">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    <path
                      fill="currentColor"
                      d="M12 3a9 9 0 1 0 9 9a9 9 0 0 0-9-9m7 9a7 7 0 0 1-1.1 3.8h-2.7A15.2 15.2 0 0 0 15 12h4m-4.4-2h2.69A7 7 0 0 0 19 12h-4a17 17 0 0 0-.4-2M11 5.06A6.9 6.9 0 0 0 8.31 10H5.6A7 7 0 0 1 11 5.06M5 12h3a15 15 0 0 0 .3 3H5.6A7 7 0 0 1 5 12m1.4 4h2.69A6.9 6.9 0 0 0 11 18.94A7 7 0 0 1 6.4 16M13 5.06A7 7 0 0 1 17.6 10H14.9A15 15 0 0 0 13 5.06M12 7a17 17 0 0 1 1.1 3H10.9A17 17 0 0 1 12 7m0 10a17 17 0 0 1-1.1-3h2.2A17 17 0 0 1 12 17m1 1.94A15 15 0 0 0 14.9 16h2.7A7 7 0 0 1 13 18.94"
                    />
                  </svg>
                  <span className="font-medium">Langue</span>
                  <small className="ml-2 rounded-md border border-neutral-700 px-2 py-0.5 text-xs">
                    {lang}
                  </small>
                </div>
                <span>›</span>
              </div>
            </summary>
            <div className="grid grid-cols-2 gap-2 p-3">
              {["FR", "EN", "ES", "DE", "PT", "ZH", "JA"].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-lg border px-3 py-2 ${
                    lang === code
                      ? "border-neutral-600 bg-neutral-800"
                      : "border-[#272a31] bg-[#181a1f] hover:border-[#363b45] hover:bg-[#1f2229]"
                  }`}
                >
                  {
                    {
                      FR: "Français",
                      EN: "English",
                      ES: "Español",
                      DE: "Deutsch",
                      PT: "Português",
                      ZH: "中文",
                      JA: "日本語",
                    }[code]
                  }
                </button>
              ))}
            </div>
          </details>

          {/* Profil si connecté */}
          {logged && (
            <a
              href="/profil.html"
              className="mx-1 flex items-center gap-3 rounded-xl border border-[#232427] bg-[#141517] px-4 py-2 transition hover:bg-[#191b1f]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
                />
              </svg>
              <span className="font-medium">Profil</span>
            </a>
          )}

          {/* Réseaux */}
          <hr className="my-3 mx-1 h-px border-0 bg-[#1f1f22]" />
          <h3 className="mb-2 ml-2 text-sm font-bold text-white/80">Réseaux</h3>
          <nav className="grid gap-2 px-1 pb-1">
            <a
              className="flex items-center gap-2 rounded-xl border border-[#26282f] bg-[#15161a] px-3 py-2 transition hover:bg-[#1b1d22]"
              href="https://discord.gg/TON_INVITE"
              target="_blank"
              rel="noopener"
            >
              Discord
            </a>
            <a
              className="flex items-center gap-2 rounded-xl border border-[#26282f] bg-[#15161a] px-3 py-2 transition hover:bg-[#1b1d22]"
              href="https://instagram.com/TON_USERNAME"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
            <a
              className="flex items-center gap-2 rounded-xl border border-[#26282f] bg-[#15161a] px-3 py-2 transition hover:bg-[#1b1d22]"
              href="https://twitch.tv/TON_USERNAME"
              target="_blank"
              rel="noopener"
            >
              Twitch
            </a>
            <a
              className="flex items-center gap-2 rounded-xl border border-[#26282f] bg-[#15161a] px-3 py-2 transition hover:bg-[#1b1d22]"
              href="https://github.com/TON_USERNAME"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}
