import { useMemo, useState } from "react";
import { destinations } from "../data/destinations";

type Answer = "culture" | "aventure" | "elegance";
type Era = "moderne" | "origines" | "renaissance";
type Place = "urbain" | "sauvage" | "art";
type Activity = "monuments" | "faune" | "musees";

export default function Quiz() {
  const [a1, setA1] = useState<Answer | null>(null);
  const [a2, setA2] = useState<Era | null>(null);
  const [a3, setA3] = useState<Place | null>(null);
  const [a4, setA4] = useState<Activity | null>(null);

  const result = useMemo(() => {
    if (!a1 || !a2 || !a3 || !a4) return null;

    const score: Record<string, number> = {
      "paris-1889": 0,
      cretaceous: 0,
      "florence-1504": 0
    };

    if (a1 === "elegance") score["paris-1889"] += 2;
    if (a1 === "aventure") score["cretaceous"] += 2;
    if (a1 === "culture") score["florence-1504"] += 2;

    if (a2 === "moderne") score["paris-1889"] += 2;
    if (a2 === "origines") score["cretaceous"] += 2;
    if (a2 === "renaissance") score["florence-1504"] += 2;

    if (a3 === "urbain") score["paris-1889"] += 1;
    if (a3 === "sauvage") score["cretaceous"] += 1;
    if (a3 === "art") score["florence-1504"] += 1;

    if (a4 === "monuments") score["paris-1889"] += 1;
    if (a4 === "faune") score["cretaceous"] += 1;
    if (a4 === "musees") score["florence-1504"] += 1;

    const bestSlug = Object.entries(score).sort((x, y) => y[1] - x[1])[0][0];
    return destinations.find((d) => d.slug === bestSlug)!;
  }, [a1, a2, a3, a4]);

  const reset = () => {
    setA1(null);
    setA2(null);
    setA3(null);
    setA4(null);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="font-semibold">1) Quel type d’expérience recherchez-vous ?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Option active={a1 === "culture"} onClick={() => setA1("culture")}>
            Culturelle et artistique
          </Option>
          <Option active={a1 === "aventure"} onClick={() => setA1("aventure")}>
            Aventure et nature
          </Option>
          <Option active={a1 === "elegance"} onClick={() => setA1("elegance")}>
            Élégance et raffinement
          </Option>
        </div>

        <p className="mt-6 font-semibold">2) Votre période préférée ?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Option active={a2 === "moderne"} onClick={() => setA2("moderne")}>
            XIXe–XXe siècle
          </Option>
          <Option active={a2 === "origines"} onClick={() => setA2("origines")}>
            Temps anciens
          </Option>
          <Option active={a2 === "renaissance"} onClick={() => setA2("renaissance")}>
            Renaissance
          </Option>
        </div>

        <p className="mt-6 font-semibold">3) Vous préférez :</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Option active={a3 === "urbain"} onClick={() => setA3("urbain")}>
            Effervescence urbaine
          </Option>
          <Option active={a3 === "sauvage"} onClick={() => setA3("sauvage")}>
            Nature sauvage
          </Option>
          <Option active={a3 === "art"} onClick={() => setA3("art")}>
            Art & architecture
          </Option>
        </div>

        <p className="mt-6 font-semibold">4) Votre activité idéale :</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Option active={a4 === "monuments"} onClick={() => setA4("monuments")}>
            Visiter des monuments
          </Option>
          <Option active={a4 === "faune"} onClick={() => setA4("faune")}>
            Observer la faune
          </Option>
          <Option active={a4 === "musees"} onClick={() => setA4("musees")}>
            Explorer des musées
          </Option>
        </div>

        <button
          onClick={reset}
          className="mt-6 text-sm px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
        >
          Réinitialiser
        </button>
      </div>

      <div className="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-5">
        <p className="font-semibold text-gold-300">Votre recommandation</p>
        {!result ? (
          <p className="mt-2 text-zinc-300">
            Réponds aux 4 questions pour obtenir une destination conseillée.
          </p>
        ) : (
          <div className="mt-4">
            <p className="text-xl font-semibold">{result.title}</p>
            <p className="mt-2 text-zinc-200">{result.tagline}</p>
            <p className="mt-3 text-sm text-zinc-300">
              Pourquoi ? Vos réponses correspondent à l’esprit de cette époque (ambiance, activités et rythme).
              Pour affiner (budget, durée, contraintes), demandez un devis via le chatbot.
            </p>
            <div className="mt-4 text-sm text-gold-300">Dès {result.priceFrom.toLocaleString("fr-FR")}€</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Option(props: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={props.onClick}
      className={[
        "text-sm px-3 py-2 rounded-xl border",
        props.active
          ? "border-gold-500/50 bg-gold-500/20 text-gold-200"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      ].join(" ")}
    >
      {props.children}
    </button>
  );
}
