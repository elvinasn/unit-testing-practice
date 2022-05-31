function ReverseString(string) {
  if (!(typeof string === "string" || string instanceof String)) {
    return "not a string!";
  }
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr = newStr + string[i];
  }
  return newStr;
}
export default ReverseString;
