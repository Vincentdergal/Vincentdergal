# Groupomanie | Openclassrooms P7 - Projet Fullstack

Réseau social d'entreprise



### 1- Prérequis

- Node et [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) doivent être installés localement sur votre machine.
- Cloner ou télécharger ce dépôt

### 2- installation du backend 

Depuis le répertoire _server_ :

- Supprimez l'extension .sample du fichier .env et remplissez les champs `DB_USERNAME` et `DB_PASSWORD` avec vos informations de connexion MySQL.
- Exécutez la commande `npm install` pour installer les dépendances du backend.
- Exécutez la commande `npm run db-init` pour initialiser la base de données MySql et la remplir avec des données fictives.
- Exécutez la commande `npm start` pour lancer l'API

À ce stade, le serveur devrait fonctionner sur le port 8080 et les messages suivants devraient s'afficher dans votre terminal :

```bash
Écoute sur le port 8080
...
connecté à la base de données...
```

### 3- Installation du front 

Depuis le répertoire _client_ :

- Exécutez la commande `npm install` pour installer les dépendances frontales.
- Exécutez `npm start` pour lancer le serveur frontal en mode développement.

À ce stade, l'application devrait démarrer automatiquement dans votre navigateur Web.

### 4- Comptes démo (admin & modérateur)

Si vous souhaitez vous connecter en tant qu'administrateur ou modérateur, veuillez utiliser les comptes de démonstration.
Les détails de connexion sont donnés dans le fichier .env dans le répertoire _server_.

### Built with

Backend

- Node JS / Express
- MySQL / Sequelize

Frontend

- React
- Bootstrap / React Boostrap / Styled Components

