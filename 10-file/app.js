const fs = require("fs");

// rename(....arg, callback(error, data))
// readSync()
// promises.rename().then().catch()

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.error;
}

fs.rename("./text-new.txt", "./text.txt", (error) => console.log(error));
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt") //
  .then(() => console.log("Done"))
  .catch(console.error);
