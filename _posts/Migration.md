---
title: "Migration de service"
excerpt: "L'utilisation de service gratuit et opensource"
coverImage: "/assets/image/hunter-harritt-Ype9sdOPdYc-unsplash.webp"
date: "2021-01-01T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/hunter-harritt-Ype9sdOPdYc-unsplash.webp"
  credit: "Photo by Hunter Harritt on Unsplash"
  link: "https://unsplash.com/photos/Ype9sdOPdYc"
---

# Pourquoi migrer tout nos services ?

Une réduction des coûts de production est un sujet très important dans le monde de l’entreprise. Ainsi une des missions qui m’a été confié étais de les réduire au maximum.  
Pour ce faire il a fallu mettre en place une migration partielle voir complète de tous les outils et services informatiques.

## Le serveur d’hébergement de site internet

### Le problème

Pour pouvoir augmenter sa visibilité sur le marché, l’entreprise a mis en place un site internet qui est hébergé sur un serveur (Goddady). Le problème est que le coût du serveur est trop important par rapport à son utilité (surdimensionnement), il a donc fallu trouver une alternative.  

Le service d’hébergement proposait l’intégralité des services nécessaires pour pouvoir mettre un site internet en ligne : serveur DNS, mise en place d’un domaine, serveur Apache ou l’on peut déposer des fichiers, intégration de service de messagerie, partage de document, vente et achat de domaine, etc…

### La solution

Grâce à une explosion de la demande de site internet certaine entreprises mettent en place des services gratuits mais avec des fonctionnalités limitées mais amplement suffisante pour héberger un site internet qui ne demande pas d’accepter des milliers d’utilisateurs.

Les deux services retenus sont :  
- Cloudflare : Serveur DNS très complet et très facilement utilisable avec des fonctionnalité très complète
- Vercel : Hébergement de site internet gratuit (possibilité d’utiliser son nom de domaine mais requière l’utilisation d’un service externe)

Pour résoudre le problème je me suis tourné vers les services d’hébergement gratuit tel que : Github pages, Vercel, Cloudflare, etc… et j’ai fait le choix de Vercel pour des raisons d’intégration très simple avec les services que Cloudflare propose et l’utilisation de Framework web tel que Next js.

Les coûts liés au serveur étant réduit à zéro le reste des dépenses ne représente plus que l’achat et/ou le renouvellement des noms de domaines.   

Bien que cette solution soit extrêmement bénéfique pour l’entreprise il en est moins pour la personne en charge de mettre et de maintenir le système. Des notions de réseaux et de développement est nécessaire.

# Les Solutions évoqué dans le portfolio

## Next JS
Next JS est un Framework qui permet de créer et mettre en place des sites et applications web modernes et performants.  

Il utilise la bibliothèque Open-source [React](https://reactjs.org/) (écrit en javascript et inventé par Jordan Walke) et maintenue par Meta, la communauté et d’autres entreprises partenaire.   

La documentation de [Vercel](https://vercel.com/) propose des tutoriels pour démarrer, des liens vers les sites qui l’utilise et une sandbox (bac à sable) avec des exemples de projets.   
### Avantages
Apporte des solutions à des problèmes complexes tel que l’optimisation des sites internet, l’implémentation de surcouches qui permet de simplifier la vie du développeur : 
-	swr
-	Middleware
-	Génération de page : coté serveur, coté client ou les deux
-	Un routeur intégré
-	Et bien plus…

Des explications seront données dans chaque partie utilisant une des fonctionnalités.  
Le plus grand avantage est qu’il n’est pas nécessaire de connaître le javascript pour débuter.
### Inconvénient
La documentation n'est pas très claire pour les débutants.

## MongoDB

MongoDB est un système de base de données non relationnelle (NoSQL) orienté documents (JSON) qui ne nécessite pas de schéma prédéfini pour les données (opposé au SQL).
Son utilisation est beaucoup plus simplifiée que pour le SQL et elle est très adapté pour les bases de données peu complexe.
La documentation officielle [MongoDB](https://www.mongodb.com/) propose un début d’apprentissage même si elle est peu adaptée pour les débutants (utilisation de javascript avancé).
