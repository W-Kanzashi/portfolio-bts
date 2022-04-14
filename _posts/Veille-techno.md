---
title: "Veille Technologique"
excerpt: "Comment je réalise ma veille technologique"
coverImage: "/assets/image/pexels-digital-buggu-374559.webp"
date: "2021-01-07T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-digital-buggu-374559.webp"
  credit: "Photo by Digital Buggu from Pexels"
  link: "https://www.pexels.com/photo/monitor-displaying-computer-application-374559/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

## Pourquoi ?

Le domaine de l’informatique évolue tous les jours et à une vitesse très importante (arrivé de nouvelles technologie, nouveaux langages de programmation, nouvelles normes, etc.…). Il est donc important de faire une veille technologique le plus souvent possible.

## Comment ?

Pour réaliser les différents projets en entreprise j’utilise différents services (GitHub, Cloudflare, Visual Studio Code, Typescript, etc.…).
Tous ces services demandent de connaître le fonctionnement d’internet et le développement web.

## Javascript et Typescript
Un choix difficile à faire car Typescript **"n'est que"** javascript typé. 
### Pourquoi avoir choisi Typescript ?
Tout d’abord j’ai commencé le développement avec deux langages de programmation très fortement typé (C et C++) et j'ai pris l’habitude de devoir travailler avec cette contrainte. 
#### Les Avantages
Typescript offre une aide au développement si l’écriture est correcte :
-	Erreur à la compilation
-	Autocomplétions
-	L’ajout de règles de développement ( `null`
```ts
// Par exemple, ne pas pouvoir instancier une variable à :
null
```

#### Les inconvénients
-	Le développement est plus compliqué (devoir écrire nos propres types, les erreurs de compilations sont plus difficiles à corriger
-	Les tutoriels sont bien plus rares
-	Les dépendances ne sont pas toutes écrites avec Typescript, il faut donc trouver une alternative et les documentations sont parfois très peu claire)

## Un projet personnel
Pour apprendre Typescript, Next JS et le fonctionnement des API REST, j'ai décidé de faire quelque projet personnel.
Les projets sont disponibles aux adresses suivantes : 
- [Site Web](https://app.ameung.com) : Site internet qui regroupe des projets personnels
- [Simulateur](https://maya.ameung.com) : Projet de simulation en ligne réalisé avec WebGL
- [Projet Unicité](https://cinerunner.tk) : Projet réalisé en partenaria avec l'association Unicité

### WebGL
WebGl (Web Graphics Library) est une API Javascript pour afficher des modèles intéractifs et de haute-performance 2D et 3D dans n'importe quel navigateur et matériel informatique compatible sans l'utilisation de modules complémentaires.
WebGL utilise la balise HTML 
```html
<canvas>
```
pour afficher les modèles. Cette conformité permet à l'API d'utiliser les performances matérielles de l'appareil (ordinateur, tablette, smartphone, etc...) de l'utilisateur.

### Markdown parser
Markdown est un langage de balise léger qui permet des documents facilement lisibles, modifiables et convertissable dans d'autre format telque le HTML.
Pour pouvoir convertir du markdown en HTML, il y a deux solutions :
- Utiliser un convertisseur ou l'on écrit du Markdown et il nous retourne du HTML
- Utiliser un parser qui va interpréter le markdown et générer du HTML

Cette deuxième solution est utilisée dans ce projet et dans l'écriture des différentes documentations.

#### Pourquoi ?
La principale raison était d'écrire une API qui permet de générer du HTML à partir d'un fichier écrit avec du Markdown. Cela m'a permis d'apprendre à écrire une API pour la réalisation de cette tâche.