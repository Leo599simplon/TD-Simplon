let letterList = [];
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
        <li>blabla</li></td>
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

let maxPages = Math.ceil(letterList.length / numberOfItems);

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
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
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
  li.appendChild(span);

  var bouton = document.getElementById("checkbox1");
  var div = document.createElement("DIV");
  div.className = "LED";
  li.appendChild(div);
}


//inserer le nouvel element dans le tableau