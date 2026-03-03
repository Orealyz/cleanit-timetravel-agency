import { motion } from "framer-motion";
import type { Destination } from "../data/destinations";

export default function DestinationCard(props: { destination: Destination; onOpen: () => void }) {
  const d = props.destination;

  return (
    <motion.button
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={props.onOpen}
      className="text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={d.image} alt={d.title} loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold">{d.title}</h3>
          <span className="text-xs text-gold-400 border border-gold-500/30 px-2 py-1 rounded-full">
            Dès {d.priceFrom.toLocaleString("fr-FR")}€
          </span>
        </div>
        <p className="mt-2 text-sm text-zinc-300">{d.tagline}</p>
        <p className="mt-3 text-xs text-zinc-400">{d.era}</p>
      </div>
    </motion.button>
  );
}
