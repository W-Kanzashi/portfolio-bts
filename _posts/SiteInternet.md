---
title: "Site internet"
excerpt: "Développer la présence en ligne de l'organisation par la mise en place d'un site internet"
coverImage: "/assets/image/pexels-olya-kobruseva-5417622.webp"
date: "2020-03-28T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-olya-kobruseva-5417622.webp"
  credit: "Photo by Olya Kobruseva from Pexels"
  link: "https://www.pexels.com/photo/pink-and-gold-stationery-in-composition-5417622/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---


## Développer la présence en ligne de l'organisation
Pour développer la présence en ligne de l'organisation, il faut être sur internet. Le principal moteur de recherche utilisé est Google, il faut donc connaître la manière dont le moteur de recheche classe les pages.  
Google de fournit pas de règles à suivre mais plutôt des recommandations.  
Depuis Mai 2021 Google a publier une mise à jour qui présente la nouvelle méthode de classement des pages.
Cette nouvelle méthode est basé sur l'expérience utilisateur (UX).
![Classement des pages par Google](/assets/siteInternet/eff8c469fa030ffae2dba57ad165fbdaa5933f10-1080x1920.png)   

Elle est découpé en trois parties :
- LCP : Vitesse d'affichage du plus grand élément de la page dans la partie visible du navigateur.
- FID : Vitesse à la quelle l'utilisateur peut intéragir avec la page (clic, scroll, etc.)
- CLS : De combient les éléments visible de la page se déplace

Et des autres paramètres :
- Temps entre les parties
- Site sécurisé : utilisation du protocole TLS avec des certificats et protégé contre les failles de sécurités
- Site responsif : utilisation avec un smartphone, tablette, ordinateur portable, etc.
- Le contenu du site doit correspondre au attentes de l'utilisateur

Plus d'informations sur le site de [Guy Dumais](https://guydumais.digital/blog/ready-for-the-google-page-experience-update/).

## Le référencement
Sujet compliqué et très abstrait qui n'est pas très documenté ou alors de manière à ce que la difficulté de la tâche soit très élevé.  
De manière simple il consiste à fournir au visiteur de la page la réponse exacte à sa demande. Comme par exemple, si le client recherche un sérrurier qui travail les jours férier, le moteur de recherche va fournir une liste de sites internet qui correspond au maximum à la recherche. Mais il ne va pas regarder uniquement si le site possède les mots clé recherché, il va aussi regarder si le site est pertinent, si les utilisateurs du site sont impliqué, etc...  
Il faut donc faire attention à ce que le site contienne des informations pertinentes :
- Titre de la page
- Description
- Des informations de contact
- Des images

Et que l'utilisateur ait envie de rester sur le site internet :
- Une interface très claire et simple
- Un moyens pour les personnes qui utilise les outils de lecture de naviger
- Un site très léger pour les personnes qui ne possède pas de connexion rapide (4G voir plus)
- Prévoir une utilisation sur smartphone car d'après une étude de Google, la plus grande partie des recherches sont faites sur smartphone.

## Le chargement de la page
Le site internet est disponible sur internet mais il y a une dernière chose à vérifier avant de pouvoir valider le site et c'est la vitesse de chargement de celle-çi.  
Comme indiqué plutôt, la vitesse de chargement joue énormément sur l'expérience utilisateur, car les utilisateurs n'aime pas attendre. Il faut donc tester le site avec des outils :
- [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/)
- [GiftOfSpeed](https://www.giftofspeed.com/)
- [WebPageSpeed](https://www.webpagetest.org/)

Ce sont les outils utilisé pour vérifier la vitesse de chargement de la page et les parties à améliorer pour diminuer le temps d'attente.  

Plusieurs choses à vérifier si le site est lent :
- Différer le chargement du javascript et du css non nécessaire et les charger après que le chargement de la page soit terminé
- Supprimer le code qui n'est pas utilisé
- Convertir les images en format webp ou avif (compression améliorée sans perte de qualité) : certain service fournit une conversion à la volée (conversion coté serveur au moment que l'utilisateur en a besoin)
- Fournir les images en fonction de la taille de l'appareil. Une image en 4000x4000 pixels n'est pas nécessaire sur un smartphone

### Next JS
Comme évoqué dans la partie "Les Solutions" le choix de Next JS est celui qui correspond le mieux au besoin.

#### Pourquoi ?
Bien qu'il soit possible d'écrire un site internet avec du HTML, du CSS et du Javascript, il est très difficile de le maitenir, car chaques page contient des parties différentes (contenue de la page) et des parties similaires (Bar de navigation, pied de page, etc...).  
Ensuite pour qu'une page internet soit visible par le visiteur il faut que le serveur envoie cette page qui sera générer ou non.  
![Représentation d'attente d'une page internet](/assets/siteInternet/client_server.png)

#### Static Site Generation
Une solution aporté par React est de pouvoir exporté (générer) le site internet à partir de ce que React (et tout les framework js) appèle [**"Components"**](https://reactjs.org/docs/react-component.html#gatsby-focus-wrapper).
Les components sont des fichiers javascript ou typescript qui contiennent des fonctions. Dans ces fonctions on trouvera du code html, css et js qui permet d'afficher une toute petite partie du site internet comme par exemple un bouton.
![Component le plus simple possible](/assets/siteInternet/component.png)
*PS : Il est aussi possible de ne rien retourner mais cela ne servirais pas à grand chose.*  


#### Next js - Un framework magique
L'utilisation de component est très pratique car on peut écrire une fonction qui affiche une bare de navigation et l'importer dans toutes les pages on l'on veut l'afficher. Next JS permet même de défninir un modèle de page qui sera utilisé par toutes les pages.  
La ou l'utilisation d'un framework js est très avantageux est au niveau de la performance de navigation entre les pages, car le routeur interne permet de ne charger que ce qui est modifier sur la page. Par exemple si vous changer de page et que vous ne modifier que la couleur d'un bouton la page ne sera pas recharger.
Un grand avantage est que le site généré est entièrement piloté par javascript et que si l'utilisateur désactive javascript le site internet sera toujours accessible.  


Après avoir générer le site internet et récupérer les fichier html, css et javascript il faut les mettre sur un serveur d'hébergement pour qu'ils soient accessible sur internet. Dans notre cas nous avons un service d'hébergement chez Vercel. 