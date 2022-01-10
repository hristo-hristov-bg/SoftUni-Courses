function spiceMustFlow(spice) {
    let days = 0;
    let total = 0;

    for (let i = spice; i >= 100; i -= 10) {
        total += spice - 26;
        spice -= 10;
        days++;
    }

    total -= 26;
    if (total < 0) {
        total = 0;
    }
    console.log(days);
    console.log(total);
}
spiceMustFlow(111);