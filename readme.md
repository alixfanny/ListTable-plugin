# ListTable

### À propos

ListTable est un plugin React conçu pour améliorer la gestion des tableaux de données dans les applications web. Ce plugin offre une variété de fonctionnalités clés, telles que l'affichage des données sous forme de tableaux, la pagination, la recherche globale dans les tableaux, ainsi que des fonctions de tri. Il est idéal pour les applications nécessitant une manipulation interactive et efficace des données tabulaires.

### Fonctionnalités

+ Affichage de données : Présentation claire et structurée des données sous forme de tableau.
+ Pagination : Gestion facile de la navigation entre les différentes pages de données.
+ Recherche globale : Capacité à effectuer des recherches à travers l'ensemble du tableau.
+ Fonction de tri : Tri des données en fonction de divers critères pour une analyse facilitée.

### Prérequis

Pour utiliser le plugin ListTable, les prérequis suivants sont nécessaires :

+ Une application React.
+ L'utilisation de Redux pour la gestion de l'état.
+ L'intégration de FontAwesome pour les icônes et les éléments graphiques.

### Installation

Assurez-vous que votre projet répond aux prérequis mentionnés ci-dessus.
Installez ListTable en utilisant votre gestionnaire de paquets préféré. Par exemple, avec npm :

``` bash

    npm install oc-listtable

```
Intégrez ListTable dans votre projet React.

``` javascript

    import { ListTable } from 'oc-listtable';

```

### Utilisation

Après l'installation, vous pouvez intégrer ListTable dans vos composants React. Voici un exemple de base pour démarrer :

``` javascript

    import React from 'react';
    import { ListTable } from 'oc-listtable';

    function App() {
    // Vos données et logique ici
    return (
        <ListTable /* vos props ici */ />
    );
    }

    export default App;
```

Le plugin nécessite la définition d'une constante contenant un tableau d'objets pour les en-têtes (headers). Chaque objet doit contenir un titre (title) et une clé (key). pour les cas spéciaux ( dates ) vous pouvez ajouter une clé transformer a votre header qui vous permet de transfomer la valeur avant le trie.

Exemple d'utilisation :

``` javascript
const columnsConfig = [
  {
    title: 'First Name',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    key: 'lastName',
  },
  {
    title: 'Date of Birth',
    key: 'dateOfBirth',
    transformer: (value) => { 
      return value.split("/").reverse().join("");
    }
  }
]
```

Le composant ListTable accepte trois props :

  + headers : Tableau d'objets définissant les colonnes du tableau.
  + items : Data.
  + defaultItemsPerPage (par défaut à 20) : possibilité de chosir (20, 40, 60, 80, 100).

Exemple d'utilisation :

``` javascript

import { ListTable } from 'oc-listtable';

function App() {
  return (
    <ListTable
      headers={headers}
      items={items}
      defaultItemsPerPage={20}
    />
  );
}
```