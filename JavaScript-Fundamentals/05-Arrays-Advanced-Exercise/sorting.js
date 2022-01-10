function sorting(arr) {
    let result = [];
    let sortedArr = arr.sort((a, b) => a - b);

    for (let i = arr.length / 2; i > 0; i--) {
        let biggest = sortedArr.pop();
        let smallest = sortedArr.shift();
        result.push(biggest);
        result.push(smallest);
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);