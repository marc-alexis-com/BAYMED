# BAYMED - Plateforme de services médicaux accessible

BAYMED est une plateforme web de services médicaux en français conçue spécifiquement pour être accessible aux personnes âgées ou peu familières avec la technologie. Ce prototype statique démontre une interface utilisateur simple et intuitive permettant aux utilisateurs de naviguer facilement dans les fonctionnalités essentielles liées à leur santé.

**Version en ligne :** [marc-alexis.fun/baymed/index.html](https://marc-alexis.fun/baymed/index.html)

![Interface BAYMED](https://github.com/user-attachments/assets/356b5050-805c-425e-993f-7873ed646c95)

## Fonctionnalités principales

- **Prise de rendez-vous médicaux** (généralistes, cardiologues, ostéopathes)
- **Gestion de pharmacie** (livraison ou retrait de médicaments)
- **Accès aux documents médicaux** (ordonnances, arrêts de travail)
- **Consultation des informations personnelles** (numéro de sécurité sociale, coordonnées)
- **Options d'accessibilité** (taille de texte, contraste élevé, réduction des animations)

## Technologies utilisées

- **HTML5** - Structure des pages
- **CSS (Tailwind V4)** - Mise en forme et style
- **JavaScript vanilla** - Interactions utilisateur
- **Phosphor Icons** - Iconographie
- **Google Fonts (Poppins)** - Typographie

## Particularités du projet

### Accessibilité

Une attention particulière a été portée à l'accessibilité :
- Interface minimaliste avec des boutons larges
- Design épuré avec des couleurs contrastées
- Options d'accessibilité personnalisables (taille de texte, contraste, animations)
- Navigation simplifiée et intuitive
- Compatibilité avec les lecteurs d'écran

### Responsive Design

L'interface s'adapte parfaitement à différentes tailles d'écran :
- Mobile : Mise en page verticale optimisée
- Tablette : Affichage hybride
- Desktop : Utilisation complète de l'espace disponible

## Structure du projet

```
├── index.html (page de connexion)
├── accueil.html (page d'accueil principale)
├── rendez-vous.html (prise de rendez-vous)
├── pharmacie.html (gestion de pharmacie)
├── documents.html (documents médicaux)
├── aide.html (page d'aide)
├── src/
│   ├── output.css (CSS généré par Tailwind)
│   ├── custom.css (CSS personnalisé)
│   ├── global.js (fonctions JS communes)
│   └── input.css (fichier source Tailwind)
```

## Notes importantes

- Ce projet est un **prototype statique** destiné à la démonstration de l'expérience utilisateur
- Aucune donnée réelle n'est collectée ou traitée (formulaires et interactions simulés)
- Les informations affichées sont fictives et utilisées uniquement à des fins de démonstration
- Il n'y a pas de backend fonctionnel, toutes les interactions sont simulées en JavaScript côté client
