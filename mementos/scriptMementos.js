// Liste des mementos avec le lien du fichier et une couleur choisie pour le mode clair et sombre.
/* Ne pas enlever les commentaires avec des // et \\ (utilisé pour la génération automatique de la liste des mémentos) */

let listeMementos = [
// DEBUT_LISTE_MEMENTOS \\
["Python", "python", "python", "#FFDD65", "#CCA000"],
["C", "c", "c", "#65BCFF", "#006BCC"],
["C++", "cpp", "cpp", "#65BCFF", "#006BCC"],
["Java", "java", "java", "#F8AF6C", "#C36108"],
["HTML", "html", "html", "#F5976F", "#B53716"],
["CSS", "css", "css", "#6F97F5", "#1637B5"],
["JavaScript", "js", "js", "#F9E96B", "#C4AD07"],
["TypeScript", "js", "ts", "#82B1E2", "#2465A7"],
["MySQL", "sql", "mysql", "#FFC565", "#CC7E00"],
["Oracle Database (SQL)", "sql", "oracledatabase", "#FF6565", "#CC0000"],
["MongoDB (NoSQL)", "nosql", "mongodb", "#A9D193", "#589636"],
["Angular", "js", "angular", "#FF6587", "#CC0031"],
["Git", "git", "git", "#E98A7B", "#AE321D"],
// FIN_LISTE_MEMENTOS \\
];



// Script

var mementos = document.querySelector(".mementos");

function ajouterMemento(nouveauMemento){
    let memento = document.createElement("div");
    memento.classList.add("memento");
    let lien = document.createElement("a");
    lien.setAttribute("href", nouveauMemento[1] + "/memento_" + nouveauMemento[2] + ".html");
    lien.textContent = nouveauMemento[0];
    let div = document.createElement("div");
    lien.appendChild(div);
    let image = document.createElement("img");
    image.setAttribute("src", nouveauMemento[1] + "/icone_" + nouveauMemento[2] + ".png");
    div.appendChild(image);

    memento.append(lien);
    mementos.append(memento);

    memento.addEventListener('mousedown', function(){
        if (!estEnModeSombre()) {
            lien.style.background = nouveauMemento[3];
        } else {
            lien.style.background = nouveauMemento[4];
        }
        
        setTimeout(function(){lien.style.background = "none"}, 1000);
    });
}

for(let i = 0; i < listeMementos.length; i++){
    ajouterMemento(listeMementos[i]);
}
