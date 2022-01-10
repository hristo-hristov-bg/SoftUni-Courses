function addAndSubtract(arr) {
    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr[i] = arr[i] + i;
        } else {
            newArr[i] = arr[i] - i;
        }
        sumArr += arr[i];
        sumNewArr += newArr[i];
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}

addAndSubtract([-5, 11, 3, 0, 2]);