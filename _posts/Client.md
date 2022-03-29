---
title: "Gestion Client"
excerpt: "Application web de gestion des clients"
coverImage: "/assets/image/pexels-olya-kobruseva-5417622.webp"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-olya-kobruseva-5417622.webp"
  credit: "Photo by Olya Kobruseva from Pexels"
  link: "https://www.pexels.com/photo/pink-and-gold-stationery-in-composition-5417622/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

## Gestion des clients

Pour gérer efficacement les rendez-vous avec clients (Travaux, état des lieux, dépannages, remplacements, installations, etc…), il existe beaucoup de solutions :
-	Applications internet
-	Application smartphone
-	Calendrier
-	Etc…

Chaque service possède des avantages et des inconvénients et à la suite de recherches les différents services proposés non pas été satisfaisant (prix trop élevé, fonctionnalité ne répondant pas au besoin, etc…).
Nous avons donc décidé de concevoir une application pour réaliser cette tâche.

## Le besoin
-	L’utilisateur doit pouvoir ajouter, modifier et supprimer un client
-	L’utilisateur doit pouvoir ajouter, modifier, supprimer un rendez-vous avec un client
-	L’utilisateur doit pouvoir contacter les clients à partir de l’application
-	L’utilisateur doit se connecter pour pouvoir visualiser les données

## La solution
Le projet doit donc comporter une base de données pour stocker les clients et leurs travaux, une interface web pour afficher les données et un système d’authentification pour garantir la confidentialité des données.

## Les choix
- Le Framework choisi : Next JS avec typecript. Ce qui permet la création de page dynamique, de création d’api simplifié, l’utilisation du Framework React qui est conçu "safe by default" (sûr par défaut) ce qui permet de supprimer toutes les attaques de type XSS
- La base de données : MongoDB  Base de données non relationnelle au format JSON ce qui permet de facilité les échanges d’informations entre le serveur de base de données et l’application. Cette base de données est hébergée chez MongoDB directement car ils proposent un service ne coutant que 0.30 euros/million de requêtes (probablement le service le moins cher), ce qui fait 2,700 requêtes par jours pendant 365 jours
- Création d’une API REST privée pour faire les requêtes en base de données à partir de l’application web

## Le projet
Une copie du projet est disponible à l'adresse suivante : [dev.client.ameung.com](https://dev.client.ameung.com)
Il est aussi possible de télécharger le projet ici [Application Client](https://github.com/W-Kanzashi/Meung-PWA).

Pour le d'éveloppement du projet, j'ai utilisé la solution gratuite de MongoDB Atlas.
![Page d'accueil](/assets/client/mongodb_free_tier.png)

