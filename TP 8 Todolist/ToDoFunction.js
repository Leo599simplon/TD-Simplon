//Test
function Popup() {
  var popwindow = document.getElementById("checkBundle");
  if (popwindow.style.display === "none") {
    popwindow.style.display = "block";
  } else {
    popwindow.style.display = "none";
  }
};

// Couleur des leds ( test )
function ledcolor(id, couleur) {
  document.getElementById(id).style.backgroundColor = couleur;
}



//

let letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let nombreItems = 5

function showList() {
  let tableList = "";
  for (let i = 0; i < letterList.lenght(); i++) {
    console.log(i);
    if (i < letterList.length) {
      tableList += `
  <ul>
    <li>${letterList[i]}</li>
  </ul>
`
    }
  }
  document.getElementById('myUL').innerHTML = tableList;
  showPageInfo();
}



// creer une variable chiffre et l'incrémenter 

var chiffre = chiffre++

// créer un tableau 

var tableau = []

// stocker la variable "chiffre" dans un tableau

var ajoutTab = tableau.push(chiffre)

// toute les fois ou la longueur du tableau fait +6, ajouter +1 à la variable "page"
var page = 1
for (let i = 0; i <= tableau.length-1; i++)
{
document.getElementById("pageInfo")=page
}
