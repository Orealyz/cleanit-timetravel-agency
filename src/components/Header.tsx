export default function Header(props: {
  onNavigate: (to: "home" | "destinations" | "quiz") => void;
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => props.onNavigate("home")}
          className="font-semibold tracking-wide"
        >
          <span className="text-gold-400">Time</span>Travel Agency
        </button>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => props.onNavigate("destinations")}
            className="px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            Destinations
          </button>
          <button
            onClick={() => props.onNavigate("quiz")}
            className="px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            Quiz
          </button>
          <a
            className="px-3 py-1.5 rounded-lg border border-gold-500/40 hover:bg-gold-500/10"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
