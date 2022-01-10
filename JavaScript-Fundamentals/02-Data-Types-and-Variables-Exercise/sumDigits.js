function sumDigits(num) {
    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let numAsNum = Number(numAsStr[i]);
        sum += numAsNum;
    }
    console.log(sum);
}
sumDigits(245678);
console.log('------');
sumDigits(97561);
console.log('------');
sumDigits(543);
console.log('------');