var votreChoix;
var choixIA;
var count = 0;
var draw = 0;
var scoreUser = 0;
var scoreIA = 0;
var victoireUser = 0;
var meilleurScore = 0;

//Todo : vérifier perte d'affichage victoire/défaite au bout de plusieurs parties + bordures joueur rémanente


//Validation mathRandom
function mathRandomInt(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}
//Demande du nom au lancement de la page
function afficher() {
    var nom = prompt("Veuillez entrer votre pseudo");
    document.getElementById("ChoisirNom").innerText = nom;
}
//Choix de l'arme par l'user
function selectionAr() {
    document.getElementById("Choix1").style.backgroundImage = "url('Images/pierre.jpeg')";

    document.getElementById("Choix1").style.backgroundSize = "contain";
    votreChoix = 1;
    Choixordi();
    if (count < 3) {
        count++;
    }
    else count = 0;
    document.getElementById("nbcompteur").innerText = count;
    comparaison();

}

function selectionAr2() {
    document.getElementById("Choix1").style.backgroundImage = "url('Images/feuille.jpeg')";

    document.getElementById("Choix1").style.backgroundSize = "contain";
    votreChoix = 2;
    Choixordi();
    if (count < 3) {
        count++;
    }
    else count = 0;
    document.getElementById("nbcompteur").innerText = count;
    comparaison();
}

function selectionAr3() {
    document.getElementById("Choix1").style.backgroundImage = "url('Images/ciseaux.png')";

    document.getElementById("Choix1").style.backgroundSize = "contain";
    votreChoix = 3;
    Choixordi();
    if (count < 3) {
        count++;
    }
    else 
    gameOver();
    document.getElementById("nbcompteur").innerText = count;
    comparaison();
}


//Choix de l'IA
function Choixordi() {
    choixIA = mathRandomInt(1, 3);
    if (choixIA == 1) {
        document.getElementById("Choix2").style.backgroundImage = "url('Images/pierre.jpeg')";

        document.getElementById("Choix2").style.backgroundSize = "contain";
    }
    else if (choixIA == 2) {
        document.getElementById("Choix2").style.backgroundImage = "url('Images/feuille.jpeg')";

        document.getElementById("Choix2").style.backgroundSize = "contain";
    }
    else if (choixIA == 3) {
        document.getElementById("Choix2").style.backgroundImage = "url('Images/ciseaux.png')";

        document.getElementById("Choix2").style.backgroundSize = "contain";
    }
}
// Fight !
function comparaison() {

    if (votreChoix == 1 && choixIA == 3 || votreChoix == 2 && choixIA == 1 || votreChoix == 3 && choixIA == 2) {
        scoreUser = scoreUser + 1;
        BorderColor("Choix1", "10px solid green", "Choix2", "10px solid red");
        switch (count) {
            case 1:
                Ledcolor("led1", "green", "led4", "red");

                break;
            case 2:
                Ledcolor("led2", "green", "led5", "red");

                break;
            case 3:
                Ledcolor("led3", "green", "led6", "red");
                Resultat();

                break;

            default:
                break;
        }

    } else if (choixIA == 1 && votreChoix == 3 || choixIA == 2 && votreChoix == 1 || choixIA == 3 && votreChoix == 2) {
        scoreIA = scoreIA + 1;
        BorderColor("Choix2", "10px solid green", "Choix1", "10px solid red");
        switch (count) {
            case 1:
                Ledcolor("led1", "red", "led4", "green");

                break;
            case 2:
                Ledcolor("led2", "red", "led5", "green");

                break;
            case 3:
                Ledcolor("led3", "red", "led6", "green");
                Resultat();

                break;

            default:
                break;
        }

    } else {
        count = count - 1
        BorderColor("Choix1", "2px solid black", "Choix2", "2px solid black");
    }
}

// Led functions
function Ledcolor(id, couleur, idIA, couleurIA) {
    document.getElementById(id).style.backgroundColor = couleur;
    document.getElementById(idIA).style.backgroundColor = couleurIA;
}



//border functions
function BorderColor(id, bordure, idIA, bordureIA) {
    document.getElementById(id).style.border = bordure;
    document.getElementById(idIA).style.border = bordureIA;
}

//gameOver
function gameOver() {
    Ledcolor("led1", "white", "led4", "white");
    Ledcolor("led2", "white", "led5", "white");
    Ledcolor("led3", "white", "led6", "white");
    BorderColor("Choix1", "2px solid black", "Choix2", "2px solid black");
    document.getElementById("fini").style.border = "5px solid white";
    document.getElementById("fini").innerText = "";
    document.getElementById("nbcompteur").innerText = count = 0;
    document.getElementById("Choix1").style.backgroundImage = "";
    document.getElementById("Choix2").style.backgroundImage = "";
    scoreUser = 0;
    scoreIA = 0;
}

//Compteur Score de base
function Resultat() {
    if (scoreUser > scoreIA) {
        document.getElementById("fini").style.border = "5px solid blue";
        document.getElementById("fini").innerText = "Gagné !";
        victoireUser = victoireUser + 1;
        bestScore();
        document.getElementById("NbVictoire").innerText = victoireUser;
    }
    else if (scoreUser < scoreIA) {
        document.getElementById("fini").style.border = "5px solid red";
        document.getElementById("fini").innerText = "Perdu !";
        victoireUser = 0;
        document.getElementById("NbVictoire").innerText = victoireUser;
    }


}

//Meilleur score
function bestScore() {
    if (meilleurScore <= victoireUser) 
    {
        meilleurScore = victoireUser;
        document.getElementById("meilleurScore").innerText = meilleurScore;
    }
}


/*
function delaiVictoire() {
    setTimeout(function () { gameOver(); }, 3000);
}


function rejouer() {
    document.getElementById("NbCompteur").innerText = "Rejouer?";
}*/

function Tableau(nomJoueur,scoreUser)
{
    this.nomJoueur = nomJoueur
    this.scoreUser = scoreUser
    document.getElementById("Scores").innerText = nomJoueur + scoreUser;
}

var newPlayer = this.nomJoueur + ' ' + this.scoreUser

    