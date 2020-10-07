
/*************     LISTE   ************/

/* Créer une variable liste, pour récuperer la longueur de la liste on utilise (list.length)*/

var list = ["a", "b", "c"]
console.log(list.length) /*length = longueur de la list*/


/* pour récuperer seulement une des valeurs on utilisera (list[position de la valeur]) dans la liste*/

var list = ["a", "b", "c"]
console.log(list[2])


/*pour ajouter une valeur dans la liste on utilise "push" */

list.push("d")
console.log(list) /*pour voir la liste */

/*Pour changer la valeur d'un élément de la liste par exemple "a"  on utilise cette formule */

list[0] = "f"
console.log(list)  /* Le résultat sera affiché  dans le navigateur (4) ["f", "b", "c", "d"] */



/*****************************************************************************************************/


/*Création d'une variable text*/

var text = ""

/* Pour avoir la position du dernier élément dans une liste on utilise le ( nombre d'élément - 1 )*/


for (i = 0; i <= list.length - 1; i++) {    /* tant que "i" est inférieur ou égale à 2, "i" modifiera la valeur de chaque élément jusqu'a ce que "i" soit supérieur à 2*/
    list[i] = "m"

}
console.log(list)

/*****************************************************************************************************/

var somme = 0
var list2 = [1, 2, 3, 4, 5]    /****a la fin de la boucle la somme soit égale a tout les élémment additioné  */

for (i = 0; i <= list2.length - 1; i++) {

    somme = somme + list2[i]
}

console.log(somme)

/**************************EXERCICE********************************************/

var list3 = ["a", "b", "c", "d"]

var text = ""

for (i = 0; i <= list3.length - 1; i++) {

    text = text + list3[i]
}

console.log(text)

/************************************************ AFFICHER DCBA **************************  */

var list3 = ["a", "b", "c", "d"]

var text = ""

for (i = list.length - 1; i >= 0; i--) {

    text = text + list3[i]
}
console.log(text)

/************************************************* AFFICHER A ET C    1er méthode ************************ */

var list3 = ["a", "b", "c", "d"]

var text = ""

for (i = 0; i <= list3.length - 1; i++) {

    if (i == 0) { text = text + list3[i] }

    if (i == 2) { text = text + list3[i] }
}

console.log(text)

/********************************************** Afficher "a" et "c" dans la console 2ème methode **************************** */

var list3 = ["a", "b", "c", "d"]

var text = ""

for (i = 0; i <= list3.length - 1; i++) {

    if (list[i] == "a") { text = text + list3[i] }

    if (list[i] == "c") { text = text + list3[i] }
}
console.log(text)

/***************************************************** Définir la position de chaque "a"  ***************** */

var list4 = ["a", "b", "c", "a", "d", "e", "a"]

for (i = 0; i <= list4.length - 1; i++) {

    if (list4[i] == "a") {

        console.log(i)
    }
}

/******************************************************** Compter le nombre de "a" dans la liste ************* */

var list4 = ["a", "b", "c", "a", "d", "e", "a"]

var somme = 0

for (i = 0; i <= list4.length - 1; i++) {

    if (list4[i] == "a") { somme = somme + 1 }

}
console.log(somme)


/*****************************************************/

for (i = 0; i <= list.length - 1; i++) { }

/* INSTRUCTION */

/*  "for" est le mot clé pour definir une boucle afin de parcourir la list. 
    "i"   est la position à laquelle cette boucle commence et se termine.
          On désigne "i=0" pour définir le début et 
    "i"<= list.length-1; pour passer sur tout les éléments de la liste. 
    et i++ pour incrémenter */

/************************************************* */

var list5 = ["je", "suis", "maitre", "saikou"]

var text = ""

for (i = 0; i <= list5.length - 1; i++) {

    text = text + " " + list5[i]
}
text = text + "."


console.log(text)

/**************************** AFFICHER DANS L'HTML ***********/

document.getElementById("maitre").innerText = "pwet" /*******  permet de rajouter le texte dans l'ID  ************/

document.getElementById("maitre").innerHTML = "<h1> Saikou est ton maitre.</h1>"         /***** Modifie le contenu ************/


/********************** BUTTON **************************/

var bouton = document.getElementById("push");    /**  nous créeons la variable bouton = document.getElementById("nomdelID") **/

bouton.addEventListener("click", test);         /** Nous utilsons cette formule pour créer un évemenent "click", plus la foncion **/

function test() {

    console.log("OK");
}



/*********La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau. ***********/

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"



// enlever le premier élément de la liste et le positionner à la fin

//tant que "e" n'est pas en premiere place, retirer le premier element et le remplacer a la fin


var test1 = ["a", "b", "c", "a", "d", "e"]

for (let i = 0; i <= test1.length - 1; i++) {
    while (test1[i] != test1.length - 1) 
    
    {
        test1.shift(i) // ici j'ai supprimé tout les éléments du tableau jusqu'à la fin de celui-ci
        
    }
}

console.log(test1)
