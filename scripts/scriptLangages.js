// Liste des langages avec le lien du fichier et une couleur choisie pour le mode clair et sombre.

var langages = document.querySelector(".langages");

function ajouterLangage(nouveaulangage){
    let langage = document.createElement("div");
    langage.classList.add("langage");
    let lien = document.createElement("a");
    lien.setAttribute("href", nouveaulangage[1] + "/" + nouveaulangage[2] + ".html");
    lien.textContent = nouveaulangage[0];
    let div = document.createElement("div");
    lien.appendChild(div);
    let image = document.createElement("img");
    image.setAttribute("src", nouveaulangage[1] + "/icone_" + nouveaulangage[2] + ".png");
    div.appendChild(image);

    langage.append(lien);
    langages.append(langage);

    langage.addEventListener('mousedown', function(){
        lien.style.background = nouveaulangage[3];
        setTimeout(function(){lien.style.background = "none"}, 1000);
    });
}

let listeLangages = [
    ["Python", "python", "python", "rgba(255, 212, 65, .5)", ""],
    ["HTML", "html", "html", "rgba(229, 76, 33, .5)", ""],
    ["CSS", "css", "css", "rgba(26, 77, 228, .5)", ""],
    ["JavaScript", "js", "js", "rgba(247, 223, 30, .5)", ""],
    //["PHP", "php", "php", "", ""],
    ["MySQL", "sql", "mysql", "rgba(228, 142, 0, .5)", ""],
    ["Oracle Database (SQL)", "sql", "oracledatabase", "rgba(250, 100, 100, .5)", ""],
    //["SQLite", "sql", "sqlite", "", ""],
    ["MongoDB (NoSQL)", "nosql", "mongodb", "rgba(100, 200, 100)", ""],
    ["C", "c", "c", "rgba(0, 89, 157, .5)", ""],
    ["C++", "cpp", "cpp", "rgba(0, 68, 130, .5)", ""],
    //["C#", "cs", "cs", "", ""],
    ["Java", "java", "java", "rgba(240, 145, 17, .5)", ""],
    //["Android", "android", "android", "", ""],
    //["ReactJS", "js", "reactjs", "", ""]
];

for(let i = 0; i < listeLangages.length; i++){
    ajouterLangage(listeLangages[i]);
}