---
title: "Mail"
excerpt: "Mise en place d'une boîte mail professionnelle"
coverImage: "/assets/image/pexels-miguel-a-padrinan-1591062.webp"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-miguel-a-padrinan-1591062.webp"
  credit: "Photo by Miguel Á. Padriñán from Pexels"
  link: "https://www.pexels.com/photo/email-blocks-on-gray-surface-1591062/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

# Le besoin

La communication entre l'entreprise, ses partenaires et ses clients est un enjeu essentiel pour faciliter les échanges, la gestion des ressources, des rendez-vous, etc....

Il est donc nécessaire de les réaliser le plus rapidement possible. Pour ce faire le choix des emails est la solution la plus adaptée.

La plupart des entreprises individuelles utilisent des boîtes mails personnelles pour communiquer avec leurs clients. Mais grâce à une demande de plus en plus importante et une diversification de l’entreprise dans des domaines autre que la serrurerie, il a fallu revoir l’utilisation d’une boite mail personnelle et utiliser une boite mail professionnelle.

## Les avantages de la boite mail professionnelle

- Création d’un nombre illimité d’alias en fonction du besoin
- Administration plus complète des droits en fonction des utilisateurs
- Utilisation du domaine de l’entreprise
- Attribution de règles d’envoie et de réception d’email
- Statistiques

# La mise en place

## Faire le choix de la boite mail

Nous pouvions faire le choix d’un service que nous hébergeons nous même sur nos serveur (self-hosting) ou l’utilisation de services en ligne (SAAS).

Le choix de la boite mail à été principalement faite en fonction du prix de celle-ci et du travail nécessaire pour la mettre en place. Comme indiquer dans l’introduction le besoin global est la réduction des coûts de production et l’augmentation de la productivité.

Plusieurs choix sont possibles :

- Google Mail
- Outlook
- Services de messagerie privée

Notre choix c’est porté sur le service Outlook pro qui été proposé en même temps que notre service d’hébergement de site internet et disponible gratuitement pendant 1 an.

## Mise en place

La mise en place est très simple, il suffit de choisir le service Outlook et d’ajouter un utilisateur qui servira d’administrateur.

Ensuite il faut ajouter les autres utilisateurs et leurs assignés des droits (lecture, écriture, réception, émission d’email, etc…).

Pour finir la création d’alias en fonction de la section et du domaine de l’entreprise :

- Contact : Toute informations concernant l’entreprises (demande d’information sur un travail, demande de devis, etc…
- Compta : Envoie et réception de document se rapportant à la comptabilité de l’entreprise
- Donnees : Réception de toutes demande se rapportant au RGPD, informations complémentaires sur la politique de confidentialité, etc…

Modifier les enregistrements du serveur DNS
Pour pouvoir recevoir et envoyer des emails il faut modifier des informations sur le serveur DNS :

- Serveur de mail : doit pointer sur le service de Microsoft Outlook.
- MX : Mail Exchange : Indique le chemin que doit prendre l’email pour arriver sur le serveur
- DMARC : Domain-base Message Authentication Reporting and Corformance : Indique comment le receveur de l’email doit traiter un email envoyer de notre domaine s’il échoue aux contrôles de sécurité
- DKIM : Domain Keys Identified Mail (RFC 4871) : permet de signer les emails pour garantir la véracité des emails.
- SPF : Sender Policy Framework (RFC 4408) : permet de garantir que les emails sont bien envoyés.
  Enfin il faut réaliser des tests avec des outils tel que MXToolbox qui va permettre de faire en sorte que les messages sont bien envoyés et reçus.
