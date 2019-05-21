const fs = require('fs');
const csv = fs.readFileSync(process.argv[3],'utf-8');

const csvToJson = function(csv){
  let lines = csv.split('\n');

  let headers = lines[0].split(',');

  let result = [];

  for(let i=1;i<lines.length;i++){
	  let obj = {};
	  let currentline=lines[i].split(",");
	  for(let j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
	  result.push(obj);
  }
  return result;
}

const csvJson = csvToJson(csv);
fs.writeFileSync('data.json',JSON.stringify(csvJson,null,2));
