function trekkingMania(input) {

    let groupsNumber = Number(input[0]);
    index = 1;
    let peopleInGroupNumber = Number(input[index]);
    index++;
    let sumOfPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;


    for (let i = 1; i <= groupsNumber; i++) {
        if (peopleInGroupNumber <= 5) {
            musala += peopleInGroupNumber;
            sumOfPeople += peopleInGroupNumber;
        } else if (peopleInGroupNumber > 5 && peopleInGroupNumber <= 12) {
            monblan += peopleInGroupNumber;
            sumOfPeople += peopleInGroupNumber;
        } else if (peopleInGroupNumber > 12 && peopleInGroupNumber <= 25) {
            kilimandjaro += peopleInGroupNumber;
            sumOfPeople += peopleInGroupNumber;
        } else if (peopleInGroupNumber > 25 && peopleInGroupNumber <= 40) {
            k2 += peopleInGroupNumber;
            sumOfPeople += peopleInGroupNumber;
        } else if (peopleInGroupNumber > 40) {
            everest += peopleInGroupNumber;
            sumOfPeople += peopleInGroupNumber;
        }
        peopleInGroupNumber = Number(input[index]);
        index++;
    }
    console.log(`${((musala / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / sumOfPeople) * 100).toFixed(2)}%`);
}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);