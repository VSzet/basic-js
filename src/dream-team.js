const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || !Array.isArray(members)) {
    return false;
  }
  let name = [];
  let result = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) !== 'string') {
      continue;
    }
    else {
      name = members[i].split("");
      for (let j = 0; j < name.length; j++) {
        let ch = name[j].toUpperCase();
        if (ch.match(/[A-Z]/)) {
          result += ch;
          break;
        }
      }
    }
  }
  return result.split('').sort().join('');
};
