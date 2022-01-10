function sortingNums(arr) {
    let arrCopy = arr.slice();
    let result =[];

    let sorted = arr.sort((a, b) => a -b);

    for (let i = 0; i < arrCopy.length; i++) {
        if (i % 2 == 0) {
            result.push(sorted.shift());
        } else {
            result.push(sorted.pop());
        }
    }

    return result;
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));