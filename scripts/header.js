// Importation du header (cette méthode permet au serveurs incompatibles avec le PHP de changer facilement de header)
let cheminPage = window.location.pathname.split("/");
console.log(cheminPage);

// Si le site est en version local, alors on recherche le dossier loric_informatique (ne sert donc à rien si le site est sur un serveur)
let estTrouve = false;
let i = 0;
while(i < cheminPage.length && !estTrouve){
    if(cheminPage[i] == "loric_informatique"){
        estTrouve = true;
    }
    i++;
}

if(!estTrouve){
    i = 0;
}

niveau = cheminPage.length - i;

let emplacementRacine = '';
for(let j = 1; j < niveau; j++){
    emplacementRacine += '../';
}
let header = document.querySelector("header");
header.innerHTML = ''
+ '	<div class="titre">'
+ '		<img id="icon" src="' + emplacementRacine + 'images/icone.png"/>'
+ '		<h1>Loric Informatique</h1>'
+ '	</div>'
+ '	<nav>'
+ '		<ul>'
+ '		    <li><a href="' + emplacementRacine + 'index.html">Accueil</a></li>'
+ '         <li><a href="' + emplacementRacine + 'aides/aides.html">Aides</a></li>'
+ '		    <li><a href="' + emplacementRacine + 'astuces/astuces.html">Astuces</a></li>'
+ '		    <li><a href="' + emplacementRacine + 'langages/langages.html">Langages</a></li>'
+ '		    <li><a href="' + emplacementRacine + 'apropos.html">À propos de nous</a></li>'
//+ '		    <li><a href="' + emplacementRacine + '"></a></li>'
+ '		</ul>'
+ '	</nav>';
