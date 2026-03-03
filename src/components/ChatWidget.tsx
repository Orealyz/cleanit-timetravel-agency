import { useMemo, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { destinations } from "../data/destinations";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis l’assistant TimeTravel Agency. Dites-moi ce que vous aimez (art, nature, romance…) et je vous recommande une destination."
    }
  ]);

  const info = useMemo(() => {
    return destinations.map((d) => ({
      title: d.title,
      era: d.era,
      tagline: d.tagline,
      priceFrom: d.priceFrom,
      highlights: d.highlights
    }));
  }, []);

  const boxRef = useRef<HTMLDivElement | null>(null);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: text }],
          context: info
        })
      });

      if (!res.ok) throw new Error("API error");
      const data = (await res.json()) as { answer: string };

      setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
      setTimeout(() => {
        boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
      }, 30);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Désolé, je n’arrive pas à contacter l’IA. Vérifiez la variable MISTRAL_API_KEY sur Vercel."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full p-4 border border-gold-500/40 bg-zinc-950/80 backdrop-blur hover:bg-zinc-900"
          aria-label="Ouvrir le chat"
        >
          <Bot className="text-gold-300" />
        </button>
      ) : (
        <div className="w-[320px] sm:w-[380px] h-[520px] rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur overflow-hidden shadow-xl">
          <div className="p-3 border-b border-white/10 flex items-center justify-between">
            <div>
              <p className="font-semibold">Assistant TimeTravel</p>
              <p className="text-xs text-zinc-400">Conseils • Prix • FAQ</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={boxRef} className="p-3 space-y-3 h-[390px] overflow-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={[
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                  m.role === "assistant"
                    ? "bg-white/5 border border-white/10"
                    : "bg-gold-500/15 border border-gold-500/30 ml-auto"
                ].join(" ")}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="text-xs text-zinc-400">L’assistant réfléchit…</div>}
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="Posez-moi vos questions..."
              className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-gold-500/40"
            />
            <button
              onClick={send}
              className="px-3 py-2 rounded-xl border border-gold-500/30 bg-gold-500/15 hover:bg-gold-500/25"
              aria-label="Envoyer"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
