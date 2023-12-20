const fs = require("fs");

async function readFromFile() {
  const content = await fs.promises.readFile("file.txt");
  {
    console.log(content.toString());
    console.log("This will print after the file");
  }
}
readFromFile();
