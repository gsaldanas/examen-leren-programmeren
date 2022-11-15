import Schilderij from "./Schilderij.js";

function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.schilderijen = [];
}

//push schilderijen in lijst
Schilder.prototype.addPainting = function (naam, canvasgrootte, kostprijs) {
  this.schilderijen.push(new Schilderij(naam, canvasgrootte, kostprijs));
};
//print hmtl
Schilder.prototype.printHmtl = function () {};
export default Schilder;
