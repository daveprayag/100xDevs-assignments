const fs = require("fs");

function writeToFile() {
  const content = fs.promises.appendFile(
    "file.txt",
    "This line has been added!"
  );
  console.log("Hello Prayag");
}
writeToFile();
