function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let totalPrice = 0;
    let destination = "";
    let holidayType = "";

    if (budget <= 100) {
        if (season === "summer") {
            totalPrice = budget * 0.30;
            holidayType = "Camp";
        } else if (season === "winter") {
            totalPrice = budget * 0.70;
            holidayType = "Hotel";
        }
        destination = "Bulgaria";
    } else if (budget > 100 && budget <= 1000) {
        if (season === "summer") {
            totalPrice = budget * 0.40;
            holidayType = "Camp";
        } else if (season === "winter") {
            totalPrice = budget * 0.80;
            holidayType = "Hotel";
        }
        destination = "Balkans";
    } else if (budget > 1000) {
        totalPrice = budget * 0.90;
        destination = "Europe";
        holidayType = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${totalPrice.toFixed(2)}`);

}
journey(["1500", "summer"]);