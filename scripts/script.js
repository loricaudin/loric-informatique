// Affichage mode clair/sombre
function estEnModeSombre() {
	return globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches;
	/*
	var now = new Date();
	var heure  = now.getHours();
	//heure = 19;
	estEnModeSombre()
	return (heure>18 || heure<7);
	*/
	
}

if(estEnModeSombre()){
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
