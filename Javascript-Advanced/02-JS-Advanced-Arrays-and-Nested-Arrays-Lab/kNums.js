function kNums(n, k) {
    let result = Array.from(Array(n));
    result.fill(0, 0, n);
    result.splice(0, 1, 1)
    for (let i = 0; i < n - 1; i++) {
        if (i - k < 0) {
            temp1 = 0;
        } else {
            temp1 = i + 1 - k;
        }
        let element = result.slice(temp1, i + 1).reduce((q, w) => q += w, 0);
        result.splice(i + 1, 1, element);
    }

    return result;

}

console.log(kNums(6, 3));