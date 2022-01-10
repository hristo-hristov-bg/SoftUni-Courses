function aggregate(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);

    let invSum = 0;

    for (let i = 0; i < arr.length; i ++) {
        invSum += 1 / arr[i];
    }
    console.log(invSum);

    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        concat += arr[i];
    }
    console.log(concat);
}

//aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16])