---
title: "Gestion du Patrimoine Informatique"
excerpt: "Gestion d'un patrimoine informatique avec GLPI"
coverImage: "/assets/image/pexels-karolina-grabowska-5632382.webp"
date: "2021-01-06T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: "/assets/image/pexels-karolina-grabowska-5632382.webp"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
  credit: "Photo by Karolina Grabowska from Pexels"
  link: "https://www.pexels.com/photo/shopping-cart-on-a-macbook-5632382/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

# Gestion du Patrimoine Informatique
## Pourquoi ?
La gestion du patrimoine informatique est un sujet important dans une entreprise. L’utilisation d’un outil de gestion de parc permet d’automatiser l’inventaire d’un parc informatique (imprimantes, ordinateurs, serveurs, téléphones, etc…).
Cet inventaire est nécessaire car il permet d’avoir des informations sur le matériel que l’entreprise possède :
-	Date d’achat
-	Logiciels installés : nom, version, type, etc…
-	Matériels installés : processeur, disque dur, ram, etc…
-	Gestion des factures
Il est aussi possible de gérer le déploiement de logiciels :
-	Installation
-	Mise à jour
-	Suppression
Toutes ces fonctionnalités ne sont pas disponibles nativement, il faut installer des modules complémentaires mais il est généralement assez simple de les installer et les configurer.

## Installation
Toute cette partie à été faite en cours car mon entreprise ne possède que 2 ordinateurs et une imprimante, ce qui fait qu’utiliser un outil de gestion de parc s’avère peu intéressant.

## GLPI
GLPI est outil de gestion de parc informatique open source. Il permet de recenser les appareils et les logiciels informatiques de l’entreprise et grâce à des modules complémentaire il peut automatiser tout le parc informatique.

## Installation
L'installation suivante fonctionne sur Debian 10 et Ubuntu 20.04 (Les autres distributions non pas été testées).  

```bash
# Installation de la base de données MariaDB
apt-get install mariadb-server

# On s’assure du lancement de mariaDb au démarrage du système
systemctl enable mariadb.service

# Création de la Base de donnée (bdd)
mysql -u root

# Création de la bdd GLPI
CREATE DATABASE glpi;

# Création de la bdd OCS
CREATE DATABASE ocsweb;

# Création d’un utilisateur pour la bdd glpi
CREATE USER ‘glpibdd’@’localhost’ IDENTIFIED BY ‘glpibddpass’;
# Il faut normalement faire le choix d'un mot de passe plus complexe

# Affectation des droits pour glpibdd sur la bdd glpi
GRANT ALL PRIVILEGES ON glpi . * TO ‘glpibdd‘@’localhost’;

# Pour OCS-Inventory
CREATE USER ‘ocsbdd‘@’localhost’ IDENTIFIED BY ‘ocsbddpass‘;
GRANT ALL PRIVILEGES ON ocsweb. * TO ‘ocsbdd‘@’localhost’;

# Quittez MariaDB
quit

# Il nous faut maintenant procéder à l’installation de perl
apt-get install perl

# Installation des extensions php
apt-get install php-ldap php-imap php-apcu php-xmlrpc php-cas php-mysqli php-mbstring \
php-curl php-gd php-simplexml php-xml

# On recharge Apache
service apache2 reload # Si il y a une erreur utiliser service apache2 restart

# Se déplacer dans le dossier /tmp
cd /tmp

# Téléchargement de la dernière version de GLPI
# Une nouvelle version à du être publiée récemment mais il y a surrement
# des incommpatibilités avec les dépendances (vérifier sur la documentation officielle)
wget https://github.com/glpi-project/glpi/releases/download/9.4.5/glpi-9.4.5.tgz

#On décompresse l’archive
tar xzvf glpi-9.4.5.tgz

# On copie le fichier vers le répertoire  /usr/share
cp -R /tmp/glpi /usr/share

# On met en place les permissions
chown -R root.www-data /usr/share/glpi
chmod -R 775 /usr/share/glpi

# On crée un lien symbolique entre le répertoire GLPI et la racine d’Apache
ln -s /usr/share/glpi /var/www/html/
```

## Configuration de GLPI


Saisir l'adresse du serveur dans un navagateur et choisir la langue.
![Selection de la langue](/assets/gestionPatrimoine/screenshot_20201214_111419.png)

Accepter la licence.
![Licence](/assets/gestionPatrimoine/screenshot_20201214_113018.png)

Faire le choix entre mettre à jour GLPI ou uniquement l'installer.
*Je n'ai jamais esssayer de le mettre à jour. Il y aura peut-être des problèmes avec les dépendances*
![Choix installation ou mise à jour](/assets/gestionPatrimoine/screenshot_20201214_113037.png)

Vérifier que les modules soit correctement installés. Si il y a des erreurs, il faut vérifier leurs versions.
![Vérification des modules](/assets/gestionPatrimoine/screenshot_20201214_113142.png)

Se connecter à la base de données avec les identifiants créés précédemment.
![Connexion à la base de données](/assets/gestionPatrimoine/screenshot_20201214_114218.png)

Choisir la base de données à utiliser.
![Choix de la base de données à utiliser](/assets/gestionPatrimoine/screenshot_20201214_114245.png)

Attendre que la base de données soit bien initialisée.
![Initialisation de la base de données](/assets/gestionPatrimoine/screenshot_20201214_114303.png)

Choisir de participer aux statistiques ou non selon la préférence de chacun.
![Accepter les statistiques](/assets/gestionPatrimoine/screenshot_20201214_115737.png)

Choisir de continuer ou et/ou de faire une donnation.
![Donnation et aides](/assets/gestionPatrimoine/screenshot_20201214_115806.png)

Noter les informations de connexion à GLPI.  
**Sur un serveur en production il FAUT les changer** 
![Fin de l'installation](/assets/gestionPatrimoine/screenshot_20201214_121302.png)

Se connecter avec les identifiants précédement affiché :
- Utilisateur : glpi
- Mot de passe : glpi
![Connexion à GLPI](/assets/gestionPatrimoine/screenshot_20201214_121324.png)


## Automatiser la récupération des informations
Pour automatiser la récupération des informations des appareils il faut utiliser un module comme OCS Inventory. Le module agent d'OCS Inventory va être installer sur la machine dont on veux récupérer les informations.

## OCS Inventory
OCS Inventory va permettre de récupérer les données des différents terminaux (serveurs, ordinateurs, imprimantes, scanneur, téléphone, etc...) de l’entreprise.

### Installation
```bash
# Installation des dépendances
apt-get install apache2-dev libmariadbclient-dev php-soap
cpan install --force CPAN
cpan install YAML
cpan install Mojolicious::Lite Switch Plack::Handler
# Répondre Yes à la question posée

cpan install XML::Simple Compress::Zlib DBI DBD::mysql \
Apache::DBI Net::IP Archive::Zip XML::Entities

apt install libxml-simple-perl libperl5.28 libdbi-perl libdbd-mysql-perl libapache-dbi-perl \
libnet-ip-perl libsoap-lite-perl libarchive-zip-perl make build-essential

apt install php-pclzip make build-essential libdbd-mysql-perl libnet-ip-perl \
libxml-simple-perl php phpmbstring php-soap php-mysql php-curl php-xml php-zip

cpan install Apache2::SOAP

perl -MCPAN -e 'install Apache2::SOAP'

# Se déplacer dans le répertoire /tmp
cd /tmp

# Télécharger le plugin OCS Inventory (Il y a surrement une version plus récente)
wget github.com/OCSInventory-NG/OCSInventory-ocsreports/releases/download/2.7/OCSNG_UNIX_SERVER_2.7.tar.gz

# Décompresser le dossier
tar xzf OCSNG_UNIX_SERVER_2.7.tar.gz

# Se déplacer dans le dossier précédamment décompressé
cd OCSNG_UNIX_SERVER_2.7

# Exécuter le script de configuration
# Si il a une erreur il faut changer les droit d'exécution 
# du script avec la commande `chmod +x setup.sh`
# Il y aura des questions pendant l'installation
# Il faudras répondre en fonction des besoins mais pour notre
# utilisation nous avons répondu par defaut (touche 'Entrée')
sh setup.sh
```

Il faudrat ensuite modifier la configuration de base de OCS Inventory  
```bash
# Modifier la configuration de base
vim /etc/apache2/conf-available/z-ocsinventory-server.conf

## Le contenu du fichier doit correspondre à ceci

# IP Address of the server
PerlSetEnv OCS_DB_HOST localhost
# Replace 3306 by port where running MySQL server, generally 3306
PerlSetEnv OCS_DB_PORT 3306
# Name of database
PerlSetEnv OCS_DB_NAME ocsweb
PerlSetEnv OCS_DB_LOCAL ocsweb
# User allowed to connect to database
PerlSetEnv OCS_DB_USER ocsbdd
# Password for user
PerlSetVar OCS_DB_PWD ocsbddpass

# Sauvegarder et quiter

vim /etc/apache2/conf-available/zz-ocsinventory-restapi.conf
<Perl>
  $ENV{PLACK_ENV} = ‘production’;
  $ENV{MOJO_HOME} = ‘/usr/local/share/perl/5.24.1’;
  $ENV{MOJO_MODE} = ‘deployment’;
  $ENV{OCS_DB_HOST} = ‘localhost‘;
  $ENV{OCS_DB_PORT} = ‘3306‘;
  $ENV{OCS_DB_LOCAL} = ‘ocsweb‘;
  $ENV{OCS_DB_USER} = ‘ocsbdd‘;
  $ENV{OCS_DB_PWD} = ‘ocsbddpass‘;
</Perl>

# Modifier les droits
chown root.www-data /var/lib/ocsinventory-reports
chmod 755 /var/lib/ocsinventory-reports

# Activer la configuration
a2enconf z-ocsinventory-server
a2enconf ocsinventory-reports
a2enconf zz-ocsinventory-restapi

# Redémarrer Apache
service apache2 restart
```

## Conclusion
Il est donc très simple de mettre en place un outils de gestion de parc informatique avec de simple outils.