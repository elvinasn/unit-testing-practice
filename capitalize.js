function Capitalize(string) {
  if (!(typeof string === "string" || string instanceof String)) {
    string = string.toString();
    return Number(string[0].toUpperCase() + string.slice(1));
  }
  return string[0].toUpperCase() + string.slice(1);
}
export default Capitalize;
