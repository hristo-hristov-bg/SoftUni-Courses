function integerAndFloat(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    if (sum % 1 === 0) {
        sum += ' - Integer';
    } else {
        sum += ' - Float';
    }
    console.log(sum);
}
integerAndFloat(9, 100, 1.1)