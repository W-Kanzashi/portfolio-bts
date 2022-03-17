---
title: "Migration de service"
excerpt: "L'utilisation de service gratuit et opensource"
coverImage: "/assets/image/pexels-digital-buggu-374559.webp"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-digital-buggu-374559.webp"
  credit: "Photo by Digital Buggu from Pexels"
  link: "https://www.pexels.com/photo/monitor-displaying-computer-application-374559/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

# Pourquoi migrer tout nos services ?

Une réduction des coûts de production est un sujet très important dans le monde de l’entreprise, et une des missions qui m’a été confié étais de les réduire au maximum.
Pour ce faire il a fallu mettre en place une migration complète de tous les outils informatiques.

## Le serveur d’hébergement de site internet

### Le problème

Pour pouvoir être visible sur internet l’entreprise a mis en place un site internet qui est hébergé sur un serveur (Goddady). Le problème est que le coût du serveur est trop important par rapport à son utilité (surdimensionnement du besoin), il a donc fallu trouver une alternative.
Le service d’hébergement proposait l’intégralité des services nécessaires pour pouvoir mettre un site internet en ligne : serveur DNS, mise en place d’un domaine, serveur Apache ou l’on peut déposer des fichiers, intégration de service de messagerie, partage de document, vente et achat de domaine, etc…

### La solution

N’ayant pas trouvé de service gratuit qui propose un service d’hébergement, un serveur DNS et de pouvoir utiliser son nom de domaine, il a été nécessaire de diviser les besoins en deux :

- Cloudflare : Serveur DNS très complet et très facilement utilisable
- Vercel : Hébergement de site internet gratuit (possibilité d’utiliser son nom de domaine mais requiere l’utilisation d’un service externe)

Pour résoudre le problème je me suis tourné vers les services d’hébergement gratuit tel que : Github pages, Vercel, Cloudflare, etc… et j’ai fait le choix de Vercel pour des raisons d’intégration très simple avec les services que Cloudflare propose et l’utilisation de Framework web tel que Next js.

Les coûts liés au serveur étant réduit à zéro le reste des dépenses ne représentais que l’achat des noms de domaines.
