for (let i = 1; i <= 222; i++) {
    let output = "";

    if (i % 5 === 0) {
        output += "Foo";
    }

    if (i % 7 === 0) {
        output += "Bar";
    }

    if (output === "") {
        console.log(i);
    } else {
        console.log(output);
    }
}