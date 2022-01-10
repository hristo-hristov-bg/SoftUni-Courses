function foodForPets(input) {

    let numberOfDays = Number(input[0]);
    let amountOfFoodSum = Number(input[1]);
    let index = 2;
    let amountOfFodDog = Number(input[index]);
    index++;
    let amountOfFoodCat = Number(input[index]);
    index++;
    let sumDog = 0;
    let sumCat = 0;
    let biscuits = 0;
    let sumPercent = 0;
    let dogPercent = 0;
    let catPercent = 0;
    let biscuitsForDay = 0;

    for (let i = 1; i <= numberOfDays; i++) {
        sumDog += amountOfFodDog;
        sumCat += amountOfFoodCat;
        if (i % 3 == 0) {
            biscuitsForDay = (amountOfFodDog + amountOfFoodCat) * 0.10;
            biscuits += biscuitsForDay;
        }

        amountOfFodDog = Number(input[index]);
        index++;
        amountOfFoodCat = Number(input[index]);
        index++;
    }
    sumPercent = ((sumDog + sumCat) * 100) / amountOfFoodSum;
    dogPercent = (sumDog * 100) / (sumDog + sumCat);
    catPercent = (sumCat * 100) / (sumDog + sumCat);

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${sumPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);

}
foodForPets(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])