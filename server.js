const fs = require("fs");

const callbackFun = (err, data) => {
  return err ? console.log(err.message) : console.log(data);
};

const renameFile = (oldName, newName, callback) => {
  if (!oldName || !newName) {
    return callback(new Error("File name cannot be null !"));
  }
  if (!fs.existsSync(`./${oldName}`)) {
    return callback(new Error("File does not exists"));
  }
  if (oldName === newName) {
    return callback(new Error(`File name is already ${newName}`));
  }
  const regex = /^[a-zA-Z0-9.]+$/;
  if (!regex.test(newName)) {
    return callback(new Error("File name cannot contains special characters"));
  }
  fs.rename(oldName, newName, (error) => {
    return error
      ? callback(new Error("something went wrong"))
      : callback(null, "File renamed successfully");
  });
};

renameFile("abc.txt", "xyz.txt", callbackFun);
