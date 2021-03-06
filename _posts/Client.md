---
title: "Gestion Client"
excerpt: "Application web de gestion des clients"
coverImage: "/assets/image/pexels-olya-kobruseva-5417622.webp"
date: "2021-01-05T05:35:07.322Z"
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
- La base de données : MongoDB est une base de données non relationnelle au format JSON ce qui permet de facilité les échanges d’informations entre le serveur de base de données et l’application. Cette base de données est hébergée chez MongoDB directement car ils proposent un service ne coutant que 0.30 euros/million de requêtes (probablement le service le moins cher), ce qui fait 2,700 requêtes par jours pendant 365 jours
- Création d’une API REST privée pour faire les requêtes en base de données à partir de l’application web

## Le projet
Une copie du projet est disponible à l'adresse suivante : [client.ameung.com](https://client.ameung.com)
Il est aussi possible de télécharger le projet ici [Application Gestion des Clients](https://github.com/W-Kanzashi/gestion-client).

Pour le d'éveloppement du projet, j'ai utilisé la solution gratuite de MongoDB Atlas.
![Page d'accueil](/assets/client/mongodb_free_tier.png)
La solution Mongo Atlas permet au développeur d'utiliser une base de donnée MongoDB sans avoir besoin de l'installer localement et entièremen gratuitement. Il y a différent moyen de s'autentifier :
- Utilisateur et mot de passe
- Certificat 501x
- Microsoft AD
- Kerberos
- etc...

Cette facilité d'utilisation permet de simplifier l'intégration et la sécurité de MongoDB à Next JS.  
Il est même possible de visualiser des statistiques et d'ajouter des règles de sur les collections.

# L'application
La page de connexion s'affiche si l'utilisateur n'est pas authentifié sur le site internet.  
*PS : L'icône exclamation en haut à droite est une alerte d'utilisation de google sso pour le développement (Elle à été mise à jour en production).*
![Authentication page](/assets/client/Login_Client.png)

Utilisateur : test@dev.ameung.com  
Mot de passe : 3OaFSXx41LNmGztEe@h=

Ensuite l'utilisateur est redirigé vers la page d'accueil si l'authentification est faite.
![Home page](/assets/client/Accueil.png)

Il est possible d'ajouter un client avec l'ensemble des informations suivantes.  
Si l'insertion en base de données est réussie, une notification s'affiche avec l'information que le client a été ajouté.
*Il à été décidé que les seules informations nécessaires pour ajouter un clients sont le nom et le prénom du client.*
![Add client info](/assets/client/Add_Client_all.png)

La page d'accueil avec des clients renseigné.
![Home page with client](/assets/client/Homepage.png)

Il est aussi possible de rechercher un client en fonction de son nom, de son prénom et en fonction du nom et prénom.
![Search client](/assets/client/Search_client.png)

Si on clique sur un client, on sera redirigé vers les informations du client.
![Client info](/assets/client/Fiche_client.png)

On peut modifier les informations du client.
![Edit client info](/assets/client/edit_client.png)

Modification de l'entreprise du client.
![Edit client company](/assets/client/edit_client_1.png)

Vérification que les informations du client ont été modifiées.
![See the change](/assets/client/client_edited.png)

Affichage des informations des clients dans la base de données.
![Display the data in the database](/assets/client/database.png)