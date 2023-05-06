var images = ["assets/image/montagne.jpg", "assets/image/ocean.jpg", "assets/image/volcan.webp"];
var imageElement = document.getElementById("image");
var titleElement = document.getElementById("title");
var paragraphElement = document.getElementById("paragraph");
var inputElement = document.getElementById("input");
var textareaElement = document.getElementById("textarea");

function changerImage(index) {
    if (index >= 0 && index < images.length) {
        var nouvelleImage = images[index];
        imageElement.src = nouvelleImage;
    }
}

inputElement.addEventListener("input", function() {
    titleElement.innerText = inputElement.value;
});

textareaElement.addEventListener("input", function() {
    paragraphElement.innerText = textareaElement.value;
});

//Changer la Police
function changerPolice(police) {
    titleElement.style.fontFamily = police;
    paragraphElement.style.fontFamily = police;
}

//Changer la couleur
function changerCouleur(couleur) {
    titleElement.style.color = couleur;
    paragraphElement.style.color = couleur;
}

//Changer le style
function changerStyle(style) {
    titleElement.style.fontStyle = style;
    paragraphElement.style.fontStyle = style;
}

function printPage() {
    // Ouvrir la page d'impression sans le menu de droite
    window.open('', '_blank', 'toolbar=0,location=0,menubar=0');

    // Imprimer la page courante
    window.print();
  }