function solve(input) {
    let userName = input.shift();
    while (input[0] != 'Registration') {
        let tokens = input.shift().split(' ');
        if (tokens[0] === 'Letters') {
            if (tokens[1] === 'Lower') {
                userName = userName.replace(userName, userName.toLowerCase())
                console.log(userName);
            } else if (tokens[1] === 'Upper') {
                userName = userName.replace(userName, userName.toUpperCase())
                console.log(userName);
            }
        }
        if (tokens[0] === 'Reverse') {
            if (tokens[1] >= 0 && tokens[2] < userName.length) {
                let endIdx = Number(tokens[2]) + 1;
                let newName = userName.substring(tokens[1], endIdx);
                let reversed = newName.split('').reverse().join('');
                console.log(reversed)
            } else {
                break;
            }
        }
        if (tokens[0] === 'Substring') {
            if (userName.includes(tokens[1])) {
                userName = userName.replace(tokens[1], '');
                console.log(userName);
            } else {
                console.log(`The username ${userName} doesn't contain ${tokens[1]}.`)
            }
        }
        if (tokens[0] === 'Replace') {
            let found = userName.includes(tokens[1]);
            while (found) {
                userName = userName.replace(tokens[1], '-');
                found = userName.includes(tokens[1]);
            }
            console.log(userName)
        }
        if (tokens[0] === 'IsValid') {
            if (userName.includes(tokens[1])) {
                console.log('Valid username.');
            } else {
                console.log(`${tokens[1]} must be contained in your username.`);
            }
        }
    }
}

solve([
    "John",
    "Letters Lower",
    "Substring SA",
    "IsValid @",
    "Registration"
]);
solve([
    "ThisIsSoftUniS",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"
]);
