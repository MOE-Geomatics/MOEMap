ant -f build_Records_Report_en.xml
rm TRAIS_Records_Report_en.2.0-concatenate.js
rm TRAIS_Records_Report_en.2.0-concatenate-min.js
cp TRAIS_Records_Report_en.2.0-min.js /Y/web/TRAIS/en
rm TRAIS_Records_Report_en.2.0-min.js
cp TRAIS_Records_Report_en.htm /Y/web/TRAIS/en
mv /Y/web/TRAIS/en/TRAIS_Records_Report_en.htm  /Y/web/TRAIS/en/TRAIS_Records_Report.htm
