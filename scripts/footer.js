// Importation du footer (cette méthode permet au serveurs incompatibles avec le PHP de changer facilement de footer)
let footer = document.querySelector("footer");
footer.innerHTML = ''
+ '	<div>'
+ '		<p>Copyright ©2024 Loric Audin - Tous droits réservés</p>'
+ '		<p>Loric Informatique : C' + "'" + 'est simple comme echo Hello World!</p>'
+ '	</div>';