const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8") //
  .then((data) => console.log(data))
  .catch(console.error);

// write a file
fs.writeFile("./file.txt", "Hello!!!!!!!!!!!").catch(console.error);

fs.writeFile("./file.txt", "안녕!!!!!!!!!!!").catch(console.error);

fs.appendFile("./file.txt", "Hello!!!!!!!!!!!")
  .then(() => {
    // copy
    fs.copyFile("./file.txt", "file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir("sub-folder") //
  .catch(console.error);

fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
