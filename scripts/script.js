// Affichage mode clair/sombre
function estEnModeSombreParDefaut() {
	return globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches;
}

function estEnModeSombre() {
	let body=document.querySelector("body");
    return body.classList.contains("modeSombre");
}

function majComboBoxTheme(valeur) {
    let themeSite = document.querySelector("#theme-site");
    themeSite.value = valeur;
}

function appliquerStyleParDafaut() {
    let body=document.querySelector("body");
    if (estEnModeSombreParDefaut()) {
        body.classList.add("modeSombre");
        document.querySelectorAll("#theme-site option")[0].innerHTML = "Thème système (actuel : sombre)";
    } else {
        body.classList.remove("modeSombre");
        document.querySelectorAll("#theme-site option")[0].innerHTML = "Thème système (actuel : clair)";
    }
}

function changerMode(e) {
    let body=document.querySelector("body");
    switch (e.target.value) {
        case "clair":
            body.classList.remove("modeSombre");
            localStorage.setItem("li_theme", "clair");
            break;
        case "sombre":
            body.classList.add("modeSombre");
            localStorage.setItem("li_theme", "sombre");
            break;
        default:
            appliquerStyleParDafaut();
            localStorage.removeItem("li_theme", "clair");
            break;

    }
}

function recupererThemeSauvegarde() {
    let body=document.querySelector("body");
    if(localStorage.getItem("li_theme")){
        let theme_enregistre = localStorage.getItem("li_theme");
        if (theme_enregistre == "sombre") {
            body.classList.add("modeSombre");
            document.querySelectorAll("#theme-site option")[0].innerHTML = "Thème système (actuel : sombre)";
        } else {
            body.classList.remove("modeSombre");
            document.querySelectorAll("#theme-site option")[0].innerHTML = "Thème système (actuel : clair)";
        }

        majComboBoxTheme(theme_enregistre);
    } else {
        appliquerStyleParDafaut();
    }
}

recupererThemeSauvegarde();

let themeSite = document.querySelector("#theme-site");
themeSite.addEventListener("change", changerMode);



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
