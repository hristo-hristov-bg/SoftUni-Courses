function maxNumber(list) {
    let topIntegers = [];

    for (let i = 0; i < list.length; i++) {
        let currentNumber = list[i];
        let isTop = true;

        for (let j = i + 1; j < list.length; j++) {
            let rightNumber = list[j];

            if (rightNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntegers.push(currentNumber);
        }
    }
    console.log(topIntegers.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);