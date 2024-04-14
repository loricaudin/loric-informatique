// Affichage mode clair/sombre

var now = new Date();

var heure  = now.getHours();
//heure = 19;
if(heure>18 || heure<7){
	basculerClairSombre();
};

function basculerClairSombre(){
    let body=document.querySelector("body");
    body.classList.toggle("modeSombre");
}

/*
//Affichage mobile
let bar=document.querySelector("#img_nav");
let nav=document.querySelector("nav");
let menu1=document.querySelector("#menu-1");
let menu2=document.querySelector("#menu-2");
let menu3=document.querySelector("#menu-3");
let menu4=document.querySelector("#menu-4");
let menu5=document.querySelector("#menu-5");
function menu(){
    let fichier=bar.getAttribute("src");
    if(fichier=="bar_off.png"){
        bar.setAttribute("src","bar_on.png")
		menu1.style.display="block";
		menu2.style.display="block";
		menu3.style.display="block";
		menu4.style.display="block";
		menu5.style.display="block";
		
		if(heure>18 || heure<7){
			menu1.style.background="rgba(30,30,30, .9)";
			menu2.style.background="rgba(30,30,30, .9)";
			menu3.style.background="rgba(30,30,30, .9)";
			menu4.style.background="rgba(30,30,30, .9)";
			menu5.style.background="rgba(30,30,30, .9)";
		}
		else{
			menu1.style.background="rgba(235,235,235, .9)";
			menu2.style.background="rgba(235,235,235, .9)";
			menu3.style.background="rgba(235,235,235, .9)";
			menu4.style.background="rgba(235,235,235, .9)";
			menu5.style.background="rgba(235,235,235, .9)";
		}
    }
    else{
        bar.setAttribute("src","bar_off.png")
		menu1.style.display="none";
		menu2.style.display="none";
		menu3.style.display="none";
		menu4.style.display="none";
		menu5.style.display="none";
    }
}
bar.addEventListener("click",menu);
*/