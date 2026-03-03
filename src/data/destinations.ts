export type Destination = {
  slug: string;
  title: string;
  era: string;
  tagline: string;
  image: string;
  highlights: string[];
  risks: string[];
  bestFor: string[];
  priceFrom: number;
};

export const destinations: Destination[] = [
  {
    slug: "paris-1889",
    title: "Paris 1889",
    era: "Belle Époque — Exposition Universelle",
    tagline: "L’élégance électrique d’un Paris en pleine invention.",
    image: "/destinations/paris-1889.jpg",
    highlights: [
      "Inauguration et panorama de la Tour Eiffel",
      "Salons, cafés-concerts et art nouveau",
      "Expérience VIP : loge et dîner à la mode 1889"
    ],
    risks: [
      "Chocs culturels (étiquette, monnaie, hygiène)",
      "Discrétion requise (pas d’objets modernes visibles)"
    ],
    bestFor: ["art", "architecture", "romance", "histoire moderne"],
    priceFrom: 4900
  },
  {
    slug: "cretaceous",
    title: "Crétacé -65M",
    era: "Nature préhistorique — dinosaures",
    tagline: "Une aventure grandiose… à distance de sécurité.",
    image: "/destinations/cretaceous.jpg",
    highlights: [
      "Safari paléo : observation encadrée (zones sécurisées)",
      "Biodiversité spectaculaire et paysages primitifs",
      "Campement premium avec dôme panoramique"
    ],
    risks: [
      "Danger biologique (faune/flore) : protocole strict",
      "Conditions extrêmes (météo, terrain, accès)"
    ],
    bestFor: ["aventure", "nature", "photographie", "science"],
    priceFrom: 7900
  },
  {
    slug: "florence-1504",
    title: "Florence 1504",
    era: "Renaissance — ateliers et mécènes",
    tagline: "Au cœur de l’art, de l’humanisme et des chefs-d’œuvre.",
    image: "/destinations/florence-1504.jpg",
    highlights: [
      "Ateliers d’artisans : pigments, fresque, sculpture",
      "Visite guidée des lieux majeurs de la Renaissance",
      "Soirée privée “mécène” (expérience immersive)"
    ],
    risks: [
      "Règles sociales strictes (statut, langage, tenue)",
      "Hygiène et médecine d’époque (kit fourni)"
    ],
    bestFor: ["art", "histoire", "architecture", "culture"],
    priceFrom: 5200
  }
];
