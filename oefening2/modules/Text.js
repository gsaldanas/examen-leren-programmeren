function Text(str) {
  this.str = str;
}
//abilities
//left
Text.prototype.Left = function (n) {
  this.str = this.str.slice(0, n);
};
//right
Text.prototype.Right = function (n) {
  this.str = this.str.slice(-n);
};
//charCount
Text.prototype.charCount = function () {
  this.str = this.str.trim().length;
};
//wordCount
Text.prototype.wordCount = function () {
  return this.str.split(" ").filter(function (word) {
    return word != "";
  }).length;
};
//vowelCount
Text.prototype.vovelCount = function () {
  //using regex
  return this.str.match(/[aeiou]/gi).length;
};
//capitalsCount
Text.prototype.capitalsCount = function () {
  //using regex again (-:
  return this.str.match(/[A-Z]/g).length;
};
//appendString
Text.prototype.appendString = function (str) {
  this.str = this.str.concat(str);
};
//prependString
Text.prototype.prependString = function (str) {
  this.str = this.str.replace(/^/, str);
};

//exporting
export default Text;
