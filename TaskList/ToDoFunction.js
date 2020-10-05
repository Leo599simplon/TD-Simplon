//Test
function Popup() {
    var popwindow = document.getElementById("checkBundle");
    if (popwindow.style.display === "none") {
        popwindow.style.display = "block";
    } else {
        popwindow.style.display = "none";
    }
};

//Création de la tâche

function ShowHideDiv() {
    var nom = prompt("Veuillez entrer votre tâche");
    document.getElementById("rang1").innerText = nom;
    var bteCheckbox = document.getElementById("bteCheckbox");
    bteCheckbox.style.display = "block"; "none";
}


// Couleur des leds
function ledcolor(id, couleur) {
    document.getElementById(id).style.backgroundColor = couleur;
}

function niveauTache() {
    if (document.getElementById("myCheck").checked = true) {
        Ledcolor("led1", "rouge");
    }
    else {
        Ledcolor("led1", "vert");;
    }

}


function newFunction() {
    ledcolor("led1", "rouge");
}

