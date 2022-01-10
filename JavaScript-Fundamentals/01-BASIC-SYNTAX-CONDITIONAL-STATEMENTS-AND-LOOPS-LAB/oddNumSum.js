function oddNumSum(n) {
    let oddNum = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        console.log(oddNum)
        sum += oddNum;
        oddNum += 2;
    }
    console.log(`Sum: ${sum}`)
}
oddNumSum(3);