function operationsBetweenNumbers(input) {

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let resultType = "";

    switch (operator) {
        case "+":
            result = number1 + number2;
            if (result % 2 == 0) {
                resultType = "even";
            } else {
                resultType = "odd";
            } break;
        case "-":
            result = number1 - number2;
            if (result % 2 == 0) {
                resultType = "even";
            } else {
                resultType = "odd";
            } break;
        case "*":
            result = number1 * number2;
            if (result % 2 == 0) {
                resultType = "even";
            } else {
                resultType = "odd";
            } break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
    }
    
    if (operator === "+" || operator === "-" || operator === "*") {
        console.log(`${number1} ${operator} ${number2} = ${result} - ${resultType}`);
    } else if (operator === "/" && number2 != 0) {
        console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
    } else if (operator === "%" && number2 != 0) {
        console.log(`${number1} % ${number2} = ${result}`);
    } else if (number2 == 0) {
        console.log(`Cannot divide ${number1} by zero`)
    }
}
operationsBetweenNumbers(["10", "0", "%"]);




