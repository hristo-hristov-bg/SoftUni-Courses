function solve(input) {
    let result = {};
    let count = 0;
    while (input[0] != 'Stop') {
        let [command, name, meal] = input.shift().split('-')
        if (command === 'Like') {
            if (!Object.keys(result).includes(name)) {
                result[name] = [];
            }
            if (!Object.values(result).includes(meal)) {
                result[name] = [meal];
            }
        }
        if (command === 'Unlike') {
            if (Object.entries(result).includes(meal)) {
                delete result[meal];
                console.log(`${name} doesn't like the ${meal}.`)
                count++;
            }
            if (!Object.entries(result).includes(name)) {
                console.log(`${name} is not at the party.`)
            }
            if (!Object.entries(result).includes(meal)) {
                console.log(`${name} doesn't have the ${meal} in his/her collection.`)
                count++;
            }
        }

    }
    let sorted = Object.entries(result).sort((a, b) =>
        a[0].localeCompare(b[0])) ||
        Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y);;
    for (let [key, value] of sorted) {
        console.log(`${key}: ${value}`);
    }
    console.log(`Unliked meals: ${count}`);
}

solve([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
]);
solve([
    "Like-Krisi-shrimps",
    "Unlike-Vili-carp",
    "Unlike-Krisi-salad",
    "Stop"
]);
solve([
    "Like-Katy-fish",
    "Unlike-Katy-fish",
    "Stop"
]);