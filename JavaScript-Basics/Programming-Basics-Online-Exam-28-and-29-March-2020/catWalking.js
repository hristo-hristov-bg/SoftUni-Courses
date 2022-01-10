function catWalking(input) {

    let minutes = Number(input[0]);
    let walksCount = Number(input[1]);
    let calories = Number(input[2]);

    let sumMinutes = minutes * walksCount;
    let sumCalories = sumMinutes * 5;
    let halfCalories = calories / 2;

    if (sumCalories > halfCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${sumCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${sumCalories}.`);
    }
}
catWalking(['40', '2', '300']);