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
Schilder.prototype.printHmtl = function () {
  console.log(`
    <h1>${this.voornaam} ${this.achternaam}</h1>
    <h2>${this.stijl}</h2>
        <ul>
            <li>
            Naam: <span>${this.naam}</span><br>
            Canvas: <span>${this.canvasgrootte}</span><br>
            Canvas: <span>${this.kostprijs}</span><br>
        </li>
        </ul>
    `);
};
//   //afprinten van de schilderijen
//   let output = " ";
//   for (const property in Schilderij) {
//     output += property + "naam:" + Schilderij[naam] + ";";
//   }
//   console.log(output);
// };
export default Schilder;
