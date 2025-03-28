function invertiereBitfolge(bitfolge) {
    let invertierteBitfolge = "";

    for (let bit of bitfolge) {
        if (bit === "0") {
            invertierteBitfolge += "1";
        } else if (bit === "1") {
            invertierteBitfolge += "0";
        } else {

            return "Ungültige Bitfolge: Enthält nicht-binäre Zeichen.";
        }
    }

    return invertierteBitfolge;
}


let eingabe = "000111000";
let ausgabe = invertiereBitfolge(eingabe);
console.log("Eingabe:", eingabe);
console.log("Ausgabe:", ausgabe);


eingabe = "000111002";
ausgabe = invertiereBitfolge(eingabe);
console.log("Eingabe:", eingabe);
console.log("Ausgabe:", ausgabe); 