function bikeRace(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let roadType = input[2];

    let charge = 0;
    let juniorsCharge = 0;
    let seniorsCharge = 0;

    switch (roadType) {
        case "trail":
            juniorsCharge = juniors * 5.50;
            seniorsCharge = seniors * 7;
            charge = juniorsCharge + seniorsCharge;
            break;
        case "cross-country":
            juniorsCharge = juniors * 8;
            seniorsCharge = seniors * 9.50;
            charge = juniorsCharge + seniorsCharge;
            if (juniors + seniors >= 50) {
                charge *= 0.75;
            }
            break;
        case "downhill":
            juniorsCharge = juniors * 12.25;
            seniorsCharge = seniors * 13.75;
            charge = juniorsCharge + seniorsCharge;
            break;
        case "road":
            juniorsCharge = juniors * 20;
            seniorsCharge = seniors * 21.50;
            charge = juniorsCharge + seniorsCharge;
            break;
    }
    charge *= 0.95;
    console.log(charge.toFixed(2));
}
bikeRace(['3', '40', 'road']);