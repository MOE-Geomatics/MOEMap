var MOE_map_language = "FR";
var MOEMapLanguage = {
	locatorFailedMessage: '<p>D\u00e9sol\u00e9, nous ne pouvons pas trouver votre emplacement. Essayez de nouveau en donnant d\'autres renseignements sur l\'emplacement.',
	step1Text1: '<p>Le Minist\u00e8re vous demande d\'indiquer sur une carte d\u00e9taill\u00e9e l\'emplacement de ou des endroits o\u00f9 vous pr\u00e9l\u00e8verez de l\'eau. Il pourra ainsi prendre des d\u00e9cisions \u00e9clair\u00e9es sur votre demande en se basant sur les ressources en eau locales et r\u00e9gionales. Cet outil interactif de cartographie permet de cr\u00e9er votre propre carte afin de remplir cette exigence.<br><br>Pour commencer, vous avez deux options:<br><br>1)&nbspUtilisez la recherche par <strong>canton g\u00e9ographique</strong> pour localiser vos emplacements.</p>',
	step1Text2: '&nbsp;<input id="township_search_button" type="submit" onclick="mapConfig.searchTownship()" value="Trouvez votre canton g\u00e9ographique" /><br><br>2)&nbsp;Utilisez la recherche par <strong>adresse</strong>, <strong>code postal</strong>, <strong>ville</strong> ou <strong>plan d\'eau</strong> pour localiser vos emplacements. Vous pouvez aussi consulter la section d\'aide pour conna\u00eetre les autres options.<br><br><input id="map_query" type="text" size="50" onkeypress="return MOEMap.entsub(event)" maxlength="100" />&nbsp;<input id="search_button" type="submit" onclick="mapConfig.search()" value="Trouvez votre emplacement" />',
	step2Text: '<p>Faites un zoom avant ou d\u00e9placez la carte jusqu\'\u00e0 vos sources d\'eau. <strong><u>Cliquez sur la carte pour marquer l\'endroit de votre source d\'eau.</u></strong> Quand vous aurez cliqu\u00e9 sur l\'endroit, vous devrez fournir le "nom de la source" dans une fen\u00eatre contextuelle. Donnez un nom qui d\u00e9crit le mieux le puits, le cours d\'eau, le lac ou l\'\u00e9tang. Par exemple, un nom de source peut \u00eatre: Puits de production, lac Long, rivi\u00e8re Otter et \u00e9tang de Doug.</p><p>Pour ajouter d\'autres sources sur la carte, cliquez de nouveau aux endroits appropri\u00e9s sur la carte.</p><p>Vous avez fait une erreur? Cliquez une deuxi\u00e8me fois sur l\'endroit pour supprimer la marque d\'une source d\'eau.<br><br>Toutes les sources d\'eau marqu\u00e9es et d\u00e9sign\u00e9es s\'afficheront pour r\u00e9f\u00e9rence dans un tableau sous la carte. Les renseignements figurant dans ce tableau peuvent servir \u00e0 remplir le <a href="http://www.ene.gov.on.ca/environment/fr/resources/STD01_077592.html">formulaire de demande de permis de pr\u00e9l\u00e8vement d\'eau</a>.</p><p>Quand vous aurez marqu\u00e9 toutes vos sources d\'eau, cliquez sur "Suivant" pour pr\u00e9visualiser votre carte avant de l\'imprimer.<br><br><strong><u>Cliquez sur la carte pour marquer l\'emplacement de votre source.</u></strong><br><table class="map_toolsTable"><tr><td><div id="previous_step" align="left"><input id = "previous_button" type="submit" onclick="mapConfig.returnFindYourLocation()" value="Pr\u00e9c\u00e9dent"></input></div></td><td><div id="loadingimage" align="center" style="visibility:hidden"><img src="http://www.downloads.ene.gov.on.ca/files/mapping/images/loading.gif"/></div></td><td><div id="next_step" align="right"><input id = "next_button" type="submit" onclick="mapConfig.next()" value="Suivant" disabled="disabled"></input></div></td></tr></table>',
	step3Text: "<p>Lorsque vous avez imprim\u00e9 votre carte, v\u00e9rifiez que vous avez d\u00e9limit\u00e9 la propri\u00e9t\u00e9 o\u00f9 vous pr\u00e9l\u00e8verez de l\'eau. Marquez et \u00e9tiquetez aussi:<br>&nbsp;&nbsp;&nbsp;Toutes les caract\u00e9ristiques d\u00e9sign\u00e9es se trouvant dans un rayon de 500 m\u00e8tres de chaque prise d\'eau, des puits existants, des sources, des cours d\'eau, des terres humides, des plans d\'eau, des limites de propri\u00e9t\u00e9s, l\'emplacement et le nom des propri\u00e9taires fonciers, les intersections routi\u00e8res les plus proches, les habitations.<br>Cette carte est \u00e9 l\'\u00e9chelle d\'environ 1 :10 000, l\'\u00e9chelle recommand\u00e9e pour votre demande.",
	step3Button: '<table class="map_buttonsTable"><tr><td><div id="previous_step" align="left"><input id = "previous_button" type="submit" onclick="mapConfig.returnCreateLocations()" value="Pr\u00e9c\u00e9dent"></input></div></td><td><div id="next_step" align="right"><input id = "next_button" type="submit" onclick="mapConfig.print()" value="Imprimer"></input></div></td></tr></table>',	
	contactText: "<p>Si vous avez des questions concernant votre demande de permis de pr\u00e9l\u00e8vement d\'eau, veuillez communiquer avec un bureau r\u00e9gional:</p>",
	disclaimer: '<p>Veuillez noter qu\'il n\'est pas obligatoire d\'utiliser cette ressource afin de cr\u00e9er une carte pour votre demande de permis de pr\u00e9l\u00e8vement d\'eau. Les cartes cr\u00e9\u00e9es \u00e0 l\'aide d\'autres logiciels seront accept\u00e9es pourvu qu\'elles r\u00e9pondent aux crit\u00e8res \u00e9nonc\u00e9s sur le formulaire de demande.</p>',
	MOERegionContact: {
		"Northern": "<p><strong>Bureau r\u00e9gional de Thunder Bay</strong></p><p>>Bureau 331<br>435, rue James Sud<br>3e \u00e9tage<br>Thunder Bay ON P7E 6S7<br>Sans frais pour les indicatifs r\u00e9gionaux 705 et 807: 1-800-875-7772<br>T\u00e9l.: (807) 475-1205<br>T\u00e9l\u00e9copieur: (807) 475-1754</p>",
		"Central": "<p><strong>Bureau de la r\u00e9gion du centre</strong></p><p>5775, rue Yonge <br>8e \u00e9tage<br>North York ON M2M 4J1<br>Sans frais:  1-800-810-8048<br>T\u00e9l. : (416) 326-6700<br>T\u00e9l\u00e9copieur: (416) 325-6345</p>",
		"Eastern": "<p><strong>Bureau r\u00e9gional de Kingston</strong></p><p>C.P. 22032<br>1259, chemin Gardiners<br>Kingston ON K7M 8S5<br>Sans frais pour les indicatifs r\u00e9gionaux 613, 705, 905: 1-800-267-0974<br>T\u00e9l.: (613) 549-4000<br>T\u00e9l\u00e9copieur: (613) 548-6908</p>",
		"West Central": "<p><strong>Bureau r\u00e9gional de Hamilton</strong></p><p>12e \u00e9tage<br>119, rue King Ouest<br>Hamilton ON L8P 4Y7<br>Sans frais: 1-800-668-4557<br>T\u00e9l.: (905) 521-7640<br>T\u00e9l\u00e9copieur: (905) 521-7820</p>",
		"Southwestern": "<p><strong>Bureau r\u00e9gional de London</strong></p><p>733, chemin Exeter<br>London ON N6E 1L3<br>Sans frais pour l\'indicatif r\u00e9gional 519: 1-800-265-7672<br>T\u00e9l.: (519) 873-5000<br>T\u00e9l\u00e9copieur: (519) 873-5020</p>"
	},
	unsurveyedTerritory: "Unsurveyed Territory",
	removeText: "Supprimer",
	PromptText1: "<p>Entrez le nom de la source (p. ex., \u00e9tang de la maison, Puits 1, ruisseau Otter. Max.",
	PromptText2: " lettres). Confirmez votre entr\u00e9e en cliquant sur le bouton Ok.</p>",
	RemovePromptText: 'Voulez-vraiment supprimer cette source?',
	okButton: { OK:true },
	YesNoButtons: {"Oui": true, "Non": false },
	Yes: "Oui",
	No: "Non",	
	tableHeads: ["<table class='fishTable'  border='1'><tr><th>Lot</th><th>Concession</th><th>Parcelle</th><th>Plan de r\u00e9f\u00e9rence</th></tr>", "<table class='fishTable'  border='1'><tr><th>Municipalit\u00e9 ou canton non \u00e9rig\u00e9 en municipalit\u00e9</th><th>Comt\u00e9 ou district</th><th>Canton g\u00e9ographique initial</th></tr>", "Coordonn\u00e9es g\u00e9ographiques obtenues au moyen d'un appareil de positionnement global (GPS) (Fournir les donn\u00e9es cartographiques obtenues conform\u00e9ment au syst\u00e8me g\u00e9od\u00e9sique nord-am\u00e9ricain de 1983, ou NAD83.)<br><table class='fishTable'  border='1'><tr><th>M\u00e9thode utilis\u00e9e</th><th>Estimation du degr\u00e9 d'exactitude</th><th>Zone dans la grille de Mercatortransverse universelle (MTU)</th><th>Abscisse</th><th>Ordonn\u00e9e</th></tr>","Renseignements suppl\u00e9mentaires - Non obligatoires dans votre formulaire de demande: <br><table class='fishTable'  border='1'><tr><th>Nom du bassin hydrologique</th><th>Utilisation du bassin hydrologique - Annuelle</th><th>Utilisation du bassin hydrologique - \u00c9t\u00e9</th></tr>","<table class='fishTable'  border='1'><tr><th>La source d'eau se trouve-t-elle \u00e0 un endroit o\u00f9 les travaux d'am\u00e9nagement sont soumis \u00e0 la <i>Loi sur la planification et l'am\u00e9nagement de l'escarpement du Niagara</i>?</th></tr>","<table class='fishTable'  border='1'><tr><th>La source d'eau se trouve-t-elle dans la zone prot\u00e9g\u00e9e de la moraine d'Oak Ridges, telle que d\u00e9finie dans le Plan de conservation de la moraine d'Oak Ridges (r\u00e8glement pris en application de la <i>Loi de 2001 sur la conservation de la moraine d'Oak Ridges</i>)?</th></tr>"]
};


