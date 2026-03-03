import type { Destination as DestinationType } from "../data/destinations";

export default function Destination(props: { destination: DestinationType; onBack: () => void }) {
  const d = props.destination;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <button onClick={props.onBack} className="text-sm text-zinc-300 hover:text-white">
        ← Retour
      </button>

      <div className="mt-5 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="aspect-[16/10]">
            <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{d.title}</h1>
          <p className="mt-2 text-zinc-300">{d.era}</p>
          <p className="mt-4 text-zinc-200">{d.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {d.bestFor.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full border border-gold-500/30 text-gold-300 bg-gold-500/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Points forts</p>
              <ul className="mt-2 text-sm text-zinc-300 list-disc pl-5">
                {d.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Risques & sécurité</p>
              <ul className="mt-2 text-sm text-zinc-300 list-disc pl-5">
                {d.risks.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-gold-500/30 bg-gold-500/10 p-5">
            <p className="font-semibold text-gold-300">
              Prix indicatif : dès {d.priceFrom.toLocaleString("fr-FR")}€
            </p>
            <p className="mt-1 text-sm text-zinc-300">
              Le prix varie selon la durée, le niveau VIP et les contraintes de sécurité.
              Demandez un devis via le chatbot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
