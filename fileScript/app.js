// const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");
const process = require("process");

const fileList = fs.readdirSync(`${process.argv[2]}`);

fileList.forEach((v) => {
  if (path.extname(v) === ".png" || path.extname(v) === ".aae") {
    if (!fs.existsSync(`${process.argv[2]}/capture`)) {
      fs.mkdirSync(`${process.argv[2]}/capture`, (error) => console.error);
      fs.renameSync(
        `${process.argv[2]}/${v}`,
        `${process.argv[2]}/capture/${v}`
      );
    } else {
      fs.renameSync(
        `${process.argv[2]}/${v}`,
        `${process.argv[2]}/capture/${v}`
      );
    }
  } else if (path.extname(v) === ".mov" || path.extname(v) === ".mp4") {
    if (!fs.existsSync(`${process.argv[2]}/video`)) {
      fs.mkdirSync(`${process.argv[2]}/video`, (error) => console.error);
      fs.renameSync(`${process.argv[2]}/${v}`, `${process.argv[2]}/video/${v}`);
    } else {
      fs.renameSync(`${process.argv[2]}/${v}`, `${process.argv[2]}/video/${v}`);
    }
  } else if (path.extname(v) === ".jpg") {
    if (
      v.split("_")[1][0] === "E" &&
      fs.existsSync(
        `${process.argv[2]}/${v
          .split("_")[0]
          .concat("_", v.split("_")[1].slice(1))}`
      )
    ) {
      if (!fs.existsSync("duplicated")) {
        fs.mkdirSync(`${process.argv[2]}/duplicated`, (error) => console.error);
        fs.renameSync(
          `${process.argv[2]}/${v
            .split("_")[0]
            .concat("_", v.split("_")[1].slice(1))}`,
          `${process.argv[2]}/duplicated/${v
            .split("_")[0]
            .concat("_", v.split("_")[1].slice(1))}`
        );
      }
    }
  }
});
