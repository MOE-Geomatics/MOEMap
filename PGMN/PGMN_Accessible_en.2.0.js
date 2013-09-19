globalConfig = {};
globalConfig.accessible = true;
globalConfig.language = "EN";
globalConfig.searchHelpTxt = "Search <strong>PGMN Well ID</strong>, <strong>Well Depth</strong> or see help for more advanced options."; 
globalConfig.tableSimpleTemplateTitleLang = "";
globalConfig.otherInfoHTML = ""; 
globalConfig.searchControlHTML = '<center><input id="map_query" type="text" size="50" onkeypress="return globalConfig.entsub(event)" maxlength="100" title="Term"></input>&nbsp;<input type="submit" onclick="globalConfig.search()" value="Search" title="Search"></input><br><div id="information" style="margin-top:10px;">' + globalConfig.searchHelpTxt + '</div></center>';
//globalConfig.tableContent = "<table class='fishTable'  border='1'><tr><th><center>PGMN Well ID</center></th><th><center>Conservation Authority</center></th><th><center>County</center></th><th><center>Township</center></th><th><center>Site ID</center></th><th><center>Latitude</center></th><th><center>Longitude</center></th><th><center>Ground Elevation (m.a.s.l.)</center></th></tr><tr><td  class='shaded'>{PGMN_WELL}</td><td  class='shaded'>{CONS_AUTHO}</td><td  class='shaded'>{globalConfig.wordCapitalize(COUNTY)}</td><td  class='shaded'>{globalConfig.wordCapitalize(TOWNSHIP)}, {CONCESSION}, {LOT}</td><td  class='shaded'>{SiteID}</td><td  class='shaded'>{globalConfig.deciToDegree(LATITUDE)}</td><td  class='shaded'>{globalConfig.deciToDegree(LONGITUDE)}</td><td  class='shaded'>{ELVA_GROUN}</td></tr><tr><th><center>Well Depth (meters below ground)</center></th><th><center>Aquifer Type</center></th><th><center>Lithology of Aquifer</center></th><th><center>Water Well Record Number (WWR)</center></th><th><center>Stratigraphy Description from reports or notes</center></th><th><center>WWR for wells near to the PGMN well</center></th><th><center>Diameter of Well or Piezometer (cm)</center></th><th><center>Screen Interval or Open Hole Interval (meters below ground)</center></th></tr><tr><td  class='shaded'>{WELL_DEPTH}</td><td  class='shaded'>{AQUIFER_TY}</td><td  class='shaded'>{AQUIFER_LI}</td><td  class='shaded'>{STRATIGRAP}</td><td  class='shaded'>{STRATI_DES}</td><td  class='shaded'>{NO_RECORD}</td><td  class='shaded'>{WEL_PIEZOM}</td><td  class='shaded'>{SCREEN_HOL}</td></tr></table><br>[{Level_Avai}?  ?<a target='_blank' href='http://files.ontariogovernment.ca/moe_mapping/mapping/PGMN/WaterLevel/csv/{PGMN_WELL}.zip'>Water Level Data (csv file) for PGMN Well: {PGMN_WELL}</a><br>][{Chem_Avai}?  ?<a target='_blank' href='PGMN_Report.htm?id={PGMN_WELL}'>Water Chemistry Report for PGMN Well: {PGMN_WELL}</a><br>][{Prep_Avai}?  ?<a target='_blank' href='http://files.ontariogovernment.ca/moe_mapping/mapping/PGMN/Precipitation/csv/{Site_ID}.csv'>Precipitation Data (csv file) for PGMN Well: {PGMN_WELL}</a><br>]<br><br>";
globalConfig.tableContent = "<table class='fishTable'  border='1'><tr><th><center>PGMN Well ID</center></th><th><center>Conservation Authority</center></th><th><center>County</center></th><th><center>Township</center></th><th><center>Site ID</center></th><th><center>Latitude</center></th><th><center>Longitude</center></th><th><center>Ground Elevation (m.a.s.l.)</center></th></tr><tr><td  class='shaded'>{PGMN_WELL}</td><td  class='shaded'>{CONS_AUTHO}</td><td  class='shaded'>{globalConfig.wordCapitalize(COUNTY)}</td><td  class='shaded'>{globalConfig.wordCapitalize(TOWNSHIP)}, {CONCESSION}, {LOT}</td><td  class='shaded'>{SiteID}</td><td  class='shaded'>{globalConfig.deciToDegree(LATITUDE)}</td><td  class='shaded'>{globalConfig.deciToDegree(LONGITUDE)}</td><td  class='shaded'>{ELVA_GROUN}</td></tr><tr><th><center>Well Depth (meters below ground)</center></th><th><center>Aquifer Type</center></th><th><center>Lithology of Aquifer</center></th><th><center>Water Well Record Number (WWR)</center></th><th><center>Stratigraphy Description from reports or notes</center></th><th><center>WWR for wells near to the PGMN well</center></th><th><center>Diameter of Well or Piezometer (cm)</center></th><th><center>Screen Interval or Open Hole Interval (meters below ground)</center></th></tr><tr><td  class='shaded'>{WELL_DEPTH}</td><td  class='shaded'>{AQUIFER_TY}</td><td  class='shaded'>{AQUIFER_LI}</td><td  class='shaded'>{STRATIGRAP}</td><td  class='shaded'>{STRATI_DES}</td><td  class='shaded'>{NO_RECORD}</td><td  class='shaded'>{WEL_PIEZOM}</td><td  class='shaded'>{SCREEN_HOL}</td></tr></table><br>[{Level_Avai}?  ?<a target='_blank' href='http://files.ontariogovernment.ca/moe_mapping/mapping/PGMN/WaterLevel/csv/{PGMN_WELL}.zip'>Water Level Data (csv file) for PGMN Well: {PGMN_WELL}</a><br>][{Chem_Avai}?  ?<a target='_blank' href='en_pgmn_report?id={PGMN_WELL}'>Water Chemistry Report for PGMN Well: {PGMN_WELL}</a><br>][{Prep_Avai}?  ?<a target='_blank' href='http://files.ontariogovernment.ca/moe_mapping/mapping/PGMN/Precipitation/csv/{Site_ID}.csv'>Precipitation Data (csv file) for PGMN Well: {PGMN_WELL}</a><br>]<br><br>";