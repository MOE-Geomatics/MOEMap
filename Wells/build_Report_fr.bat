ant -f build_Report_fr.xml
rm Wells_Report_fr.2.0-concatenate.js
rm Wells_Report_fr.2.0-concatenate-min.js
cp Wells_Report_fr.2.0-min.js /Y/web/Wells/fr
rm Wells_Report_fr.2.0-min.js
cp Wells_Report_fr.htm /Y/web/Wells/fr
mv /Y/web/Wells/fr/Wells_Report_fr.htm  /Y/web/Wells/fr/Wells_Report.htm
