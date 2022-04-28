---
title: "Veille Technologique"
excerpt: "Comment je réalise ma veille technologique"
coverImage: "/assets/image/pexels-digital-buggu-374559.webp"
date: "2021-01-09T05:35:07.322Z"
author:
  name: Keanui CLARK
  picture: ""
ogImage:
  url: "/assets/image/pexels-digital-buggu-374559.webp"
  credit: "Photo by Digital Buggu from Pexels"
  link: "https://www.pexels.com/photo/monitor-displaying-computer-application-374559/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
---

## Pourquoi ?

Le domaine de l’informatique évolue tous les jours et à une vitesse très importante (arrivé de nouvelles technologie, nouveaux langages de programmation, nouvelles normes, etc.…). Il est donc important de faire une veille technologique le plus souvent possible.

## Comment ?

Pour réaliser les différents projets en entreprise j’utilise différents services (GitHub, Cloudflare, Visual Studio Code, Typescript, etc.…).
Tous ces services demandent de connaître le fonctionnement d’internet et le développement web.

## Javascript et Typescript
Un choix difficile à faire car Typescript **"n'est que"** javascript typé. 
### Pourquoi avoir choisi Typescript ?
Tout d’abord j’ai commencé le développement avec deux langages de programmation très fortement typé (C et C++) et j'ai pris l’habitude de devoir travailler avec cette contrainte. 
#### Les Avantages
Typescript offre une aide au développement si l’écriture est correcte :
-	Erreur à la compilation
-	Autocomplétions
-	L’ajout de règles de développement ( `null`
```ts
// Par exemple, ne pas pouvoir instancier une variable à :
null
```

#### Les inconvénients
-	Le développement est plus compliqué (devoir écrire nos propres types, les erreurs de compilations sont plus difficiles à corriger
-	Les tutoriels sont bien plus rares
-	Les dépendances ne sont pas toutes écrites avec Typescript, il faut donc trouver une alternative et les documentations sont parfois très peu claire)

## Un projet personnel
Pour apprendre Typescript, Next JS et le fonctionnement des API REST, j'ai décidé de faire quelque projet personnel.
Les projets sont disponibles aux adresses suivantes : 
- [Site Web](https://app.ameung.com) : Site internet qui regroupe des projets personnels
- [Simulateur](https://maya.ameung.com) : Projet de simulation en ligne réalisé avec WebGL
- [Projet Unicité](https://cinerunner.tk) : Projet réalisé en partenaria avec l'association Unicité

### WebGL
WebGl (Web Graphics Library) est une API Javascript pour afficher des modèles intéractifs et de haute-performance 2D et 3D dans n'importe quel navigateur et matériel informatique compatible sans l'utilisation de modules complémentaires.
WebGL utilise la balise HTML 
```html
<canvas>
```
pour afficher les modèles. Cette conformité permet à l'API d'utiliser les performances matérielles de l'appareil (ordinateur, tablette, smartphone, etc...) de l'utilisateur.

### Markdown parser
Markdown est un langage de balise léger qui permet des documents facilement lisibles, modifiables et convertissable dans d'autre format telque le HTML.
Pour pouvoir convertir du markdown en HTML, il y a deux solutions :
- Utiliser un convertisseur ou l'on écrit du Markdown et il nous retourne du HTML
- Utiliser un parser qui va interpréter le markdown et générer du HTML

Cette deuxième solution est utilisée dans ce projet et dans l'écriture des différentes documentations.

#### Pourquoi ?
La principale raison était d'écrire une API qui permet de générer du HTML à partir d'un fichier écrit avec du Markdown. Cela m'a permis d'apprendre à écrire une API pour la réalisation de cette tâche.

## Kubernetes
Kubernetes est une plate-forme open-source extensible et portable pour la gestion de charges de travail (workloads) et de services conteneurisés. Il a été créé par Google et le projet a été rendu open-source en 2014.  

Pour mettre en place le cluster Kubernetes j'ai utilisé un virtualiseur de type 1 (Proxmox), mais il est possible d'en utiliser d'autres et même des raspberry.  
Kubernetes est disponible dans plusieurs versions et j'ai choisi d'utiliser RKE ([Rancher Kubernetes Engine](https://rancher.com)) pour le déploiement du cluster. A ce jour RKE2 est disponible mais il est en phase de développement est il n'est pas recommandé de l'utiliser en production.  

Dans un premier temps il faut construire les machines virtuelles qui servirons de node (un node est une machine) pour le cluster.

Configuration minimale :
- 1 Go de RAM
- 1 Ghz de CPU
- 10 Go de disque dur

*Il est possible de créer les machines dans l'interface web de Proxmox mais la ligne de commande permet d'automatiser la création*

```bash
# Création d'un modèle qui sera clonée
qm create 10000 --name rke-template --memory 8192 --sockets 2 --cores 4 --net0 virtio,bridge=vmbr0
# qm : commande proxmox pour gérer les machines virtuelles
# create : créer une machine virtuelle
# 10000 : id de la machine
# --name rke-template : nom de la machine
# --memory 8192 : Allouer 8 Go de RAM à la machine (au moins 2Go)
# --sockets 1 : Choix du nombre de scoket alloué (Généralement 1 socket)
# --cores 4 : Choix du nombre de coeur alloué (1 est largement suffisant mais se sera plus lent)
# --net0 virtio : Choix du type de carte réseau virtuel (virtio est l'émulateur de carte réseau le plus utilisé)
# --bridge=vmbr0 : Choix de la carte réseau de proxmox (proxmox créer par défaut un pont virtuel pour chaques cartes réseaux)

qm set 10000 --agent enabled=1 # Activation de l'agent QEMU (Activer les commandes clavier dans le navigateur : copier/coller, crtr+alt+sup, etc...)

# Téléchargement d'un disque cloudinit qui va permettre de lancer une machine virtuelle sans avoir à l'installer (on peut aussi modifier la configuration du cloudinit). La dernière version de ubuntu est focal
wget https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img

# On importe le disque dans Proxmox
qm importdisk 10000 focal-server-cloudimg-amd64.img local-lvm
# On monte le disque dans la machine virtuelle
qm set 10000 --scsihw virtio-scsi-pci --scsi0 local-lvm:vm-10000-disk-0
# On l'utilise comme disque de démarage
qm set 10000 --boot c --bootdisk scsi0

# On monte le disque cloudinit
qm set 10000 --ide2 local-lvm:cloudinit

# Importer une clé (ou une liste de clé) ssh publique pour pouvoir se connecter aux machines
qm set 10000 --sshkey id_ed25519.txt # Pas obligatoire

# Convertir la machine virtuelle en modèle (template)
qm template 10000
```

Ensuite nous pouvons créer les machines virtuelles à partir du template.  
Pour le cluster j'ai utilisé 4 machines, un serveur et trois `nodes` (machines du cluster). Mais il est possible d'utiliser une seule machine pour le serveur et le node (il ne sera pas possible de faire de la haute disponibilité).

```bash
# Dans Proxmox on peut automatiser la création des machines virtuelles (on peut mettre les commandes suivantes dans un script)
# On clone le template
## Remplacer 200..204 par le nombre de machines à créer
## 200..204 va créer les machines avec un id 200, 201, 202 et 203
for i in {200..204}; do qm clone 10000 $i --full --name rke$i; done

# On attribut une adresse ip au template
for i in {200..204}; do qm set $i --ipconfig0 ip=10.255.255.$i/8,gw=10.0.0.2; done

# On agrandit le disque dur des machines virtuelles (mettre au minimum 10 Go)
for i in {200..204}; do qm resize $i scsi0 100G; done

# Faire démarrer les machines virtuelles au démarrage du serveur (pas forcément nécessaire)
for i in {200..204}; do qm set $i --onboot=1; done

# On démarre le cluster
for i in {200..204}; do qm start $i; done

# Redémarrer le cluster pour s'assurer que le kernel des machines sont à jour
for i in {200..204}; do qm reboot $i; done # Remplacer reboot par reset si reboot ne fonctionne pas
```

Il faut maintenant se connecter à la machine virtuelle pour installer et configurer Kubernetes avec RKE.  

```bash
# On se connecte à la machine virtuelle
ssh kube@10.255.255.200

# Téléchargement du paquet RKE (remplacer la version par la dernière version disponible si nécessaire)
wget https://github.com/rancher/rke/releases/download/v1.3.9/rke_linux-amd64

# Installer le paquet
chmod +x rke_linux-amd64
# Déplacer le paquet dans le répertoire /usr/local/bin pour pouvoir utiliser la commande rke
sudo mv rke_linux-amd64 /usr/local/bin/rke

# Télécharger le manifest RKE 
curl https://gist.githubusercontent.com/neilbags/ba2a07b74f9661a9e5dc18eee632f1c6/raw/3631ab73c7551d750de85aa5ae7a6d160eb42334/gistfile1.txt > cluster.yml

# Il faut ensuite installer Docker engine sur les vm qui vont être utilisées pour le cluster
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# Mettre à jour la liste des paquets
sudo apt-get update
# Installer Docker
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
# Ajouter l'utilisateur `kube` à la liste des utilisateurs qui peuvent utiliser Docker pour éviter d'utiliser sudo
sudo usermod -aG docker kube

# Modifier le fichier cluster.yml pour qu'il corresponde à la configuration du cluster et démarrer RKE
rke up
```

### Gestion du cluster

```bash
# Installer l'outil kubectl pour pouvoir gérer le cluster en ligne de commande
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

mkdir ~/.kube
# Déplacer le fichier de configuration du cluster dans ~/.kube pour que la commande kubectl sache à quel cluster il doit se connecter (il est possible d'en gérer plusieurs en même temps)
cp kube_config_cluster.yml ~/.kube/config

# Vérifier que le cluster fonctionne
kubectl get nodes # Afficher les nodes (machines) du cluster
kubectl get pods --all-namespaces # Afficher les pods (conteneurs) du cluster
```

#### Installation de l'interface Rancher
Il est aussi posible d'administrer un cluster kubernetes avec l'interface Rancher.  
Plusieures solution d'intallation de [Rancher](https://rancher.com/docs/rancher/v2.6/en/installation/) sont disponibles comme docker, dans un cluster, etc....

```bash
# Installation du container rancher avec docker pour installer l'interface Rancher qui va permettre d'administrer le cluster
sudo docker run -d --restart=unless-stopped -p 80:80 -p 4 43:443 --privileged rancher/rancher:latest

# Attendre que le service soit prêt et se connecter à Rancher
https://adresse-ip-de-la-machine-virtuelle
# Suivre les étapes de configurations
```

Il est maintenant possible d'installer des applications telles que Nginx, Apache, Mysql, etc...