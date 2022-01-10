function solve(input) {
    let countOfStr = input.shift();
    let pattern = /!([A-Z][a-z]+)!\:(\[(\w{8,})\])/mg;
    let convertedMessage = [];
    for (let i = 0; i < countOfStr; i++) {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match != null) {
            let message = match[2];
            for (let i = 1; i < message.length - 1; i++) {
                convertedMessage.push(message[i].charCodeAt());
            }
            

            console.log(`${match[1]}: ${convertedMessage.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }

}

solve([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
]);
solve([
    "3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"
]);
