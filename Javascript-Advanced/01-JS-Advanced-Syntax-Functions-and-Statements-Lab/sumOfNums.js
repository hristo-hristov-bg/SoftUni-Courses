function sumOfNums(n1, n2) {
    let n = Number(n1);
    let m = Number(n2);

    let result = 0;

    for (let i = n; i <= m; i++) {
        result += i;
    }

    console.log(result);
}

sumOfNums('1', '5');
sumOfNums('-8', '20');