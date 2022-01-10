function oddAndEvenSum(num) {

    let newNum = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < newNum.length; i++) {
        let num2 = Number(newNum[i]);
        if (num2 % 2 == 0) {
            evenSum += num2;
        } else {
            oddSum += num2;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);