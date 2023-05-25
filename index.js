// // Créer un élément <table>
// var table = document.createElement("table");

// // Créer les lignes et les colonnes
// for (var i = 0; i < 10; i++) {
//   // Créer une nouvelle ligne <tr>
//   var row = document.createElement("tr");

//   for (var j = 0; j < 10; j++) {
//     // Créer une nouvelle colonne <td>
//     var cell = document.createElement("td");
//     // Ajouter un texte dans la cellule (optionnel)
//     cell.innerText = "Ligne " + (i + 1) + ", Colonne " + (j + 1);
//     // Ajouter la colonne à la ligne
//     row.appendChild(cell);
//   }

//   // Ajouter la ligne à la table
//   table.appendChild(row);
// }

// // Ajouter la table au document
// document.body.appendChild(table);

// // V.2

// function createGrid(rows, cols) {
//   // Créer un élément <table>
//   var table = document.createElement("table");

//   // Créer les lignes et les colonnes
//   for (var i = 0; i < rows; i++) {
//     // Créer une nouvelle ligne <tr>
//     var row = document.createElement("tr");

//     for (var j = 0; j < cols; j++) {
//       // Créer une nouvelle colonne <td>
//       var cell = document.createElement("td");
//       // Ajouter un texte dans la cellule (optionnel)
//       cell.innerText = "Ligne " + (i + 1) + ", Colonne " + (j + 1);
//       // Ajouter la colonne à la ligne
//       row.appendChild(cell);
//     }

//     // Ajouter la ligne à la table
//     table.appendChild(row);
//   }

//   // Ajouter la table au document
//   document.body.appendChild(table);
// }

// // Appeler la fonction pour créer une grille avec 5 lignes et 8 colonnes
// createGrid(10, 10);

// v.3

// let main = document.querySelector("main")

// // Fonction pour créer la grille
// function createGrid(rows, cols, color) {
//   // Supprimer la grille existante s'il y en a une
//   let existingTable = document.querySelector("table");
//   if (existingTable) {
//     existingTable.remove();
//     console.log('2');
//   }

//   // Créer un élément <table>
//   let table = document.createElement("table");

//   // Créer les lignes et les colonnes
//   for (var i = 0; i < rows; i++) {
//     // Créer une nouvelle ligne <tr>
//     var row = document.createElement("tr");

//     for (var j = 0; j < cols; j++) {
//       // Créer une nouvelle colonne <td>
//       let cell = document.createElement("td");
//       // Appliquer la couleur de remplissage à la cellule
//       cell.style.backgroundColor = color;
//       // Ajouter la colonne à la ligne
//       row.appendChild(cell);
//     }

//     // Ajouter la ligne à la table
//     table.appendChild(row);
//   }

//   // Ajouter la table au document
//   main.appendChild(table);
// }

// // Fonction appelée lors du clic sur le bouton de modification
// function modifyGrid() {
//   var rows = parseInt(document.getElementById("rowsInput").value);
//   var cols = parseInt(document.getElementById("colsInput").value);
//   var color = document.getElementById("colorInput").value;

//   createGrid(rows, cols, color);
// }

// // Créer les éléments du formulaire de modification
// var form = document.createElement("form");

// // Champ de saisie pour le nombre de lignes
// var rowsInput = document.createElement("input");
// rowsInput.setAttribute("type", "number");
// rowsInput.setAttribute("id", "rowsInput");
// rowsInput.setAttribute("value", "5");
// form.appendChild(rowsInput);

// // Champ de saisie pour le nombre de colonnes
// var colsInput = document.createElement("input");
// colsInput.setAttribute("type", "number");
// colsInput.setAttribute("id", "colsInput");
// colsInput.setAttribute("value", "5");
// form.appendChild(colsInput);

// // Sélecteur de couleur
// var colorInput = document.createElement("input");
// colorInput.setAttribute("type", "color");
// colorInput.setAttribute("id", "colorInput");
// colorInput.setAttribute("value", "#ffffff");
// form.appendChild(colorInput);

// // Bouton de modification
// var modifyButton = document.createElement("button");
// modifyButton.innerText = "Modifier";
// modifyButton.addEventListener("click", modifyGrid);
// form.appendChild(modifyButton);

// // Ajouter le formulaire au document
// main.appendChild(form);

// // Créer la grille initiale avec les valeurs par défaut
// createGrid(5, 5, "#ffffff");

// V.4

let main = document.querySelector("main");
let numRows = 10; // Nombre de lignes initial
let numCols = 10; // Nombre de colonnes initial
let selectedCell = null; // Cellule actuellement sélectionnée
let table = document.createElement("table"); // Élément <table> pour la grille

function createGrid() {
  // Effacer la grille existante
  table.innerHTML = "";

  // Créer les lignes et les colonnes
  for (var i = 0; i < numRows; i++) {
    let row = document.createElement("tr"); // Nouvelle ligne <tr>

    for (var j = 0; j < numCols; j++) {
      let cell = document.createElement("td"); // Nouvelle colonne <td>
      cell.innerText = "Ligne " + (i + 1) + ", Colonne " + (j + 1);

      // Ajouter un gestionnaire d'événement pour le clic sur la cellule
      cell.addEventListener("click", function () {
        // Mettre à jour la cellule actuellement sélectionnée
        selectedCell = this;

        // Changer la couleur de fond de la cellule sélectionnée
        let color = inputColor.value;
        selectedCell.style.backgroundColor = color;
      });

      row.appendChild(cell); // Ajouter la colonne à la ligne
    }

    table.appendChild(row); // Ajouter la ligne à la table
  }

  main.appendChild(table); // Ajouter la table au document
}

// Appeler la fonction pour créer la grille initiale
createGrid();

// Inputs pour modifier les lignes et les colonnes
let inputRows = document.createElement("input");
inputRows.type = "number";
inputRows.value = numRows;
let inputCols = document.createElement("input");
inputCols.type = "number";
inputCols.value = numCols;

// Bouton pour modifier les lignes et les colonnes
let btnModify = document.createElement("button");
btnModify.innerText = "Modifier";
btnModify.addEventListener("click", function () {
  numRows = parseInt(inputRows.value);
  numCols = parseInt(inputCols.value);
  createGrid();
});

main.appendChild(inputRows);
main.appendChild(inputCols);
main.appendChild(btnModify);

// Input pour changer la couleur de fond des cellules
let inputColor = document.createElement("input");
inputColor.type = "color";

// Bouton pour changer la couleur de fond des cellules
let btnChangeColor = document.createElement("button");
btnChangeColor.innerText = "Changer couleur";
btnChangeColor.addEventListener("click", function () {
  if (selectedCell) {
    let color = inputColor.value;
    selectedCell.style.backgroundColor = color;
  }
});

main.appendChild(inputColor);
main.appendChild(btnChangeColor);

// Button for erasing the cell color
let btnEraser = document.createElement("button");
btnEraser.innerText = "Effacer couleur";
btnEraser.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.backgroundColor = ""; // Clear the background color
  }
});

main.appendChild(btnEraser);

// Button to fill all cells with the selected color
let btnFillAll = document.createElement("button");
btnFillAll.innerText = "Remplir tout";
btnFillAll.addEventListener("click", function () {
  let color = inputColor.value;
  let cells = document.getElementsByTagName("td");

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = color;
  }
});

main.appendChild(btnFillAll);
