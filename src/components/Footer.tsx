export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-400">
        <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TimeTravel Agency — Projet pédagogique</p>
          <p className="text-zinc-500">IA : Mistral (chat) — Visuels : Projet TimeTravel #1</p>
        </div>
      </div>
    </footer>
  );
}
