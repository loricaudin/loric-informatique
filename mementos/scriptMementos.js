// Liste des mementos avec le lien du fichier et une couleur choisie pour le mode clair et sombre.
let listeMementos = [
    ["Python", "python", "python", "rgba(255, 214, 66, .5)", "rgba(226, 178, 0, .5)"],
    ["HTML", "html", "html", "rgba(241, 101, 41, .5)", "rgba(228, 77, 38, .5)"],
    ["CSS", "css", "css", "rgba(41, 101, 241, .5)", "rgba(38, 77, 228, .5)"],
    ["JavaScript", "js", "js", "rgba(247, 223, 30, .5)", "rgba(233, 206, 9, .5)"],
    ["TypeScript", "js", "ts", "rgba(45, 121, 199, .5)", "rgba(36, 100, 164, .5)"],
    //["PHP", "php", "php", "rgba(122, 134, 184, .5)", ""],
    ["MySQL", "sql", "mysql", "rgba(228, 142, 0, .5)", "rgba(204, 126, 0, .5)"],
    ["Oracle Database (SQL)", "sql", "oracledatabase", "rgba(255, 0, 0, .5)", "rgba(200, 0, 0, .5)"],
    //["SQL Server", "sql", "sqlserver", "rgba(, , , .5)", "rgba(, , , .5)"],
    //["SQLite", "sql", "sqlite", "rgba(55, 181, 237, .5)", "rgba(15, 128, 204, .5)"],
    ["MongoDB (NoSQL)", "nosql", "mongodb", "rgba(108, 172, 72, .5)", "rgba(89, 150, 54, .5)"],
    ["Neo4J (NoSQL)", "nosql", "neo4j", "rgba(1, 139, 255, .5)", "rgba(0, 117, 214, .5)"],
    ["C", "c", "c", "rgba(0, 89, 157, .5)", "rgba(0, 68, 129, .5)"],
    ["C++", "cpp", "cpp", "rgba(0, 89, 157, .5)", "rgba(0, 68, 129, .5)"],
    //["C#", "cs", "cs", "", ""],
    ["Java", "java", "java", "rgba(245, 131, 25, .5)", "rgba(217, 108, 9, .5)"],
    ["Spring (et Spring Boot)", "java", "spring", "rgba(102, 178, 41, .5)", "rgba(86, 150, 34, .5)"],
    //["Android", "android", "android", "rgba(, , , .5)", "rgba(, , , .5)"],
    //["Kotlin", "android", "kotlin", "rgba(, , , .5)", "rgba(, , , .5)"],
    //["ReactJS", "js", "reactjs", "rgba(, , , .5)", "rgba(, , , .5)"],
    //["VueJS", "js", "vuejs", "rgba(, , , .5)", "rgba(, , , .5)"],
    //["ThreeJS", "js", "threejs", "rgba(, , , .5)", "rgba(, , , .5)"],
    ["Angular", "js", "angular", "rgba(221, 0, 49, .5)", "rgba(195, , 47, .5)"],
    ["Docker", "docker", "docker", "rgba(8, 109, 215, .5)", "rgba(7, 96, 193, .5)"],
    ["Git", "git", "git", "rgba(221, 75, 52, .5)", "rgba(183, 53, 31, .5)"]
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
        lien.style.background = nouveauMemento[3];
        setTimeout(function(){lien.style.background = "none"}, 1000);
    });
}

for(let i = 0; i < listeMementos.length; i++){
    ajouterMemento(listeMementos[i]);
}