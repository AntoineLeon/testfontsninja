# Choix Techniques

## Architecture

- **Next.js 15 App Router** : SSR par défaut pour performance et SEO
- **Server Components** pour les pages, **Client Components** uniquement pour l'interactivité
- Split Server/Client sur la page Font Details pour combiner SSR + état local

## Gestion du thème

- **Server Actions** (`getTheme`/`setTheme`) : manipulation sécurisée des cookies côté serveur
- **Context API** : partage de l'état du thème entre composants clients
- **Variables CSS** (`--card-bg`, `--foreground`) : centralisation des couleurs, transitions fluides
- **Classe sur `<html>`** : évite le flash de contenu non stylisé au chargement

## Styling

- **Tailwind CSS** : outil demandé dans le test
- **`fill-current` sur SVG** : adaptation automatique au thème sans dupliquer les images
- **Google Font Inter** via `next/font` : optimisation automatique

## Données

- **Fetch SSR** dans Server Components : données disponibles au premier rendu
- **Routes API Next.js** : structure simple pour servir les JSON mockés
- **`generateMetadata()`** : titres dynamiques générés côté serveur pour le SEO

## Navigation

- **Pagination URL-based** (`?page=X`) : partage de liens, historique navigateur
- **`<Link>` Next.js** : pré-chargement automatique des pages
