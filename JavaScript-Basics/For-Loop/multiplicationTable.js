function multiplicationTable(input) {

    let x = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = i * x;
        console.log(`${i} * ${x} = ${sum}`);
    }
}
multiplicationTable(["5"]);