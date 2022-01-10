function factorialDevision(numOne, numTwo) {
    const factorialOne = factorial(numOne);
    const factorialTwo = factorial(numTwo);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    let result = factorialOne / factorialTwo;

    console.log(result.toFixed(2));
}

factorialDevision(6, 2);