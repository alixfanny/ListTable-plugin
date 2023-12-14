# ListTable

### À propos

ListTable est un plugin React conçu pour améliorer la gestion des tableaux de données dans les applications web. Ce plugin offre une variété de fonctionnalités clés, telles que l'affichage des données sous forme de tableaux, la pagination, la recherche globale dans les tableaux, ainsi que des fonctions de tri. Il est idéal pour les applications nécessitant une manipulation interactive et efficace des données tabulaires.

### Fonctionnalités

Affichage de données : Présentation claire et structurée des données sous forme de tableau.
Pagination : Gestion facile de la navigation entre les différentes pages de données.
Recherche globale : Capacité à effectuer des recherches à travers l'ensemble du tableau.
Fonction de tri : Tri des données en fonction de divers critères pour une analyse facilitée.

### Prérequis

Pour utiliser le plugin ListTable, les prérequis suivants sont nécessaires :

    Une application React.
    L'utilisation de Redux pour la gestion de l'état.
    L'intégration de FontAwesome pour les icônes et les éléments graphiques.

### Installation

Assurez-vous que votre projet répond aux prérequis mentionnés ci-dessus.
Installez ListTable en utilisant votre gestionnaire de paquets préféré. Par exemple, avec npm :

``` bash

    npm install listtable-plugin

    Intégrez ListTable dans votre projet React.
```

### Utilisation

Après l'installation, vous pouvez intégrer ListTable dans vos composants React. Voici un exemple de base pour démarrer :

``` javascript

    import React from 'react';
    import ListTable from 'listtable-plugin';

    function App() {
    // Vos données et logique ici
    return (
        <ListTable /* vos props ici */ />
    );
    }

    export default App;
```

Le plugin nécessite la définition d'une constante contenant un tableau d'objets pour les en-têtes (headers). Chaque objet doit contenir un titre (title) et une clé (key).

Le composant ListTable accepte trois props :

    headers : Tableau d'objets définissant les colonnes du tableau.
    items : Data.
    defaultItemsPerPage (par défaut à 20) : Doit correspondre à une des valeurs spécifiées dans itemsPerPageOptions.

Exemple d'utilisation :

javascript

import ListTable from 'listtable-plugin';

const headers = [
  { title: 'Nom', key: 'name' },
  { title: 'Âge', key: 'age' },
  // autres en-têtes...
];

const items = [
  // vos données ici...
];

function App() {
  return (
    <ListTable
      headers={headers}
      items={items}
      defaultItemsPerPage={20}
    />
  );
}