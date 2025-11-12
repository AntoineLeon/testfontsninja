# Test Technique - Fonts Ninja

Application Next.js 15 (App Router) affichant une liste de polices avec pagination et gestion de thème clair/sombre.

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Routes

- `/` - Page d'accueil avec liste de polices et pagination
- `/font/[id]` - Page de détail d'une police

## Technologies utilisées

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19
- Google Font Inter

## Fonctionnalités

- Liste de polices avec pagination (24 par page)
- Page de détail avec switch Pangram/Alphabet
- Thème clair/sombre avec persistance par cookie
- Rendu côté serveur (SSR)
- Routes API mockées
