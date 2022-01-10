function solve(input) {
    let collection = {

    };

    while (input[0] != 'Sail') {
        let tokens = input.shift().split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (collection[city] == undefined) {
            collection[city] = {
                population: population,
                gold: gold
            }
        } else {
            collection[city].population += population;
            collection[city].gold += gold;
        }
    }



    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        if (tokens[0] == 'Plunder') {
            console.log(`${tokens[1]} plundered! ${tokens[3]} gold stolen, ${tokens[2]} citizens killed.`);
            collection[tokens[1]].population -= Number(tokens[2]);
            collection[tokens[1]].gold -= Number(tokens[3]);

            if (collection[tokens[1]].population <= 0 || collection[tokens[1]].gold <= 0) {
                delete collection[tokens[1]];
                console.log(`${tokens[1]} has been wiped off the map!`);
            }
        } else if (tokens[0] == 'Prosper') {
            if (tokens[2] < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                collection[tokens[1]].gold += Number(tokens[2]);
                console.log(`${tokens[2]} gold added to the city treasury. ${tokens[1]} now has ${collection[tokens[1]].gold} gold.`);
            }
        }
    }

    let sorted = Object.entries(collection).sort((a, b) => {
        goldA = a[1].gold;
        goldB = b[1].gold;

        cityA = a[0];
        cityB = b[0];

        return goldB - goldA || cityA.localeCompare(cityB);
    })

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`)
        for (let [city, piece] of sorted) {
            console.log(`${city} -> Population: ${piece.population} citizens, Gold: ${piece.gold} kg`)
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
    
}

solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);

console.log('--------');

solve([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "Plunder=>San Juan=>930000=>1250",
    "End"
]);