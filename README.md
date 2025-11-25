# Portfolio Personnel - Canada Badiane

Portfolio professionnel développé avec React, TypeScript et Tailwind CSS, présentant mes compétences en développement web et mobile et mes projets.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF?logo=vite&logoColor=white)

## Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Contact](#contact)

## Aperçu

Portfolio interactif et responsive présentant :

- Mon parcours et mes compétences en développement web et mobile
- Mes projets avec technologies utilisées et statuts
- Mes compétences techniques avec animations
- Un formulaire de contact fonctionnel
- Une interface moderne avec effets visuels

**Démo en ligne :** https://canadabadiane-portfolio.dev/

## Fonctionnalités

### 🏠 Section Hero

- Animation de particules Canvas interactive
- Effet de machine à écrire pour le titre
- Bouton de téléchargement du CV avec animation shine
- Design dégradé moderne (indigo → purple → blue)

### À propos

- Timeline verticale avec corde stylisée et point lumineux
- Présentation de mon parcours en développement
- Photo de profil avec effet hover rotation
- Design responsive avec colonnes adaptatives

### Technologies

- Grille responsive (2/4/6 colonnes selon la taille d'écran)
- Icônes avec effets hover et animations flottantes
- Badges pour chaque technologie maîtrisée

### Projets

- Cartes de projets avec images, descriptions et technologies
- Badges de statut (Terminé/En cours) avec points lumineux
- Effet hover 3D (rotation + scale + changement de couleur)
- Liens vers les repositories GitHub
- Grille responsive (1/2/3 colonnes)

### Contact

- Formulaire fonctionnel avec Formspree
- Notifications toast élégantes (react-hot-toast)
- Validation automatique et reset du formulaire
- Liens vers GitHub et LinkedIn
- Design avec opacité et effets de focus

### Design & UX

- Menu burger responsive (breakpoint lg: 1024px)
- Navigation smooth scroll
- Animations CSS personnalisées (typewriter, floating, shine)
- Dégradés de couleurs cohérents (fuchsia/purple/indigo)
- Effets hover sur tous les éléments interactifs

## Technologies utilisées

### Frontend

- **React 18.3.1** avec **TypeScript 5.6.2** - Bibliothèque pour interfaces utilisateur avec typage statique
- **Vite 6.0.3** - Build tool ultra-rapide optimisé pour React + TypeScript
- **Tailwind CSS 3.4.17** - Framework CSS utility-first

### Bibliothèques

- **react-hot-toast 2.4.1** - Notifications toast élégantes
- **@vitejs/plugin-react 4.3.4** - Support React pour Vite

### Outils de développement

- **ESLint 9.17.0** - Linter JavaScript/TypeScript
- **PostCSS 8.4.49** - Transformation CSS
- **Autoprefixer 10.4.20** - Préfixes CSS automatiques

### Services externes

- **Formspree** - Gestion des formulaires de contact
- **Canvas API** - Animation des particules

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**

```bash
git clone https://github.com/CanadaBadiane/portfolio.git
cd portfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir dans le navigateur**

```
http://localhost:5173
```

## Scripts disponibles

```bash
# Développement - Lance le serveur avec hot reload
npm run dev

# Build - Compile pour la production
npm run build

# Preview - Prévisualise le build de production
npm run preview

# Lint - Vérifie le code avec ESLint
npm run lint
```

## Structure du projet

```
portfolio/
├── public/
│   ├── CV/
│   │   └── C.V.Professionnel.pdf
│   ├── images/
│   │   ├── icons/          # Icônes des technos et autres
│   │   ├── profil/         # Photo de profil
│   │   └── projects/       # Images des projets
│   └── favicon.ico         # Favicon du site
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation et menu burger
│   │   ├── Hero.tsx           # Section hero avec Canvas
│   │   ├── About.tsx          # À propos et timeline
│   │   ├── Technologies.tsx   # Grille de compétences
│   │   ├── Projects.tsx       # Cartes de projets
│   │   ├── Contact.tsx        # Formulaire de contact
│   │   ├── Footer.tsx         # Pied de page
│   │   └── FloatingIcons.tsx  # Icônes flottantes
│   ├── App.tsx                # Composant principal
│   ├── App.css                # Styles du composant App
│   ├── main.tsx               # Point d'entrée
│   └── index.css              # Styles globaux + animations
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Déploiement

### Vercel

1. **Connecte ton repository GitHub à Vercel**
2. **Configure les paramètres :**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy**

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans Tailwind. Modifie `tailwind.config.js` pour changer le thème.

### Animations

Les animations personnalisées sont dans `src/index.css` :

- `typewriter-delay` - Machine à écrire
- `floating-global` - Icônes flottantes
- `btn-shine` - Effet brillant sur boutons

### Contenu

- **Projets** : Modifie le tableau `projects` dans `src/components/Projects.tsx`
- **Technologies** : Modifie la grille dans `src/components/Technologies.tsx`
- **À propos** : Édite le texte dans `src/components/About.tsx`

## Contact

**Canada Badiane**

- Email : [canada1555@hotmail.com](mailto:canada1555@hotmail.com)
- LinkedIn : [canada-badiane-132b60175](https://www.linkedin.com/in/canada-badiane-132b60175/)
- GitHub : [@CanadaBadiane](https://github.com/CanadaBadiane)
