var tableDesMatieres = document.querySelector(".tableDesMatieres");

function ajoutersoustitre(soustitre, id, nbIndentations){
    let p = document.createElement("p");
    let a = document.createElement("a");
    a.setAttribute("href", "#" + id);
    a.textContent = soustitre;

    for(let i = 0; i < nbIndentations; i++){
        p.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    p.appendChild(a);
    tableDesMatieres.append(p);
}

function ajouterNumero(soustitre){
    soustitre.innerHTML = soustitre.id + ". " + soustitre.innerHTML
}

let soustitres = document.querySelectorAll("article h1, article h2, article h3, article h4, article h5");
for(let i = 0; i < soustitres.length; i++){
    ajouterNumero(soustitres[i]);
    ajoutersoustitre(soustitres[i].textContent, soustitres[i].id, soustitres[i].tagName[1] - 1);
}