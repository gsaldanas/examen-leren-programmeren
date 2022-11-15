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

//exporting
export default Text;
