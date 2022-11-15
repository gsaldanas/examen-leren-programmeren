//import files
import Schilder from "./modules/Schilder.js";
import Schilderij from "./modules/Schilderij.js";

//testing variables
const davidSchilder = new Schilder("Caspar", "Sandalen", "kubisme");

//testing code
console.log(davidSchilder);
davidSchilder.addPainting("Kubus", "100x100", 200);
davidSchilder.addPainting("Abstract", "50x50", 1000);
davidSchilder.addPainting("Art old", "50x50", 1000);
davidSchilder.addPainting("Modern", "50x50", 1000);
console.log(davidSchilder);

davidSchilder.printHmtl();
