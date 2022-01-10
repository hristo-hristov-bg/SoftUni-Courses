function biggerHalf(arr) {
    let sorted = arr.sort((a,b) => a-b);
    let result = [];
    let index = sorted.length / 2;
    if (sorted.length % 2 == 0) {
        result = sorted.slice(index);
    } else {
        result = sorted.slice(Math.floor(index));
    }
    return result;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));