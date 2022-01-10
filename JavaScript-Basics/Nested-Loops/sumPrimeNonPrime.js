function sumPrimeNonPrime(input) {
    index = 0;
    let command = input[index];
    index++;
    let primeSum = 0;
    let nonPrimeSum = 0;
    counter = 0;

    while (command !== 'stop') {
        let number = Number(command);
        if (number < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++
            continue;
        }
        if (number === 1) {
            nonPrimeSum++;
            command = input[index];
            index++
            continue;
        }
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                counter++;
            }
            if (counter === 3) {
                nonPrimeSum += number;
                break;

            }

        }
        if (counter < 3) {
            primeSum += number;
        }
        counter = 0;
        command = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);