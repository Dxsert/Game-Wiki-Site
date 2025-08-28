// src/App.jsx
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import WikiPage from "./pages/WikiPage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage"; // <-- page perso


function dismissOverlay() {
  const o = document.querySelector(".page-transition");
  if (!o) return;
  o.style.animation = "fadeOutOverlay .2s ease forwards";
  setTimeout(() => { try { o.remove(); } catch {} }, 220);
}

function DynamicPage({ sidebarRef }) {
  const { slug } = useParams();
  if (/_Perso$/i.test(slug || "")) {
    return <CharactersPage sidebarRef={sidebarRef} />;
  }
  return <WikiPage />;
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const location = useLocation();
  useEffect(() => { dismissOverlay(); }, [location]);
  useEffect(() => { dismissOverlay(); }, []);

  return (
    <div className="flex h-full flex-col">
      {/* HEADER */}
      <header className="flex h-14 items-center justify-between border-b border-neutral-800 px-3">
        <button
          onClick={() => setOpenSidebar(true)}
          className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 font-semibold lg:hidden"
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
        <h1 className="mx-auto text-xl font-bold sm:text-2xl lg:mx-0">Dxsert Wiki</h1>
        <span className="w-9 lg:w-0" />
      </header>

      {/* LAYOUT: sidebar + contenu */}
      {/* IMPORTANT: min-h-0 pour autoriser le scroll d'un enfant, sinon la grid "bloque" */}
      <div className="grid flex-1 min-h-0" style={{ gridTemplateColumns: "280px 1fr" }}>
        <Sidebar
          index={index}
          setIndex={setIndex}
          isOpen={openSidebar}
          onClose={() => setOpenSidebar(false)}
          sidebarRef={sidebarRef}
        />

        {/* Colonne de droite SCROLLABLE */}
        <div className="min-h-0 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={<Home index={index} setIndex={setIndex} sidebarRef={sidebarRef} />}
            />
            {/* Détail perso : /:game/perso/:id */}
            <Route path="/:game/perso/:id" element={<CharacterDetailPage />} />
            {/* Pages dynamiques (ex: /ZZZ_Perso) */}
            <Route path="/:slug" element={<DynamicPage sidebarRef={sidebarRef} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
