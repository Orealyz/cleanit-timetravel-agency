import type { VercelRequest, VercelResponse } from "@vercel/node";

type Msg = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Enthousiaste sans être trop familier
- Expertise en voyage temporel (fictif mais crédible)

Tu connais parfaitement :
- Paris 1889 (Belle Époque, Tour Eiffel, Exposition Universelle)
- Crétacé -65M (dinosaures, nature préhistorique)
- Florence 1504 (Renaissance, art, Michel-Ange)

Tu peux répondre à :
- Questions sur les destinations
- Informations sur les prix (cohérents)
- Conseils pour choisir une époque
- FAQ agence (sécurité, annulation, préparation)

Règles :
- Reste concis (6-10 lignes max), clair, orienté décision.
- Si l’utilisateur hésite, propose 2 options max et explique.
- Ne promets jamais l’impossible : c’est fictif, mais crédible.
`.trim();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const key = process.env.MISTRAL_API_KEY;
  if (!key) return res.status(500).json({ error: "Missing MISTRAL_API_KEY" });

  const { messages, context } = req.body as { messages: Msg[]; context: any };

  const userMessages = Array.isArray(messages) ? messages : [];
  const contextText = context ? JSON.stringify(context).slice(0, 6000) : "";

  try {
    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        temperature: 0.7,
        messages: [
          { role: "system", content: SYSTEM_PROMPT + "\n\nContexte destinations (JSON):\n" + contextText },
          ...userMessages
        ]
      })
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(500).json({ error: "Mistral API error", detail: t });
    }

    const data = await r.json();
    const answer = data?.choices?.[0]?.message?.content ?? "Je n’ai pas de réponse pour le moment.";
    return res.status(200).json({ answer });
  } catch (e: any) {
    return res.status(500).json({ error: "Server error", detail: String(e?.message ?? e) });
  }
}
