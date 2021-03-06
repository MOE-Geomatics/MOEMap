globalConfig = {};
globalConfig.language = "FR";
globalConfig.searchHelpTxt = "Par exemple: <strong>Adresse</strong>, <strong>No de la plaque d\u0027identification du puits</strong>, <strong>num\u00e9ro d\u0027identification du puits</strong> ou consulter l\u0027aide pour de l\u0027information sur les recherches avanc\u00e9es.";
globalConfig.tableSimpleTemplateTitleLang = "\u00c0 noter : La colonne de distance (en km) donne la distance entre le lieu de votre recherche et le lieu du puits dans la rang\u00e9e donn\u00e9e. Les donn\u00e9es sont en anglais seulement.";
globalConfig.otherInfoHTML = "<br><br><br>"; 
//globalConfig.searchControlHTML = '<input id="map_query" type="text" size="50" onkeypress="return globalConfig.entsub(event)" maxlength="100" title="Terme"></input>&nbsp;<input type="submit" onclick="globalConfig.search()" value="Recherche" title="Recherche"></input><input id="currentMapExtent" type="checkbox" name="currentExtent" title="\u00c9tendue de la carte courante"><span title="Afficher la carte : Limiter la recherche \u00e0 la carte donn\u00e9e" class="tooltip">\u00c9tendue de la carte courante</span><br><div id="information" style="margin-top:10px;">' + globalConfig.searchHelpTxt + '</div>';
globalConfig.searchControlHTML = '<table width="100%" cellpadding="5" cellspacing="0" border="0" style="margin-bottom:15px;" summary="Recherche carte interactive forme">\
			<caption style="text-align:left;">Recherche carte interactive</caption>\
			<tr>\
				<th scope="col"></th>\
				<th scope="col"></th>\
			</tr>\
			<tr>\
				<td valign="top" width="450px">\
					<input id="map_query" type="text" size="50" onkeypress="return globalConfig.entsub(event)" maxlength="100" title="Terme"></input>&nbsp;<input type="submit" onclick="globalConfig.search()" value="Recherche" title="Recherche"></input>\
				</td>\
				<td valign="top">\
					<input id="currentMapExtent" type="checkbox" name="currentExtent" title="&Eacute;tendue de la carte courante"><span title="Afficher la carte : Limiter la recherche &agrave; la carte donn&eacute;e." class="tooltip">&Eacute;tendue de la carte courante</span>\
				</td>\
			</tr>\
			<tr>\
				<td colspan="2">\
					<div id="information" style="margin-top:10px;">\
						Par exemple: <strong>Adresse</strong>, <strong>No de la plaque d�identification du puits</strong>, <strong>num�ro d�identification du puits</strong> ou consulter l�aide pour de l�information sur les recherches avanc�es.\
															</div>\
				</td>\
			</tr>\
		</table>';