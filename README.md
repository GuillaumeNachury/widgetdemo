# widgetdemo
Live preview : http://securilabs.free.fr/ 

!(http://securilabs.free.fr/WTTJDemoMobile.png)
!(http://securilabs.free.fr/WTTJDemo.png)
### Desciption
Le code de ce repo contient la réalisation d'un composant permettant l'affichage d'une grille / mosaïque de miniatures AINSI que son utilisation dans un contexte d'application React + Redux.
Le composant/widget (cf. `/src/component/MozaiGrid`) a été construit comme un composant standlone sans logique interne et nécessitant d'etre piloté depuis l'exterieur. L'idée étant de créer un composant assez gnérique, non couplé, pour etre utilisé dans plusieurs contexts différents et controlé par n'importe quel autre composant.
Ici un wrapper (cf. `/src/component/GridWidget.js`) permet le controle et l'intégration dans un flux `Redux`.

Le paramétrage du layout (nombre de colonnes et nombre de lignes) se fait via l'url au travers de 2 attributs : `cwcols` et `cwrows` . Exemple de d'url d'utilisation : `http://localhost:3000/?cwcols=3&cwrows=2`

A noter que :
 * si un ou les deux parametres sont omis des valeurs par défaut seront utilisées (3 colonnes et 2 lignes )
 * si l'application est utilisée sur un mobile alors des valeurs sont forcées  (1 colonne et 1 ligne ), quels que soient les parametres de l'url.

L'implémentation de `Redux` est standard, le seul point particulier est l'utilisation d'un middleware custom pour la gestion de traitements asynchrones (cf. `/src/middlewares/` )

La source de données de cette application est prévue pour etre __distante__. Elle est configurable via le fichier de constantes (cf. `/src/constants/`). Le format attendu est un simple json contenant un tableau d'objets decrivant chaque miniature (cf. https://github.com/GuillaumeNachury/widgetdemoserver/blob/master/companyData.json ).

Afin gérer l'auto-scroll. C'est à dire son démarrage, son arret (par exemple lors du hover de widget afin d'éviter un scroll pendant l'utilisateur clique une tuile) ou encore sa suspension (par exemple lors d'un clique sur une fleche navigation l'auto scroll est remis à zéro pour eviter les effets indésirables) un systeme générique de plannification de `dispatch` d'actions Redux a été créé (cf. `/src/utils/ActionAutomator.js`).

Quelques HOC utilitaires ont été utilisés pour simplifier la phase de développement (ex. `spy() dans /src/reducers/AppContent` ) ou pour simplifier l'injection d'information (cf. `/src/utils/MobileDetector.js` )
 
Plus de détails concernant la structuration et l'utilisation du composant `MozaiGrid` sont décrits dans le fichier `/src/components/MozaiGrid/index.js` 


### Usage
__Comme évoqué précédemment, une source de données doit etre mise en place. Le serveur utilisé pour le developpement, basé sur nodeJS, est disponible ici. (https://github.com/GuillaumeNachury/widgetdemoserver)__

Usage en mode developpement avec un serveur de données fonctionnant sur __la machine qui executera ce code__ :

Afin de récupérer les différentes dépendances nécessaires au fonctionnement, executer dans le répertoire du projet :
```yarn``` 

Ensuite pour lancer l'execution : 
```yarn start```

Pour réaliser un build final :
```yarn build```


### Dépendances
J'ai essayé de réduire au maximum les dépendances externes mais pour des questions de simplification certaines pourrons facilement etre enlevées à l'avenir. Notamment `react-icons-kit` utilisée ici que pour 3 icons :(



### TODOS
- [x] Create Grid Component
- [x] Progress bar feature
- [x] External scroll control
- [x] Query string to control UI
- [x] Manage cell types
- [x] hover effect on grid cells
- [x] setup Redux
- [x] Load remote data
- [x] Add mobile mod
- [x] Setup style
- [x] Add autoscroll feature
- [x] Clean / comment the code 
- [ ] Create some unit tests
- [ ] Try to find a better name for the grid component :)
