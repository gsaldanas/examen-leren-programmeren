//import files
import Schilder from "./modules/Schilder.js";
import Schilderij from "./modules/Schilderij.js";

const davidSchilder = new Schilder("david", "toppie", "kubisme");
const werk1 = new Schilderij("FSD", "50x50", 1000);

console.log(werk1);
console.log(davidSchilder);
davidSchilder.addPainting("test", "100x100", "kubus");
davidSchilder.addPainting(werk1);
console.log(davidSchilder);
