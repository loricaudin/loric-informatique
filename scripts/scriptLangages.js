// Liste des langages avec le lien du fichier et une couleur choisie pour le mode clair et sombre.
let listeLangages = [
    ["Python", "python", "python", "rgba(255, 214, 66, .5)", "rgba(226, 178, 0, .5)"],
    ["HTML", "html", "html", "rgba(241, 101, 41, .5)", "rgba(228, 77, 38, .5)"],
    ["CSS", "css", "css", "rgba(41, 101, 241, .5)", "rgba(38, 77, 228, .5)"],
    ["JavaScript", "js", "js", "rgba(247, 223, 30, .5)", "rgba(233, 206, 9, .5)"],
    //["PHP", "php", "php", "rgba(122, 134, 184, .5)", ""],
    ["MySQL", "sql", "mysql", "rgba(228, 142, 0, .5)", "rgba(204, 126, 0, .5)"],
    ["Oracle Database (SQL)", "sql", "oracledatabase", "rgba(255, 0, 0, .5)", "rgba(200, 0, 0, .5)"],
    //["SQL Server", "sql", "sqlserver", "", ""],
    //["SQLite", "sql", "sqlite", "", ""],
    ["MongoDB (NoSQL)", "nosql", "mongodb", "rgba(108, 172, 72, .5)", "rgba(89, 150, 54, .5)"],
    ["C", "c", "c", "rgba(0, 89, 157, .5)", "rgba(0, 68, 129, .5)"],
    ["C++", "cpp", "cpp", "rgba(0, 89, 157, .5)", "rgba(0, 68, 129, .5)"],
    //["C#", "cs", "cs", "", ""],
    ["Java", "java", "java", "rgba(245, 131, 25, .5)", "rgba(217, 108, 9, .5)"],
    //["Android", "android", "android", "", ""],
    //["Kotlin", "android", "kotlin", "", ""],
    //["ReactJS", "js", "reactjs", "", ""]
    //["VueJS", "js", "vuejs", "", ""]
    //["ThreeJS", "js", "threejs", "", ""]
    //["Angular", "js", "angular", "", ""]
];



// Script

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

for(let i = 0; i < listeLangages.length; i++){
    ajouterLangage(listeLangages[i]);
}