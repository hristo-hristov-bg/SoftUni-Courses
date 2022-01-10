function minimumNumber(input) {

    let numberCounts = Number(input[0]);

    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= numberCounts; i++) {

        let currentNumber = Number(input[i]);

        if (currentNumber < minNumber) {

            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}
minimumNumber(["4",
    "45",
    "-20",
    "7",
    "99"])

