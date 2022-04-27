---
title: "Hyperviseur : Proxmox"
excerpt: "Mise en place et gestion d'un hyperviseur avec Proxmox"
coverImage: "/assets/image/pexels-panumas-nikhomkhai-1148820.webp"
date: "2021-01-07T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: ""
ogImage:
  url: "/assets/image/pexels-panumas-nikhomkhai-1148820.webp"
  credit: "Photo by panumas nikhomkhai from Pexels"
  link: "https://www.pexels.com/photo/close-up-photo-of-mining-rig-1148820/"
---

# Proxmox

Proxmox est un hyperviseur open source de type 1 (installé directement sur un serveur). Il permet de gérer des machines virtuelles et des conteneurs.  

## Installation
L'installation de Proxmox est relativement simple.  

### Téléchargement de Proxmox
Télécharger l'ISO de Proxmox : [Proxmox ISO](https://www.proxmox.com/en/proxmox-ve/get-started)  
Utiliser un logiciel comme Rufus pour l'installer : [Rufus](https://rufus.ie/en/)
```txt
Using Rufus
Rufus is a more lightweight alternative, but you need to use the DD mode to make it work. Download Rufus from https://rufus.ie/. Either install it or use the portable version. Select the destination drive and the Proxmox VE ISO file.
```

### Installation de Proxmox
#### Démarrer le serveur avec la clé usb créée précédemment
![](/assets/proxmox/pve-grub-menu.png)

#### Faire le choix de l'installation de Proxmox
Ici le choix est celui de ZFS (RAIDZ1). ZFS est un système de stockage de données basé sur RAID5 avec des améliorations. Le système de fichier ne sera pas expliqué ici mais il existe un très bon article sur le sujet disponible [ici](https://arstechnica.com/information-technology/2020/05/zfs-101-understanding-zfs-storage-and-performance/)
![](/assets/proxmox/pve-select-target-disk.png)

#### Sélectionner le fuseau horaire
![](/assets/proxmox/pve-select-location.png)

#### Mot de passe administrateur
Saisir le mot de passe administrateur de Proxmox et une adresse email pour pouvoir reçevoir des notifications.
![](/assets/proxmox/pve-set-password.png)

#### Réseaux
Saisir la configuration réseaux du serveur.
![](/assets/proxmox/pve-setup-network.png)

#### Vérfier la configuration
![](/assets/proxmox/pve-install-summary.png)

#### Installation
Attendre la fin de l'installation.
![](/assets/proxmox/pve-installation.png)

### Interface de Proxmox
Il est maintenant possible d'accerder à Proxmox en utilisant un navigateur web : [https://ip_serveur:8006/](https://ip_serveur:8006/)
![](/assets/proxmox/Proxmox-VE-7-1-Host-Summary.png)