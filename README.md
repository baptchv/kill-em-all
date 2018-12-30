# TP Ingé3

![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)


## What's inside ?

* How it should works
* How it actually works
* Check the code style

## How it should works

### Install

```bash
git clone https://github.com/baptchv/kill-em-all
cd kill-em-all
docker-compose up
```

Voilà comment les choses devraient marcher a terme.

Cependant nous avons rencontré un problème de connection entre les serverless et notre server
principal (*server.js*)

## How it actually works

Une manière ( assez triviale ) de tester notre projet est de se passer des services de Docker en
éffectuant chaque tâche séparément de notre côté.



#### 1
```bash
git clone https://github.com/baptchv/kill-em-all

yarn install

docker pull mongo
docker run -p "27017:27017" mongo
```

#### 2

Dans un premier terminal

```bash
cd ./Serverless
yarn start
```

#### 3

Dans un second terminal

```bash
cd ./dockerApp
yarn start
```

## Code style

Nous avons utilisé le linter XOJS qui nous force à utiliser des contraintes de formatage strictes lors du développement
afin que notre code soit toujours lisible et plus facile à relire.
Vous pouvez directement vérifier XO en utilisant la commande suivant dans un terminal :
```bash
xo
```