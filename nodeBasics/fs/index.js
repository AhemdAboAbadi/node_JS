const { readFileSync, writeFileSync, readFile } = require("fs");

const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");
console.log(
  "🚀 ~ file: app.js ~ line 5 ~ firstFile",
  firstFile,
  "\n",
  secondFile
);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${firstFile}, ${secondFile} \n`,
  { flag: "a" }
);

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFileSync(
      "./content/result-sync.txt",
      "here is the result",
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  });
});
