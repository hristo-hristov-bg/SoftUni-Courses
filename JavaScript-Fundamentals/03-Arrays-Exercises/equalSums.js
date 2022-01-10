function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;

    if (arr.length <= 1) {
        console.log(0);
        return;
    }
    if (arr.length > 1 && arr.length < 3) {
        console.log('no');
        return;
    }

    for (let i = 1; i < arr.length; i++) {
        let currentNumber = arr[i - 1];
        sumLeft += currentNumber;
        let index = i;

        for (let j = i + 1; j < arr.length; j++) {
            let currentNumber2 = arr[j];
            sumRight += currentNumber2;
        }

        if (sumLeft == sumRight) {
            console.log(index);
            return;
        }
        sumRight = 0;
    }
    if (sumLeft != sumRight) {
        console.log('no');
    }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);