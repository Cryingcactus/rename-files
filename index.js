const fs = require("fs");

const regex = /^[A-Za-z]{3}__([A-Za-z]{3})_([0-9]+)__([0-9]+)_\.jpg\.txt/;
const month = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

if (process.argv.length < 3) {
  console.log(
    "Please rerun with the path to the directory you want to rename files in.",
  );
} else {
  const targetDir = process.argv[2];
  console.log("Target: ", targetDir);
  fs.readdir(targetDir, (err, files) => {
    files.forEach((file) => {
      const match = file.match(regex);
      if (match) {
        const newName = `${match[3]}-${month[match[1]]}-${match[2]}-${
          match[0]
        }`;
        const currentFile = `${targetDir}\\${file}`;
        const NewFile = `${targetDir}\\${newName}`;
        fs.rename(currentFile, NewFile, (err) => {
          console.log("Renaming", file, "to", newName);
          if (err) throw err;
        });
      }
    });
  });
}
