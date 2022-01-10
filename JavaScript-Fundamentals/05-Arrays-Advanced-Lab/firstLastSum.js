function firstLastSum(arr) {
    let sum = Number(arr.shift()) + Number(arr.pop());
    console.log(sum);
}

firstLastSum(['5', '10']);