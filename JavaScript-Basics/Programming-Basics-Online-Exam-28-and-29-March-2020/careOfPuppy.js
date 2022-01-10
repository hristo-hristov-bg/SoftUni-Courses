function careOfPuppy(input) {

    let food = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    index++;
    let sumFoodPerDay = 0;

    while (command !== "Adopted") {
        let foodPerDay = Number(command);
        sumFoodPerDay += foodPerDay;

        command = input[index];
        index++;
    }
    if (sumFoodPerDay <= food) {
        console.log(`Food is enough! Leftovers: ${food - sumFoodPerDay} grams.`);
    } else {
        console.log(`Food is not enough. You need ${sumFoodPerDay - food} grams more.`);
    }
}
careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"]);