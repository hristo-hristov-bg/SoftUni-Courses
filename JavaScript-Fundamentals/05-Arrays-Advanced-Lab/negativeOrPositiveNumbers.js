function negativeOrPositiveNumbers(arr) {
    let result = [];

    for (let num of arr) {

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}

negativeOrPositiveNumbers([3, -2, 0, -1]);