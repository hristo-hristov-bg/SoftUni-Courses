function transportPrice(input) {

    let n = Number(input[0]);
    let timeOfTheDay = input[1];
    let taxi = 0;
    let bus = 0;
    let train = 0;

    if (timeOfTheDay === "day") {
        if (n < 20) {
            taxi = (n * 0.79) + 0.70;
            console.log(taxi.toFixed(2));
        } else if (n >= 20 && n < 100) {
            taxi = (n * 0.79) + 0.70;
            bus = n * 0.09;
            console.log(bus.toFixed(2));
        } else if (n >= 100) {
            taxi = (n * 0.79) + 0.70;
            bus = n * 0.09;
            train = n * 0.06;
            console.log(train.toFixed(2));
        }
    } else if (timeOfTheDay === "night") {
        if (n < 20) {
            taxi = (n * 0.90) + 0.70;
            console.log(taxi.toFixed(2));
        } else if (n >= 20 && n < 100) {
            taxi = (n * 0.90) + 0.70;
            bus = n * 0.09;
            console.log(bus.toFixed(2));
        } else if (n >= 100) {
            taxi = (n * 0.90) + 0.70;
            bus = n * 0.09;
            train = n * 0.06;
            console.log(train.toFixed(2));
        }
    }
}
transportPrice(['25', 'day']);