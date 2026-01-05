# Alterra - Site Web

Site web du réseau Alterra, un réseau participatif de collecte de données construit par sa communauté pour le territoire.

**Site en ligne** : [https://alterra.lacyber.fr](https://alterra.lacyber.fr)

## À propos

Alterra est un réseau participatif de collecte de données IoT basé sur LoRaWAN. Ce site web présente le projet, ses valeurs, les différents usages possibles et permet aux personnes intéressées de rejoindre le réseau.

## Structure du projet

```
alterra/
├── lacyberfabrique.github.io/    # Site Jekyll principal
│   ├── _config.yml               # Configuration Jekyll
│   ├── _layouts/                 # Templates de pages
│   ├── _includes/                # Partials réutilisables (header, footer)
│   ├── assets/                   # CSS, JS, images
│   │   ├── css/
│   │   │   └── custom.css        # Styles personnalisés
│   │   ├── js/                   # Scripts JavaScript
│   │   └── images/               # Images du site
│   ├── index.html                # Page d'accueil
│   ├── reseau/                   # Page "Le Réseau"
│   ├── usages/                   # Page "Les Usages"
│   ├── rejoindre/                # Page "Rejoindre"
│   ├── charte/                   # Page "La Charte"
│   ├── contact/                  # Page "Contact"
│   └── credits/                  # Page "Crédits photos"
└── README.md                      # Ce fichier
```

## Quickstart

### Prérequis

- **Ruby** (version 3.1 ou supérieure)
- **Bundler** (gestionnaire de dépendances Ruby)

### Installation

1. **Cloner le repository** (si ce n'est pas déjà fait)
   ```bash
   git clone <url-du-repo>
   cd alterra
   ```

2. **Naviguer dans le dossier du site**
   ```bash
   cd lacyberfabrique.github.io
   ```

3. **Installer les dépendances**
   ```bash
   bundle install
   ```

### Développement local

Pour lancer le site en local et voir les modifications en temps réel :

```bash
cd lacyberfabrique.github.io
bundle exec jekyll serve
```

Le site sera accessible sur [http://localhost:4000](http://localhost:4000)

**Astuce** : Le serveur Jekyll se relance automatiquement quand vous modifiez les fichiers.

## Mettre à jour le contenu

### Modifier une page existante

Les pages principales sont dans `lacyberfabrique.github.io/` :

- **Page d'accueil** : `index.html`
- **Le Réseau** : `reseau/index.html`
- **Les Usages** : `usages/index.html`
- **Rejoindre** : `rejoindre/index.html`
- **La Charte** : `charte/index.html`
- **Contact** : `contact/index.html`

Chaque page utilise le format **Front Matter** de Jekyll en haut du fichier :

```yaml
---
layout: page
description: "Description de la page"
---
```

### Modifier le menu de navigation

Le menu de navigation est défini dans `_config.yml` :

```yaml
navigation:
  - title: Le Réseau
    url: /reseau/
    weight: 1
  - title: Les Usages
    url: /usages/
    weight: 2
  # ...
```

### Modifier les styles CSS

Les styles personnalisés sont dans `assets/css/custom.css`. Ce fichier contient tous les styles du site.

**Convention de nommage** :
- `.reseau-*` : Styles pour la page Réseau
- `.usages-*` : Styles pour la page Usages
- `.contribuer-*` ou `.rejoindre-*` : Styles pour la page Rejoindre
- `.application-cta-*` : Styles pour les boutons d'applications

### Ajouter une nouvelle page

1. Créer un nouveau dossier dans `lacyberfabrique.github.io/` (ex: `nouvelle-page/`)
2. Créer un fichier `index.html` dans ce dossier
3. Utiliser le layout `page` :

```yaml
---
layout: page
description: "Description de la nouvelle page"
---
```

4. Ajouter la page au menu dans `_config.yml` si nécessaire

### Ajouter des images

1. Placer l'image dans `assets/images/`
2. Utiliser le filtre Jekyll `relative_url` pour référencer l'image :

```html
<img src="{{ '/assets/images/mon-image.jpg' | relative_url }}" alt="Description">
```

### Modifier la page d'accueil

La page d'accueil (`index.html`) utilise le layout `index` et contient plusieurs sections :

- **Hero** : Titre et sous-titre (définis dans le Front Matter)
- **Vos avantages** : 4 cartes avec icônes
- **Comment ça marche** : 3 étapes
- **Cas d'usage** : 5 cartes liées aux sections de la page Usages
- **Offres** : 3 formules (Pionnier, Bâtisseur, Explorateur)
- **CTA final** : Appel à l'action

## Personnalisation

### Couleurs principales

Les couleurs du site sont définies dans `assets/css/custom.css` :

- **Vert principal** : `#73b909`
- **Bleu foncé** : `#1E2939`
- **Bleu clair** : `#f6f9ff`

### Polices

Le site utilise les polices **Nunito** et **Poppins** (chargées via Google Fonts).

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** via le repository `lacyberfabrique.github.io`.

### Déploiement automatique

Le site se déploie automatiquement quand vous poussez sur la branche `main` :

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Le déploiement prend généralement quelques minutes.

### Vérifier le déploiement

1. Aller sur GitHub dans le repository
2. Vérifier l'onglet "Actions" pour voir le statut du déploiement
3. Le site sera accessible sur [https://alterra.lacyber.fr](https://alterra.lacyber.fr)

## Technologies utilisées

- **Jekyll** : Générateur de site statique
- **GitHub Pages** : Hébergement
- **HTML/CSS/JavaScript** : Frontend
- **Bootstrap** (via Jekyll) : Framework CSS (partiellement utilisé)

## Ressources utiles

- [Documentation Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/) (utilisé par Jekyll)

## Contribution

Pour contribuer au site :

1. Créer une branche pour vos modifications
2. Faire vos changements
3. Tester en local avec `bundle exec jekyll serve`
4. Créer une Pull Request sur GitHub

## Support

Pour toute question ou problème, contactez l'équipe de **La Cyber Fabrique**.

---

**Dernière mise à jour** : 2025

