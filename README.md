# My_Animes_Library
Projet utilisant Axios pour la récupération de datas d'une API

Challenge Javascript : Bibliothèque de mangas/animations japonaise

Ichiban Mangas permet à l'utilisateur de rechercher et récupérer les informations sur son animé préféré.

L' API nommée Jikan permettant de récupérer les informations d'animés du site MyAnimeList a été utilisée :

Site MyAnimeList => https://myanimelist.net/
Api JIKAN => https://jikan.docs.apiary.io
J'ai utilisé Axios pour faciliter les requêtes AJAX vers cette API.

https://github.com/axios/axios

Fonctionnalités de l'application :


A. Barre de recherche

En tapant dans cette barre, à partir de 3 lettres tapées, cela lancera une recherche d'anime par son nom
Une liste apparaît avec les résultats de recherches. En cliquant sur un des résultats, cela ajoutera une carte dans la liste des animes

J'ai utilisé la référence Search dans l'API
https://jikan.docs.apiary.io/#reference/0/search

Il existe un évènement pour savoir quand la valeur d'un champ texte a changée
https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event


B. Liste de cartes

Nous avons une liste de cartes. Chaque carte représente un anime qui a été choisi depuis la barre de recherche.

On y trouve :

Une image
Son titre
Le score noté sur 10
Le nombre d'épisode
Un bouton d'information est présent et ouvre une fenêtre modale quand vous cliquez dessus.

C. Détail d'un anime

Dans la fenêtre ouverte lorsque l'on a cliqué sur le bouton Info d'une carte, nous pouvons trouver les informations suivantes :

Dans l'entête de la fenêtre :
Le titre
Le lien pour regarder une bande-annonce
Dans le tableau
Sa source
La durée des épisodes
Le genre
Le synopsis

Remarques
Nous devons récupérer les informations détaillées avec la référence Anime dans l'API
https://jikan.docs.apiary.io/#reference/0/anime


