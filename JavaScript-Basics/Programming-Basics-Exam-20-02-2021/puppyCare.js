function puppyCare(input) {

    let food = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    index++;
    let foodCount = 0;

    while (command != "Adopted") {
        foodCount += Number(command);

        command = input[index];
        index++;
    }
    if (foodCount <= food) {
        console.log(`Food is enough! Leftovers: ${Math.abs(foodCount - food)} grams.`);
    } else if (foodCount > food) {
        console.log(`Food is not enough. You need ${Math.abs(food - foodCount)} grams more.`);
    }

}
puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])
