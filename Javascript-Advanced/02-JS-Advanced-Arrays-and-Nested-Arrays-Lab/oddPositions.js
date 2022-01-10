function oddPositions(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        let current = arr[i] * 2;
        result[result.length] = current;
    }
    result.reverse();
    return result;
}

console.log(oddPositions([3, 0, 10, 4, 7, 3]));