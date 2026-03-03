# TimeTravel Agency — Webapp Interactive

Webapp moderne et interactive pour une agence de voyage temporel fictive.  
3 destinations : Paris 1889, Crétacé -65M, Florence 1504.  
Intégration d’un agent conversationnel IA + quiz de recommandation.

URL Webapp :
https://cleanit-timetravel-agency.vercel.app/

Repository GitHub :
https://github.com/Orealyz/cleanit-timetravel-agency

## 👥 Groupe : Cleanit
- REGUEME Martin
- LE GUERNIC Nathan
- MILANESE Alexandre
- WADIN Simon

## 🛠️ Stack Technique
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Chatbot IA : Mistral API (mistral-small-latest)
- Déploiement : Vercel (recommandé) / Netlify

## ✨ Features
- Landing page premium (dark mode, accents dorés)
- Galerie des 3 destinations (cards + page détails)
- Animations (fade-in au scroll, hover)
- Chatbot IA (widget flottant) : conseils, prix, FAQ
- Quiz interactif de recommandation (optionnel 3.2)

## 🤖 Transparence IA
- Génération/assistance code : Bolt
- Chat : Mistral API
- Visuels : images  dans /public/destinations

## 🚀 Installation
```bash
npm install
npm run dev
```

## 🔐 Configuration IA (Mistral)
Créer un fichier `.env` à la racine :
```env
MISTRAL_API_KEY=...
```

## 📦 Images à ajouter
Placez vos fichiers ici :
- public/destinations/paris-1889.jpg
- public/destinations/cretaceous.jpg
- public/destinations/florence-1504.jpg

## 🧪 Tests rapides
- Home : navigation sections (Destinations / Quiz / FAQ)
- Cards destinations : ouverture page détails
- Quiz : recommandation affichée
- Chat : questions prix / conseils / sécurité
- Responsive : mobile & desktop

## 📄 Licence
Projet pédagogique (non commercial).
