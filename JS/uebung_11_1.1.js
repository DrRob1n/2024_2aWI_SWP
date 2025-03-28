let zahlen = [4, 1, 2, 3];


zahlen.push(17, 199);


console.log("Werte im Array:");
for (let zahl of zahlen) {
    console.log(zahl);
}


let summe = 0;
for (let zahl of zahlen) {
    summe += zahl;
}
console.log("Summe der Werte:", summe);


let mittelwert = summe / zahlen.length;
console.log("Mittelwert der Werte:", mittelwert);