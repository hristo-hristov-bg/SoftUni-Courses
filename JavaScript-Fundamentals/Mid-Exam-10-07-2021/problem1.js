function problem1(input) {

    let budget = Number(input[0]);
    let studentsNumber = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);
    let freePackage = 0;
    if (studentsNumber % 5 == 0) {
        freePackage = studentsNumber / 5;
    }
    let apronNeeded = apronPrice * Math.ceil(studentsNumber * 1.2);
    let eggsNeeded = eggPrice * 10 * studentsNumber;
    let flourNeeded = flourPrice * (studentsNumber - freePackage);
    let itemsNeeded = apronNeeded + eggsNeeded + flourNeeded;
    let difference = itemsNeeded - budget;

    if (itemsNeeded <= budget) {
        console.log(`Items purchased for ${itemsNeeded.toFixed(2)}$.`);
    } else if (itemsNeeded > budget) {
        console.log(`${(difference).toFixed(2)}$ more needed.`);
    }
}

problem1([50,
    2,
    1.0,
    0.10,
    10.0])
    ;