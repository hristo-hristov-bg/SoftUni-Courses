function harvest(input) {

    let xSquareM = Number(input[0]);
    let yGrapeForM2 = Number(input[1]);
    let zLitresWine = Number(input[2]);
    let workersNumber = Number(input[3]);

    let grapeHarvest = xSquareM * yGrapeForM2;
    let wine = (grapeHarvest * 0.40) / 2.5;

    if (wine >= zLitresWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - zLitresWine)} liters left -> ${Math.ceil((wine - zLitresWine) / workersNumber)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(zLitresWine - wine)} liters wine needed.`);
    }
}
harvest(['1020', '1.5', '425', '4']);