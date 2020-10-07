
// créer 2 listes et les remplit avec des nombres aléatoires 
// array.from est une méthode qui créé un "objet liste" dont on peut définir la taille avec length
// les parenthèses représente les paramètres ( ici aucun ) "=>" est la version raccourcie de function, et pas besoin de return non plus car la flèche le rend implicite, le *100 représente ici le plafond du chiffre aléatoire donné par math.random ( ici 0 à 99 )
var tableau1 = Array.from({length: 8}, () => Math.floor(Math.random() * 100));
var tableau2 = Array.from({length: 8}, () => Math.floor(Math.random() * 100));

// afficher les nombres aléatoires dans le tableau
function afficher(t){
    chiffres= ""
    for(i=0;i <= t.length -1 ; i++){
        chiffres += "<td>"+ t[i] + "</td>"
    }
    return chiffres
}
//résultat
function total(t1,t2){
    tab = []
    for(i=0;i <= t1.length -1 ; i++){
        tab[i] = t1[i] + t2[i]
    }
    return tab
}

