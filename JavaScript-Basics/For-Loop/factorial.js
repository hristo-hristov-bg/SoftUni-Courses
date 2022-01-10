function factorial(input) {

    let x = Number(input[0]);
    let sum = 1;

    for (let i = 1; i <= x; i++) {
        sum *= i;

    }
    console.log(sum);
}
factorial(["8"])