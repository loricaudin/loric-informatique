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

let soustitres = document.querySelectorAll(".soustitre");
for(let i = 0; i < soustitres.length; i++){
    ajoutersoustitre(soustitres[i].textContent, soustitres[i].id, soustitres[i].tagName[1] - 1);
}