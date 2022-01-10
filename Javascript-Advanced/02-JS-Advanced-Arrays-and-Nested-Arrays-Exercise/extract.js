function extract(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(extract([
    20,
    3,
    2,
    15,
    6,
    1]
))