function inventory(list) {
    let herosList = [];

    for (let heroes of list) {
        let tokens = heroes.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let sort = tokens[2];
        let items = sort.split(', ').sort().join(', ');

        let heroesObject = {
            name,
            level,
            items
        }
        herosList.push(heroesObject);
    }
    herosList.sort((a, b) => parseFloat(a.level) - parseFloat(b.level));
    

    for (let heroes of herosList) {
        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items}`);
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);