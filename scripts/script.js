// Affichage mode clair/sombre

var now = new Date();

var heure  = now.getHours();
//heure = 19;
if(heure>18 || heure<7){
	basculerClairSombre();
};

function basculerClairSombre(){
    let body=document.querySelector("body");
    body.classList.toggle("modeSombre");
}


//Bouton de navigation
let bar = document.getElementById("bouton-menu-nav");
let nav = document.querySelector("nav");

function menu(){
    let resultat = bar.classList.toggle("ouvert");
    if(resultat){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
}
bar.addEventListener("click",menu);
