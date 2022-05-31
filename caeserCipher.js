const abc = "abcdefghijklmnopqrstuvwxyz";
const caezer = "wxyzabcdefghijklmnopqrstuv";

function CaeserCipher(string) {
  let newStr = "";
  if (!(typeof string === "string" || string instanceof String)) {
    return "not a string!";
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i].match("[A-Za-z]")) {
      if (string[i] === string[i].toUpperCase()) {
        newStr =
          newStr +
          caezer[abc.indexOf(string[i].toLocaleLowerCase())].toUpperCase();
      } else {
        newStr = newStr + caezer[abc.indexOf(string[i])];
      }
    } else {
      newStr = newStr + string[i];
    }
  }
  return newStr;
}
export default CaeserCipher;
