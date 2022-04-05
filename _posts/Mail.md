---
title: "Mail"
excerpt: "Mise en place d'une boîte mail professionnelle"
coverImage: "/assets/image/pexels-miguel-a-padrinan-1591062.webp"
date: "2021-01-03T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/image/pexels-miguel-a-padrinan-1591062.webp"
  credit: "Photo by Miguel Á. Padriñán from Pexels"
  link: "https://www.pexels.com/photo/email-blocks-on-gray-surface-1591062/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

## Le besoin

La communication entre l'entreprise, ses partenaires et ses clients est un enjeu essentiel pour faciliter les échanges, la gestion des ressources, des rendez-vous, etc....

Il est donc nécessaire de les réaliser le plus rapidement possible. Pour ce faire le choix des emails est la solution la plus adaptée.

La plupart des entreprises individuelles utilisent des boîtes mails personnelles pour communiquer avec leurs clients. Mais grâce à une demande de plus en plus importante et une diversification de l’entreprise dans des domaines autre que la serrurerie, il a fallu revoir l’utilisation d’une boite mail personnelle et utiliser une boite mail professionnelle.

### Les avantages de la boite mail professionnelle

- Création d’un nombre illimité d’alias en fonction du besoin
- Administration plus complète des droits en fonction des utilisateurs
- Utilisation du domaine de l’entreprise
- Attribution de règles d’envoie et de réception d’email
- Statistiques

## La mise en place

### Faire le choix de la boite mail

Nous pouvions faire le choix d’un service que nous hébergeons nous même sur nos serveur (self-hosting) ou l’utilisation de services en ligne (SAAS).

Le choix de la boite mail à été principalement faite en fonction du prix de celle-ci et du travail nécessaire pour la mettre en place. Comme indiquer dans l’introduction le besoin global est la réduction des coûts de production et l’augmentation de la productivité.

Plusieurs choix sont possibles :

- Google Mail
- Outlook
- Services de messagerie privée

Notre choix c’est porté sur le service Outlook pro qui été proposé en même temps que notre service d’hébergement de site internet et disponible gratuitement pendant 1 an.

### Mise en place

La mise en place est très simple, il suffit de choisir le service Outlook et d’ajouter un utilisateur qui servira d’administrateur.

Ensuite il faut ajouter les autres utilisateurs et leurs assignés des droits (lecture, écriture, réception, émission d’email, etc…).

Pour finir la création d’alias en fonction de la section et du domaine de l’entreprise :

- Contact : Toute informations concernant l’entreprises (demande d’information sur un travail, demande de devis, etc…
- Compta : Envoie et réception de document se rapportant à la comptabilité de l’entreprise
- Donnees : Réception de toutes demande se rapportant au RGPD, informations complémentaires sur la politique de confidentialité, etc…

#### Etapes de mise en place
*Pour des raisons de sécurité, les étapes de mise en place çi dessous utilise des captures d'écran qui ne représentes aucunes personnes de l'entreprise*
##### Création d'un groupe pour assigner des règles aux utilisateurs
Pour pouvoir ajouter des alias il faut d'abord ajouter un groupe d'utilisateur avec des règles.
![Ajouter un groupe](/assets/mail/Untitled-26.png)

Ensuite il faut choisir le type du groupe.
Dans notre cas il faut choisir **Distribution** pour pouvoir envoyer et recevoir des emails.
![Choix du type du groupe](/assets/mail/Untitled-27.png)

Donner un nom et une description pour facilité la gestion du groupe.
![Ecrire un nom et une description](/assets/mail/Untitled-28.png)

Choisir le nom de domaine du groupe auquel il va être associé.
![Choix des règles](/assets/mail/Untitled-29.png)

##### Ajouter les utilisateurs au groupe précédement créé
Choisir le groupe dans lequel il faut ajouter les utilisateurs.
![Assigner les utilisateurs au groupe](/assets/mail/Untitled-32.png)

Cliquer sur la section **Membres** et **Gestion des membres**
![Chemin pour modifier/ajouter les utilisateurs](/assets/mail/Untitled-33.png)

Faire le choix des utilisateurs à ajouter au groupe.
![Choix des utilisateurs](/assets/mail/Untitled-34.png)

Vérifier que les utilisateurs sont biens ajoutés au groupe.
![Vérifier que les utilisateurs sont biens ajouté](/assets/mail/Untitled-36.png)

Pour finir il faut patienter un peu (2-3 minutes) avant de pouvoir envoyer et recevoir des email.

:warning: Si au bout de 1h vous ne pouvez toujours pas envoyer ou recevoir d'email il faut supprimer le groupe et recommencer. Je n'ai pas trouver d'autres solutions à ce problème.

#### Modifier les enregistrements du serveur DNS
Pour pouvoir recevoir et envoyer des emails il faut modifier des informations sur le serveur DNS :

- Serveur de mail : doit pointer sur le serveur qui propose le service de Microsoft Outlook
- MX : Mail Exchange : Indique le chemin que doit prendre l’email pour arriver sur le serveur
- DMARC : Domain-base Message Authentication Reporting and Corformance : Indique comment le receveur de l’email doit traiter un email envoyer de notre domaine s’il échoue aux contrôles de sécurité
- DKIM : Domain Keys Identified Mail (RFC 4871) : permet de signer les emails pour garantir la véracité des emails
- SPF : Sender Policy Framework (RFC 4408) : permet de garantir que les emails sont bien envoyés
  Enfin il faut réaliser des tests avec des outils tel que MXToolbox qui va permettre de faire en sorte que les messages sont bien envoyés et reçus
- SRV : Service : permet de spécifier un hôte (domaine/IP) et un port pour les services spécifiques (ici le serveur de mail)

##### Pourquoi spécifier un port pour le serveur de mail ?
Certains protocoles Internet, tels que IMAP, SIP et XMPP, doivent se connecter à un port spécifique en plus de se connecter à un serveur spécifique. Les enregistrements SRV permettent de spécifier un port dans le DNS.

## Crédit 
Les images : https://adamtheautomator.com/exchange-distribution-group/
Informations DNS : https://www.cloudflare.com/fr-fr/learning/dns/dns-records/