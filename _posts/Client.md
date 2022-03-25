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

L’application doit pouvoir ajouter un client avec des informations et avoir la possibilité d’ajouter un rendez-vous avec la tâche à effectuer.

## La solution
Le projet doit donc comporter une base de données pour stocker les clients et leurs travaux, une interface web pour afficher les données et un système d’authentification pour garantir la confidentialité des données.

## Les choix
- Le Framework choisi : Next JS avec typecript. Ce qui permet la création de page dynamique, de création d’api simplifié, l’utilisation du Framework React qui est conçu "safe by default" (sûr par defaut).
- MongoDB Base de données non relationnelle au format JSON qui permet d’être très bien intégré au Framework Next JS.
- Création d’une API REST pour faire les requêtes en base de données.
