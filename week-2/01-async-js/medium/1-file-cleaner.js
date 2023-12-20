const fs = require("fs/promises");

async function removeSpaces() {
  const content = await fs.readFile("file.txt");
  await fs.writeFile("file.txt", content.toString().replace(/\s+/g, " "));
}
removeSpaces();
