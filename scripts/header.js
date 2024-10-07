// Importation du header (cette méthode permet au serveurs incompatibles avec le PHP de changer facilement de header)
let cheminPage = window.location.pathname.split("/");

// Si le site est en version local, alors on recherche le dossier loric-informatique (ne sert donc à rien si le site est sur un serveur)
let estTrouve = false;
let i = 0;
while(i < cheminPage.length && !estTrouve){
    if(cheminPage[i] == "loric-informatique"){
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
header.innerHTML = /*html*/
`
	<a class="titre" href="${emplacementRacine + 'index.html'}">
		<img id="icon" src="${emplacementRacine + 'images/icone.png'}"/>
		<h1>Loric Informatique</h1>
	</a>
    <button id="bouton-menu-nav">
        <div>
            <div id="bar-nav-1"></div>
            <div id="bar-nav-2"></div>
            <div id="bar-nav-3"></div>
        </div>
    </button>
	<nav>
		<ul>
		    <li><a href="${emplacementRacine + 'index.html'}">Accueil</a></li>
            <li><a href="${emplacementRacine + 'aides/aides.html'}">Aides</a></li>
		    <li><a href="${emplacementRacine + 'astuces/astuces.html'}">Astuces</a></li>
		    <li><a href="${emplacementRacine + 'mementos/mementos.html'}">Mémentos</a></li>
		    <li><a href="${emplacementRacine + 'apropos.html'}">À propos</a></li>
		    
		</ul>
	</nav>
`;
//<li><a href="${emplacementRacine + ''}"></a></li>