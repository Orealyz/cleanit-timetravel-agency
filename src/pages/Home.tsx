import Section from "../components/Section";
import DestinationCard from "../components/DestinationCard";
import Quiz from "../components/Quiz";
import { destinations } from "../data/destinations";
import { faq } from "../data/faq";
import { motion } from "framer-motion";

export default function Home(props: { onOpenDestination: (slug: string) => void }) {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 via-transparent to-transparent" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute top-20 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Voyagez dans le temps,
            <span className="text-gold-400"> avec élégance</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 max-w-2xl text-zinc-300"
          >
            TimeTravel Agency est une agence premium : destinations iconiques, protocoles de sécurité,
            expérience immersive, accompagnement IA.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#destinations"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gold-500/20 border border-gold-500/40 hover:bg-gold-500/30"
            >
              Explorer les destinations
            </a>
            <button
              onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
            >
              Trouver mon voyage idéal
            </button>
          </div>

          <p className="mt-6 text-xs text-zinc-400">
            Astuce : cliquez sur la bulle en bas à droite pour parler à notre agent IA.
          </p>
        </div>
      </div>

      <Section id="destinations" title="Nos 3 destinations">
        <div className="grid md:grid-cols-3 gap-4">
          {destinations.map((d) => (
            <DestinationCard key={d.slug} destination={d} onOpen={() => props.onOpenDestination(d.slug)} />
          ))}
        </div>
      </Section>

      <Section id="quiz" title="Quiz — Recommandation personnalisée">
        <Quiz />
      </Section>

      <Section id="faq" title="FAQ">
        <div className="grid md:grid-cols-3 gap-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">{item.q}</p>
              <p className="mt-2 text-sm text-zinc-300">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
