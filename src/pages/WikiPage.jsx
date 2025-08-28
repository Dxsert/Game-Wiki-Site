import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";

export default function WikiPage() {
  const { slug } = useParams(); // ex: "GI_Perso"
  const prefix = slug?.split("_")[0]; // "GI"
  const game = games.find((g) => g.prefix === prefix);
  const sect = game?.sections.find((s) => s.slug === slug);

  const title = sect?.label ?? "Section";
  const gameName = game?.name ?? "Jeu inconnu";
  const cover = game?.img;

  function dismissOverlay() {
    const o = document.querySelector(".page-transition");
    if (!o) return;
    // on la fait disparaître puis on la supprime
    o.style.animation = "fadeOutOverlay .25s ease forwards";
    o.addEventListener("animationend", () => o.remove(), { once: true });
  }

  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto w-[min(1100px,calc(100vw-360px))] p-4">
        {/* Bandeau / cover du jeu */}
        {cover && (
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-black">
            <img
              className="aspect-[21/9] w-full object-cover"
              src={cover}
              alt={gameName}
            />
          </div>
        )}

        {/* Titre + breadcrumb */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm text-neutral-400">
              <Link className="hover:underline" to="/">
                Accueil
              </Link>
              <span className="mx-1">/</span>
              <span>{gameName}</span>
              <span className="mx-1">/</span>
              <span className="text-white">{title}</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold">
              {gameName} — {title}
            </h2>
          </div>
          {/* Bouton retour jeu (revient au carrousel, pas obligatoire) */}
          <Link
            to="/"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 font-semibold hover:bg-neutral-800"
          >
            ← Accueil
          </Link>
        </div>

        {/* Contenu à remplir plus tard : cartes/sections */}
        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-4">
            <h3 className="font-semibold">Bloc #1</h3>
            <p className="mt-1 text-neutral-300">
              Place-holder de contenu (texte, liens, tuiles…).
            </p>
          </article>
          <article className="rounded-xl border border-neutral-800 bg-[#0f0f10] p-4">
            <h3 className="font-semibold">Bloc #2</h3>
            <p className="mt-1 text-neutral-300">
              Ajoute ici ce que tu veux afficher dans cette page.
            </p>
          </article>
        </section>

        {/* Notes / sources */}
        <section className="mt-4 rounded-xl border border-neutral-800 bg-[#0f0f10] p-4">
          <h3 className="font-semibold">Notes</h3>
          <p className="mt-1 text-neutral-300">
            Tout le contenu est libre à compléter. La sidebar à gauche reste
            identique.
          </p>
        </section>
      </div>
    </main>
  );
}
