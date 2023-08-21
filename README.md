
# Single Page Application + Webpack

## Présentation
Création d'un site qui affiche une liste de jeux vidéos, comportant 2 templates de page et l'utilistation de Webpack.

### Templates
Il existe 2 templates de page :

- PageList
- PageDetail

### PageList
Le template PageList correspond à une liste de jeux affichés. L'utilisateur peut cliquer sur un des jeux pour en afficher son détail.

Sur la page d'accueil, le template PageList est utilisé. Par défaut, il montre les jeux les plus attendus qui sortiront dans l'année suivante. Une barre de recherche est disponible. L'utilisateur peut entrer un ou plusieurs mots clefs afin d'affiner sa recherche.

Durant tous ces processus, une select est disponible. Le journaliste peut trier les jeux afin d'afficher présents sur sa plateforme uniquement ceux dont il doit parler dans son article.

Le nombre maximal de jeux affichés est de 9. Un bouton "Show more" est disponible pour en afficher 9 de plus. 

Les jeux sont affichés sous forme de cards. Par défaut, nous pouvons voir le nom et les plateformes disponibles ainsi qu'une image de présentation. Au hover de la card, on peut voir la date de sortie, l'éditeur, le(s) genre(s) du jeu, ainsi que sa note et le nombre de votes qui apparaissent à la place de l'image.

### PageDetail
Lorsqu'un utilisateur arrive sur le template PageDetail, cela signifie qu'il cherche à avoir des détails sur un jeu. Sur cette page, il pourra avoir ces détails. Si un détail n'existe pas, on ne l'affiche pas. Voici les détails :

- Le nom du jeu
- Une image principale de présentation
- La description du jeu
- La date de sortie

## Maquettes
  https://drive.google.com/drive/folders/139LWfGZqvFWKYAWDZnYfQFDSlh2Vc7pG
