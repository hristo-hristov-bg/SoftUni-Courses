function diagonalSums(arr) {
    const last = arr.length -1;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][last - i];
    }

    console.log(`${sum1} ${sum2}`)
}

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );