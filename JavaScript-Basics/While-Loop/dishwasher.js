function dishwasher(input) {

    let chemical = Number(input[0] * 750);
    let index = 1;
    let loadingCount = 1;
    let dishesCount = 0;
    let panCount = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let numberOfDishes = Number(command);

        if (loadingCount == 3) {
            chemical -= numberOfDishes * 15;
            loadingCount = 1;
            panCount += numberOfDishes;
        } else {
            chemical -= numberOfDishes * 5;
            dishesCount += numberOfDishes;
            loadingCount++;
        }
        if (chemical <= 0) {
            break;
        }

        command = input[index];
        index++;
    }
    if (command === "End") {
        console.log("Detergent was enough!");
        console.log(`${dishesCount} dishes and ${panCount} pots were washed.`);
        console.log(`Leftover detergent ${chemical} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(chemical)} ml. more necessary!`);
    }
}
dishwasher(["2", "53", "65", "55", "End"]);