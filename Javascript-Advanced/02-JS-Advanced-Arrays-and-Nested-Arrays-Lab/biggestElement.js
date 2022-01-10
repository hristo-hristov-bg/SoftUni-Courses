function biggestEl(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let row of arr) {
        for (let col of row) {
            let current = col;
            
            if (current > biggest) {
                biggest = current;
            }
        }
    }
    return biggest;
}

console.log(biggestEl([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))