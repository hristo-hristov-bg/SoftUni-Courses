function evenAndOddSubtraction(arr) {

    let evenSum = 0;
    let oddSum = 0;
    let result = 0;

    for (let element of arr) {
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }

    result = evenSum - oddSum;

    console.log(result);

}

evenAndOddSubtraction([2,4,6,8,10]);