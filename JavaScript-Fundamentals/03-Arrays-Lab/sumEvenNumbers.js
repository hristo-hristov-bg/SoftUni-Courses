function sumEvenNumbers(arr) {

    let sum = 0;

    for (let element of arr) {
        num = Number(element);
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);