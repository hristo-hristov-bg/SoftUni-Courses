function dishwasher(input) {

    let liquid = Number(input[0]) * 750;
    let index = 1;
    let command = input[index];
    index++;
    let plates = 0;
    let pots = 0;
    while (command !== "End") {
        let currentDish = Number(command);
        if ((index - 1) % 3 == 0) {
            pots += currentDish;
            liquid -= currentDish * 15;
        } else {
            plates += currentDish;
            liquid -= currentDish * 5;
        }
        if (liquid < 0) {
            console.log(`Not enough detergent, ${Math.abs(liquid)} ml. more necessary!`);
            break;
        }

        command = input[index];
        index++;
    }
    if (liquid >= 0) {
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${liquid} ml.`);
    }
}
dishwasher(['1', '10', '15', '10', '12', '13', '30']);