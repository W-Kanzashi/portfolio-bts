---
title: "Gestion des sauvegardes"
excerpt: "Mise en place d'un outil de gestion des sauvegardes"
coverImage: "/assets/image/pexels-sergei-starostin-6429123.webp"
date: "2021-01-08T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: ""
ogImage:
  url: "/assets/image/pexels-sergei-starostin-6429123.webp"
  credit: "Photo by Sergei Starostin from Pexels"
  link: "https://www.pexels.com/photo/black-and-silver-hard-disk-drive-6429123/"
---

# Gestion des sauvegardes

La gestion des sauvegardes est le sujet le plus important dans une entreprise au niveau informatique. Il est donc très important de mettre en place une solution en cas de panne (matériel ou logiciel) ou de problème (virus, feu, inondation, etc...).  
Il est à rappeller que les sauvegardes doivent être effectuées régulièrement (en fonction de la crtiticité des données) et sur des support adaptées (raid, zfs, glusterfs, etc...) et surtout pas de clé usb ou disque dur portable.

*C'est aussi quelque chose à mettre en place chez soi ou utiliser une solution cloud pour plus de simplicité.*

## Plusieurs solutions pour gérer les sauvegardes

Il existe beaucoup de solutions pour gérer les sauvegardes comme Veamm, UrBackup, NFS, Samba, etc..., et plus ou moins cher, performantes, facile à utiliser, open source, etc....  
Le plus important est de choisir celui qui correspondra au besoin de l'entreprise.

## Installation de UrBakup
Cette installation à été réalisé sur une machine Ubuntu server 20.04 LTS.

```bash
# Téléchargement du service UrBackup
https://hndl.urbackup.org/Server/2.4.13/urbackup-server_2.4.13_amd64.deb

# Installer le service
sudo dpkg -i urbackup-server_2.4.13_amd64.deb

# Installer les dépendances
sudo apt-get install -f
```

### Choix du dossier de sauvegarde
![](/assets/backup/path.png)

### Interface
On peut accéder à l'interface de gestion des sauvegardes via le lien suivant : `http://ip_server:55414`

![](/assets/backup/interface.png)

On ajoute une nouvelle machine à sauvegarder avec le bouton : `Add new client`.

![](/assets/backup/add_client.png)

On saisit le nom de la sauvegarde ou l’adresse IP du client et on clique sur `Add client`.

![](/assets/backup/add_client1.png)

Une page s'affiche avec les commandes à exécuter sur chaques machines.

![](/assets/backup/command.png)

On exécute la commande suivante sur le client pour ajouter la machine linux au serveur de sauvegarde :

```bash
TF=`mktemp` && wget "http://ip_serveur:55414/x?a=download_client&lang=en&clientid=1&authkey=ZvFRDXBGBX&os=linux" -O $TF && sudo sh $TF; rm -f $TF
```

Saisir le chemin du dossier ou fichier à sauvegarder (ici le dossier tmp) :

```bash
# On choisit le dossier /tmp de la machine cliente à sauvegarder
urbackupclientctl add-backupdir -x -f -d /tmp
```

Attendre que le serveur détecte la machine cliente

![](/assets/backup/display_client.png)
![](/assets/backup/display_client1.png)

Cliquer sur le type de sauvegarde voulu (ici : Full).  
Il existes différents modes de sauvegarde :
- Full : sauvegarde complète de la machine
- Incremental : sauvegarde uniquement des données modifiées depuis la dernière sauvegarde incrémentale
- Differential : sauvegarde uniquement des données modifiées depuis la dernière sauvegarde complète

![](/assets/backup/backup.png)

On peut visualiser l’état de la sauvegarde en directe dans l’onglet `Activities`.

![](/assets/backup/display_backup.png)
La possibilité de pouvoir visualisé l’état de la sauvegarde en cliquant sur `Show log`.

![](/assets/backup/display_backup1.png)

La sauvegarde apparait dans la liste des sauvegardes.

![](/assets/backup/show_backup.png)

Dans l’onglet sauvegarde on visualise toutes les sauvegardes réalisées.

![](/assets/backup/show_backup1.png)

On cliquant sur la sauvegarde on peut voir toutes les sauvegardes faites sur ce client.

![](/assets/backup/show_backup2.png)