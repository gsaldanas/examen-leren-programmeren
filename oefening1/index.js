//importing files
import rl from "readline-sync";

//variables
const voorNaam = rl.question("Voornaam? ");
const capVoornaam = voorNaam.substring(1, 0).toUpperCase().concat(".");
console.log(voorNaam);
const familieNaam = rl.question("Familienaam? ");
const capFamilienaam =
  familieNaam.charAt(0).toUpperCase() + familieNaam.slice(1);
console.log(familieNaam);
const adres = rl.question("Straat en huisnummer? ");
const capAdres = adres.charAt(0).toUpperCase() + familieNaam.slice(1);
console.log(adres);
const postcode = rl.question("Postcode? ");
console.log(postcode);
const gemeente = rl.question("Gemeente ");
console.log(gemeente);
const upperCaseGemeente = gemeente.toUpperCase();
//drawing the line
const line = "-";
const repeatLine = line.repeat(adres.length);

let message = "";

if (voorNaam === "") {
  message += "Minstens één van de ingevulde velden is niet geldig!";
}
if (familieNaam === "") {
  message += "Minstens één van de ingevulde velden is niet geldig!";
}
if (adres === "") {
  message += "Minstens één van de ingevulde velden is niet geldig!";
}
if (postcode === "") {
  message += "Minstens één van de ingevulde velden is niet geldig!";
}
if (postcode < 1000 || postcode > 9900) {
  message += "Minstens één van de ingevulde velden is niet geldig!";
}
if (gemeente === "") {
  message += "Minstens één van de ingevulde velden is niet geldig!";
}
//ouput
console.log(repeatLine);
console.log("| " + capVoornaam + " " + capFamilienaam + " |");
console.log("| " + capAdres + " |");
console.log("| " + postcode + " " + upperCaseGemeente + " |");
console.log(repeatLine);
console.log(message);
