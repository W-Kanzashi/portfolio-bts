---
title: "Développer la présence en ligne de l'organisation"
excerpt: "Développer la présence en ligne de l'organisation par la mise en place d'un site internet"
coverImage: "/assets/image/pexels-olya-kobruseva-5417622.webp"
date: "2021-01-04T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-olya-kobruseva-5417622.webp"
  credit: "Photo by Olya Kobruseva from Pexels"
  link: "https://www.pexels.com/photo/pink-and-gold-stationery-in-composition-5417622/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

# Mise en place d'un site internet
Le principal moteur de recherche utilisé est Google, il faut donc connaître la manière dont le moteur de recherche classe les sites internets.  
Google de fournit pas de règles à suivre mais plutôt des recommandations et depuis mai 2021 Google a publié une mise à jour qui présente sa nouvelle méthode de classement des pages.
Cette nouvelle méthode est basée sur l'expérience utilisateur (UX : perception et ressentiment de l'utilisateur qui utilise le service).
![Classement des pages par Google](/assets/siteInternet/eff8c469fa030ffae2dba57ad165fbdaa5933f10-1080x1920.png)   

Elle est découpée en trois parties :
- LCP : Vitesse d'affichage du plus grand élément de la page dans la partie visible du navigateur.
- FID : Vitesse à laquelle l'utilisateur peut interagir avec la page (clic, scroll, etc.)
- CLS : De combien les éléments visibles de la page se déplace au chargement

Et des autres paramètres :
- Temps entre les parties
- Site sécurisé : utilisation du protocole TLS avec des certificats et protégé contre les failles de sécurités
- Site responsif : utilisation avec un smartphone, tablette, ordinateur portable, etc.
- Le contenu du site doit correspondre aux attentes de l'utilisateur

Plus d'informations sur le site de [Guy Dumais](https://guydumais.digital/fr/blog/pret-pour-la-mise-a-jour-experience-de-page-google/).

## Le référencement 
Sujet compliqué et très mal documenté où la réponse officielle est "est-ce que le visiteur à envie de voir votre site internet et resté sur le site".  
De manière simple il consiste à fournir au visiteur de la page la réponse exacte à sa demande. Comme par exemple, si le client recherche un serrurier qui travail les jours férié, le moteur de recherche va fournir une liste de sites internet qui correspond au maximum à la recherche. Mais il ne va pas regarder uniquement si le site possède les mots clé recherché, il va aussi regarder la pertinence du site, si les utilisateurs sont impliqués, etc...  
Il faut donc faire attention à ce que le site contienne des informations pertinentes :
- Titre de la page
- Description
- Des informations de contact
- Des images

Et que l'utilisateur ait envie de rester sur le site internet :
- Une interface très claire et simple
- Un moyen pour les personnes qui utilise les outils de lecture d’écran de naviguer
- Un site très léger pour les personnes qui ne possède pas de connexion rapide (moins de 3G ou 4G très lente)
- Prévoir une utilisation sur smartphone car d'après une étude de Google, la plus grande partie des recherches sont faites sur smartphone ([Google Insight](https://www.thinkwithgoogle.com/intl/fr-fr/insights/)).

## Le chargement de la page
Le site internet est disponible sur internet mais il y a une dernière chose à vérifier avant de pouvoir valider le site et c'est la vitesse de chargement de celle-ci.  
![Représentation d'attente d'une page internet](/assets/siteInternet/client_server.png)  
Comme indiqué plutôt, la vitesse de chargement joue énormément sur l'expérience utilisateur, car les utilisateurs n’aiment pas attendre. Il faut donc tester le site avec des outils :
- [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/)
- [GiftOfSpeed](https://www.giftofspeed.com/)
- [WebPageSpeed](https://www.webpagetest.org/)

Ce sont les outils utilisés pour vérifier la vitesse de chargement de la page et les parties à améliorer pour diminuer le temps d'attente.  

Plusieurs choses à vérifier si le site est lent :
- Différer le chargement du javascript et du css non nécessaire et les charger après que le chargement de la page est terminé
- Supprimer le code qui n'est pas utilisé
- Convertir les images en format webp ou avif (compression améliorée sans perte de qualité) : certain service fournit une conversion à la volée (conversion coté serveur au moment que l'utilisateur en a besoin)
- Fournir les images en fonction de la taille de l'appareil. Une image en 4000x4000 pixels n'est pas nécessaire sur un smartphone
## Next JS
Comme évoqué dans la partie "[Migration](/Migration)" le choix de Next JS est celui qui correspond le mieux au besoin.

### Pourquoi ?
Bien qu'il soit possible d'écrire un site internet avec du HTML, du CSS et du Javascript, il est très difficile de le maintenir, car chaque page contient des parties différentes (contenue de la page) et des parties similaires (Bar de navigation, pied de page, etc…).  
Ensuite pour qu'une page internet soit visible par le visiteur il faut que le serveur envoie cette page qui sera générer ou non.

### Static Site Generation
Une solution apporté par React est de pouvoir exporté (générer) le site internet à partir de ce que React (et tous les Framework javascript) appelle [**"Components"**](https://reactjs.org/docs/react-component.html#gatsby-focus-wrapper).
Les components sont des fichiers javascript ou typescript qui contiennent des fonctions. Dans ces fonctions on trouvera du code html, css et js qui permet d'afficher une toute petite partie du site internet comme un bouton.
![Component le plus simple possible](/assets/siteInternet/component.png)
*PS : Il est aussi possible de ne rien retourner mais cela ne servirais pas à grand chose.*  
L'utilisation de component est très pratique car on peut écrire une fonction qui affiche une barre de navigation et l'importer dans toutes les pages on l'on veut l'afficher. Next JS permet même de définir un modèle de page qui sera utilisé par toutes les pages.  
Là ou l'utilisation d'un Framework js est très avantageux est au niveau de la performance de navigation entre les pages, car le routeur interne permet de ne charger que ce qui est modifié sur la page. Par exemple si vous changé de page et que vous ne modifié que la couleur d'un bouton, la page ne sera pas rechargée.
Après avoir générer le site internet et récupérer les fichier html, css et javascript il faut les mettre sur un serveur d'hébergement pour qu'ils soient accessible sur internet. Dans notre cas nous avons un service d'hébergement chez Vercel. 

### Tailwind css
Pour modifier l'apparence du site internet il faut écrire du css. 
Il existe donc plusieurs possibilités :
- L'utilisation de bibliothèque comme Bootstrap
- Ecrire directement du css avec du css, sass, scss, less, etc...
- Utiliser un framework comme Tailwind css

Chacune des solutions possède des avantages et des inconvénients.

| Nom | Avantages | Inconvénients |
| :---: | :---: | :---: |
| [Bootstrap](https://getbootstrap.com/) | Très facile à utiliser | Fichier css très lourd |
| [CSS brut](https://developer.mozilla.org/en-US/docs/Web/CSS) | Pouvoir tout réaliser | Maintenance assez complexe	et peut être difficile à prendre en main
| [Tailwind](https://tailwindcss.com/) | Simple d'utilisation | Il n'est pas aussi flexible que le css brut |

*Pour avoir plus d'informations se référer à la documentation officielle de chaque sections*

Pour éviter de devoir écrire du code pour que le site internet soit le même sur tous les navigateurs il est beaucoup plus simple d'utiliser un module qui se charge d'écrire le code en fonction des navigateurs.  
Tailwind css se charge donc de toute cette partie à l'aide de Postcss et d'Autoprefixer qui sont des modules Node. Ceci simplifie énormément la partie développement et permet de s'assurer de la compatibilité complète avec les navigateurs.  
Dernier avantage d'utiliser Tailwind css au lieu de Bootstrap est que le code css en ligne n'est que celui dont on a besoin, ce qui permet de réduire la taille des fichiers téléchargé par les visiteurs. Ceci permet aussi d'augmenter le score donné par PageSpeed (Google).

## Sécurité
Bien que React soit bien isolé des failles de sécurité le site internet doit maintenant être sécurisé avec l’utilisation d’entête de sécurité et du CSP (Content Security Policy). Ceci est développer dans une [section a part](/Header-csp) pour plus de clarté.

### Finalisation du site
Finaliser le site internet en vérifiant que l'optimisation, la sécurité du site et l'expérience utilisateur est bien réalisé :
- L'utilisateur n'a pas besoin de charger le pied de page si il ne la voie pas
- Préférer sauvegarde les données reçues par les requêtes en base de données pour ne pas avoir à les recharger à chaque fois
- Préférer le chargement des images en fonction de la taille de l'appareil