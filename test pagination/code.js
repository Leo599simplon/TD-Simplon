
var n = 100
var letterList =  Array(n).join(".").split("."); // now contains n empty strings.
let numberOfItems = 12;
let first = 0;
let actualPage = 1
function showList() {
  let tableList = "";
  for (let i = first; i < first + numberOfItems; i++) {
    console.log(i);
    if (i < letterList.length) {
      tableList += `
       
        <tr>
        <td>${letterList[i]}
        </td>
      </tr>
        
      `
    }
  }
  document.getElementById('letterList').innerHTML = tableList;
  showPageInfo();
}

showList();

function firstPage() {
  first = 0
  actualPage = 1;
  showList();
}

var maxPages = Math.ceil(letterList.length / numberOfItems);

function lastPage() {
  first = (maxPages * numberOfItems) - numberOfItems;
  actualPage = maxPages;
  showList();
}

function showPageInfo() {
  document.getElementById('pageInfo').innerHTML = `
    Page ${actualPage} / ${maxPages}
  `
}


function nextPage() {
  if (first + numberOfItems <= letterList.length) {
    first += numberOfItems;
    actualPage++;
    showList();
  }
}


function previous() {
  if (first - numberOfItems >= 0) {
    first -= numberOfItems
    actualPage--;
    showList();
  }
}



// créer une nouvelle tâche onclick "ajouter"
function newElement() {
  var td = document.createElement("td");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  td.appendChild(t);
  if (inputValue === '') {
    alert("Veuillez écrire une tâche");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  td.appendChild(span);

  var bouton = document.getElementById("checkbox1");
  var div = document.createElement("DIV");
  div.className = "LED";
  td.appendChild(div);
}


//inserer le nouvel element dans le tableau

function ajouteLigne(tableID) {

  // Récupération d'une référence à la table
  var refTable = document.getElementById(tableID);

  // Insère une ligne dans la table à l'indice de ligne 0
  var nouvelleLigne = refTable.insertRow(0);

  // Insère une cellule dans la ligne à l'indice 0
  var nouvelleCellule = nouvelleLigne.insertCell(0);

  // Ajoute un nœud text avec le contenu de l'input à la cellule
  var inputValue = document.getElementById("monTexte").value; 
  var nouveauTexte = document.createTextNode(inputValue)
  nouvelleCellule.appendChild(nouveauTexte);

  /*variable tableau
  var tableauA = [];
  for (let i = 0; i < tableauA.length+1; i++) {
    tableauA.push(i)
    console.log(i)
  } */

  compteur();
}


var x=0 
var tableauA = [];
var taillePage = 4
function compteur() 
{ 
x = x+1; 
console.log(x);
tableauA.push(x)
console.log(tableauA)


} 
