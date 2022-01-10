function sumOfTwoNumbers(input) {

    let firstNumber = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let x = firstNumber; x <= endOfInterval; x++) {
        for (let y = firstNumber; y <= endOfInterval; y++) {
            counter++;
            if (x + y == magicNumber) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["88",
    "888",
    "1000"])
