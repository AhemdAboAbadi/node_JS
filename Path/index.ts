const path = require("path");

console.log(path.sep);

const filePath = path.join("./content" , 'subFile' , 'text.txt');

console.log(filePath);


const base = path.basename(filePath);
console.log("🚀 ~ file: app.js ~ line 11 ~ base", base)


const absolute = path.resolve(__dirname , 'content' , 'subFile' , 'text.txt');

console.log('absolute', absolute);