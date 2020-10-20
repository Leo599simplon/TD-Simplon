/*let leo =
{
    nom : ['leo', 'hutin'],
    age : 31,
    mail : 'pwet@gmail.com',

bonjour: function(){
    alert('bonjour, je suis ' + this.nom[0] + ' j\'ai ' + this.age + ' ans');
}     
}

let Mathilde =
{
    nom : ['Mathilde', 'Pichon'],
    age : 27,
    mail : 'pwet2@gmail.com',

bonjour: function(){
    alert('bonjour, je suis ' + this.nom[0] + ' j\'ai'  + this.age + ' ans');
}     
}


function Utilisateur(n,a,m) {
    this.nom = n;
    this.age = a;
    this.mail = m;

    this.bonjour = function () {
        alert('bonjour, je suis ' + this.nom[0] + ' j\'ai ' + this.age + ' ans');
        
    }
    
}

let leo = new Utilisateur (['leo', 'hutin'], 31, 'pwet@gmail.com');

leo.bonjour();

document.getElementById('p1').innerHTML = 'Nom complet : ' + leo['nom'];
document.getElementById('p2').innerHTML = 'Prénom : ' + leo['nom'][0];
document.getElementById('p3').innerHTML = 'Age : ' + leo['age'];

function Ligne(longueur) {
    this.longueur = longueur;    
}
Ligne.prototype.taille = function () {
    document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur  
};

function Rectangle(longueur, largeur) {
    Ligne.call(this, longueur);
    this.largeur = largeur;
}
Rectangle.prototype = Object.create(Ligne.prototype)
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function()
{
    document.getElementById('p2').innerHTML = 'Aire : ' + this.longueur  * this.largeur
};


function Parallelepipede(longueur, largeur, hauteur)
{
Rectangle.call(this, longueur, largeur);
this.hauteur = hauteur;
}

Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.surface = function()
{
    document.getElementById('p3').innerHTML = 'Surface: ' + this.longueur  * this.largeur * this.hauteur
};

let geo = new Parallelepipede(5, 4, 3);
geo.surface();
geo.aire();
geo.taille(); */

function Personne(prenom, nom, age, genre, interets) {
    this.nom = {
      prenom,
      nom
    };
    this.age = age;
    this.genre = genre;
    this.interets = interets;
    this.bio = function() {
      alert(this.nom.prenom + ' ' + this.nom.nom + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' + this.interets[1] + '.');
    };
    this.salutation = function() {
      alert('Bonjour ! Je m\'appelle ' + this.nom.prenom + '.');
    };
  };

  var personne1 = new Personne('Bob', 'Smith', 32, 'homme', ['musique', 'ski']);



  