function biggestOfThreeNums(x, y, z) {

    max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

console.log(biggestOfThreeNums(43,
    43.2,
    43.1
));