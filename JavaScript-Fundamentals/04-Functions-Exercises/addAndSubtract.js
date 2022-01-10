function addAndSubtract(numOne, numTwo, numThree) {

    console.log(subtract(numThree));

    function sum(numOne, numTwo) {
        let result = numOne + numTwo;
        return result;
    }

    function subtract(numThree) {
        let result = sum(numOne, numTwo) - numThree;
        return result;
    }
}

addAndSubtract(42,
    58,
    100
);