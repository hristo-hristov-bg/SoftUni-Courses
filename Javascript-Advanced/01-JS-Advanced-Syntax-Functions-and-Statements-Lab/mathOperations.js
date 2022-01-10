function mathOperations (n1, n2, action) {
    let result;

    if (action == '+') {
        result = n1 + n2;
        console.log(result);
    } else if (action == '-') {
        result = n1 - n2;
        console.log(result);
    } else if (action == '*') {
        result = n1 * n2;
        console.log(result);
    } else if (action == '/') {
        result = n1 / n2;
        console.log(result);
    } else if (action == '%') {
        result = n1 % n2;
        console.log(result);
    } else if (action == '**') {
        result = n1 ** n2;
        console.log(result);
    }
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');