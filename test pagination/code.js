let myUL = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numberOfItems = 12;
let first = 0;
let actualPage = 1
function showList(){
    let tableList = "";
    for(let i = first; i < first + numberOfItems;i++){
      console.log(i);
      if(i<myUL.length){
        tableList += `
       
          <li>${myUL[i]}</li>
        
      `  
      }
    }
    document.getElementById('myUL').innerHTML=tableList;
    showPageInfo();
  }

  showList();

  function firstPage(){
    first = 0
    actualPage = 1;
    showList();
}

let maxPages = Math.ceil(letterList.length / numberOfItems );
 
function lastPage(){
  first = (maxPages * numberOfItems)-numberOfItems;
  actualPage = maxPages;
  showList(); 
}

function showPageInfo(){
  document.getElementById('pageInfo').innerHTML = `
    Page ${actualPage} / ${maxPages}
  `
}





  function nextPage(){
    if(first+numberOfItems<=myUL.length){
    first+=numberOfItems;
    actualPage ++;
    showList();
    }
  }


  function previous(){
    if(first-numberOfItems >= 0){
      first-=numberOfItems
      actualPage --;
      showList();
    }
  }



