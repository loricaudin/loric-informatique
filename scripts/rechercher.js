function rechercher(valeur) {
    let elementsRecherche = document.querySelector(".recherche");

    for(element of elementsRecherche.childNodes) {
        if(element.innerHTML) {
            if(element.innerHTML.includes(valeur)) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        }
    }
}

let barreRecherche = document.querySelector(".barreRecherche");
barreRecherche.addEventListener("change", (e) => rechercher(e.target.value));