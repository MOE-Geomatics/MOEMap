globalConfig = {};
globalConfig.language = "EN";
globalConfig.searchHelpTxt = "Search <strong>Address</strong>, <strong>Well Tag #</strong>, <strong>Well ID</strong> or see help for advanced options.";
//globalConfig.searchHelpTxt = "Search <strong>Address</strong>, <strong>Well Tag #</strong>, <strong>Well ID</strong>";
globalConfig.tableSimpleTemplateTitleLang = "Note: The Distance(KM) column represents the distance between your search location and the well location in the specific row. Data is in English only.";
//globalConfig.otherInfoHTML = ""; 
//globalConfig.searchControlHTML = '<input id="map_query" type="text" size="50" onkeypress="return globalConfig.entsub(event)" maxlength="100" title="Term"></input>&nbsp;<input type="submit" onclick="globalConfig.search()" value="Search" title="Search"></input><input id="currentMapExtent" type="checkbox" name="currentExtent" title="Current Map Display"><span title="Current Map Display: Limit your search to the area displayed" class="tooltip">Current Map Display</span><br><div id="information" style="margin-top:10px;">\e.g. <strong>Address</strong>, <strong>Well Tag #</strong>, <strong>Well ID</strong> or see help for advanced options.</div>';
globalConfig.searchControlHTML = '<table width="100%" cellpadding="5" cellspacing="0" border="0" style="margin-bottom:15px;" summary="Search interactive map form">\
			<caption style="text-align:left;">Search interactive map</caption>\
			<tr>\
				<th scope="col"></th>\
				<th scope="col"></th>\
			</tr>\
			<tr>\
				<td valign="top" width="415px">\
					<input id="map_query" type="text" size="50" onkeypress="return globalConfig.entsub(event)" maxlength="100" title="Term"></input>&nbsp;<input type="submit" onclick="globalConfig.search()" value="Search" title="Search"></input>								\
				</td>\
				<td valign="top">\
					<input id="currentMapExtent" type="checkbox" name="currentExtent" title="Current Map Display"><span title="Current Map Display: Limit your search to the area displayed" class="tooltip">Current Map Display</span>\
				</td>\
			</tr>\
			<tr>\
				<td colspan="2">\
					<div id="information" style="margin-top:10px;">\
						e.g. <strong>Address</strong>, <strong>Well Tag #</strong>, <strong>Well ID</strong> or see help for advanced options.\
															</div>\
				</td>\
			</tr>\
		</table>';
