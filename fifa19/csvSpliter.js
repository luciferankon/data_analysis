const fs = require('fs');
const data = fs.readFileSync('./data.csv','utf-8');

const lines = data.split('\n');

const column = lines.map(x => x.split(','));

console.log(column);
